from flask import Flask, render_template, request, redirect, url_for, session
from werkzeug.utils import secure_filename
from config import SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY
from supabase import create_client
import os, hashlib

app = Flask(__name__, template_folder=os.path.abspath(os.path.join(os.path.dirname(__file__), '../templates')))
app.secret_key = 'supersecretkey_change_this'

supabase = create_client(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY)

# ------------------ HOME ------------------
@app.route('/')
def home():
    return render_template('home.html')


# ------------------ SIGNUP ------------------
@app.route('/signup', methods=['GET', 'POST'])
def signup():
    if request.method == 'POST':
        email = request.form['email']
        password_hash = hashlib.sha256(request.form['password'].encode()).hexdigest()
        full_name = request.form['full_name']
        role = request.form['role']
        try:
            res = supabase.table("users").insert({
                "email": email, "password_hash": password_hash, "full_name": full_name, "role": role
            }).execute()
            if res and res.data:
                user_id = res.data[0]['id']
                print("✅ Signup successful:", user_id)
                return redirect(url_for('owner_profile' if role=="owner" else 'student_profile', user_id=user_id))
        except Exception as e:
            print("❌ Exception during signup:", e)
            return "Signup failed", 500
    return render_template('auth/signup.html')


# ------------------ LOGIN ------------------
@app.route('/login', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        email = request.form['email']
        password_hash = hashlib.sha256(request.form['password'].encode()).hexdigest()
        try:
            res = supabase.table("users").select("*").eq("email", email).eq("password_hash", password_hash).execute()
            user = res.data
            if user:
                session['user_id'] = user[0]['id']
                session['role'] = user[0]['role']
                print(f"✅ Login success: {user[0]['role']} ID={user[0]['id']}")
                return redirect(url_for('owner_dashboard' if user[0]['role']=="owner" else 'student_dashboard'))
        except Exception as e:
            print("❌ Exception during login:", e)
            return "Login failed", 500
    return render_template('auth/login.html')


# ------------------ OWNER PROFILE ------------------
@app.route('/owner-profile', methods=['GET', 'POST'])
def owner_profile():
    user_id = request.args.get('user_id') or session.get('user_id')
    if not user_id: return redirect(url_for('login'))

    if request.method == 'POST':
        profile_pic = request.files.get('profile_picture')
        profile_pic_url = None
        if profile_pic:
            filename = f"{user_id}_owner_{secure_filename(profile_pic.filename)}"
            try:
                supabase.storage.from_('documents').upload(f"owner_profiles/{filename}", profile_pic.read(), {"content-type": profile_pic.mimetype})
                profile_pic_url = f"{SUPABASE_URL}/storage/v1/object/public/documents/owner_profiles/{filename}"
            except Exception as e: print("❌ Upload error:", e)

        data = {
            "user_id": user_id,
            "phone": request.form.get('phone'),
            "cnic": request.form.get('cnic'),
            "bio": request.form.get('bio'),
            "profile_picture": profile_pic_url
        }
        try:
            supabase.table("owner_profiles").insert(data).execute()
            print("✅ Owner profile saved")
        except Exception as e:
            print("❌ Insert error:", e)
            return "Profile save failed", 500
        return redirect(url_for('owner_dashboard'))
    return render_template('owner/complete_profile.html', user_id=user_id)


# ------------------ STUDENT PROFILE ------------------
@app.route('/student-profile', methods=['GET', 'POST'])
def student_profile():
    user_id = request.args.get('user_id') or session.get('user_id')
    if not user_id: return redirect(url_for('login'))

    institutes = supabase.table("institutes").select("*").execute().data or []

    if request.method == 'POST':
        form = request.form
        profile_pic, student_card = request.files.get('profile_picture'), request.files.get('student_card_image')
        profile_pic_url = student_card_url = None

        if profile_pic:
            filename = f"{user_id}_student_{secure_filename(profile_pic.filename)}"
            supabase.storage.from_('documents').upload(f"student_profiles/{filename}", profile_pic.read(), {"content-type": profile_pic.mimetype})
            profile_pic_url = f"{SUPABASE_URL}/storage/v1/object/public/documents/student_profiles/{filename}"

        if student_card:
            filename = f"{user_id}_card_{secure_filename(student_card.filename)}"
            supabase.storage.from_('documents').upload(f"student_cards/{filename}", student_card.read(), {"content-type": student_card.mimetype})
            student_card_url = f"{SUPABASE_URL}/storage/v1/object/public/documents/student_cards/{filename}"

        data = {
            "user_id": user_id,
            "gender": form.get('gender'), "age": int(form.get('age', 0)),
            "phone": form.get('phone'), "city": form.get('city'), "institute_id": form.get('institute_id'),
            "budget_min": int(form.get('budget_min', 0)), "budget_max": int(form.get('budget_max', 0)),
            "cleanliness_level": int(form.get('cleanliness_level', 5)), "noise_tolerance": int(form.get('noise_tolerance', 5)),
            "smoking_preference": form.get('smoking_preference'), "bio": form.get('bio'),
            "profile_picture": profile_pic_url, "student_card_image": student_card_url
        }
        try:
            supabase.table("student_profiles").insert(data).execute()
            print("✅ Student profile saved")
        except Exception as e:
            print("❌ Insert error:", e)
            return "Profile save failed", 500
        return redirect(url_for('home'))
    return render_template('student/complete_profile.html', user_id=user_id, institutes=institutes)


# ------------------ OWNER DASHBOARD ------------------
@app.route('/owner/dashboard')
def owner_dashboard():
    user_id = session.get('user_id')
    if not user_id: return redirect(url_for('login'))
    owner = supabase.table("users").select("full_name").eq("id", user_id).execute().data[0]
    rooms = supabase.table("rooms").select("*").eq("owner_id", user_id).execute().data
    return render_template('owner/dashboard.html', owner=owner, rooms=rooms)


# ------------------ ADD ROOM ------------------
@app.route('/owner/add-room', methods=['GET', 'POST'])
def add_room():
    user_id = session.get('user_id')
    if not user_id: return redirect(url_for('login'))

    if request.method == 'POST':
        form, image_url = request.form, None
        file = request.files.get('image')
        if file:
            filename = f"{user_id}_{secure_filename(file.filename)}"
            supabase.storage.from_('documents').upload(f"room_images/{filename}", file.read(), {"content-type": file.mimetype})
            image_url = f"{SUPABASE_URL}/storage/v1/object/public/documents/room_images/{filename}"

        room_res = supabase.table("rooms").insert({
            "owner_id": user_id, "title": form.get('title'), "description": form.get('description'),
            "rent_amount": int(form.get('price', 0)), "city": form.get('location'), "area": form.get('area'),
            "address": form.get('address'), "gender_preference": form.get('gender_preference'),
            "room_type": form.get('room_type'), "is_available": True, "image_url": image_url
        }).execute()

        new_room_id = room_res.data[0]['id']
        supabase.table("room_facilities").insert({
            "room_id": new_room_id, "wifi": 'wifi' in form, "ac": 'ac' in form, "heater": 'heater' in form,
            "laundry": 'laundry' in form, "parking": 'parking' in form, "kitchen_access": 'kitchen_access' in form,
            "furnished": 'furnished' in form, "security": 'security' in form
        }).execute()
        print("✅ Room & facilities added")
        return redirect(url_for('owner_dashboard'))
    return render_template('owner/add_room.html')


# ------------------ STUDENT DASHBOARD ------------------
@app.route('/student/dashboard')
def student_dashboard():
    user_id = session.get('user_id')
    if not user_id or session.get('role')!="student": return redirect(url_for('login'))

    city, min_price, max_price, gender = request.args.get('city',''), request.args.get('min_price'), request.args.get('max_price'), request.args.get('gender')
    wifi, furnished = request.args.get('wifi'), request.args.get('furnished')

    query = supabase.table("rooms").select("*").eq("is_available", True)
    if city: query = query.ilike("city", f"%{city}%")
    if min_price: query = query.gte("rent_amount", int(min_price))
    if max_price: query = query.lte("rent_amount", int(max_price))
    if gender: query = query.eq("gender_preference", gender)

    rooms = query.execute().data
    if wifi or furnished:
        rooms = [room for room in rooms if (fac := supabase.table("room_facilities").select("*").eq("room_id", room['id']).execute().data)[0] if (not wifi or fac[0]['wifi']) and (not furnished or fac[0]['furnished'])]

    return render_template('student/dashboard.html', rooms=rooms, filters={"city": city, "min_price": min_price, "max_price": max_price, "gender": gender, "wifi": wifi, "furnished": furnished})


# ------------------ VIEW ROOM ------------------
@app.route('/room/<room_id>')
def view_room(room_id):
    try:
        room = supabase.table("rooms").select("*").eq("id", room_id).single().execute().data
        facilities = supabase.table("room_facilities").select("*").eq("room_id", room_id).single().execute().data or {}
        images = supabase.table("room_images").select("*").eq("room_id", room_id).execute().data or []

        # get reviews
        reviews_res = supabase.table("reviews").select("*").eq("room_id", room_id).order("created_at", desc=True).execute()
        reviews = reviews_res.data or []
        avg_rating = None
        if reviews:
            avg_rating = round(sum(r['rating'] for r in reviews) / len(reviews), 1)

        return render_template("student/room_detail.html", room=room, facilities=facilities, images=images, reviews=reviews, avg_rating=avg_rating)
    except Exception as e:
        print("❌ Room detail error:", e)
        return "Error", 500



# ------------------ BOOK ROOM ------------------
@app.route('/book-room/<room_id>', methods=['POST'])
def book_room(room_id):
    user_id = session.get('user_id')
    if not user_id: return redirect(url_for('login'))
    message = request.form.get('message')
    room = supabase.table("rooms").select("owner_id").eq("id", room_id).single().execute().data
    supabase.table("bookings").insert({"room_id": room_id, "owner_id": room["owner_id"], "student_id": user_id, "message": message, "status": "pending"}).execute()
    print("✅ Booking added")
    return redirect(url_for('student_dashboard'))


# ------------------ OWNER: View & update requests + send notification ------------------
# ------------------ OWNER VIEW & UPDATE REQUESTS ------------------
@app.route('/owner/requests')
def view_requests():
    user_id = session.get('user_id')
    if not user_id: return redirect(url_for('login'))
    requests = supabase.table("bookings").select("*").eq("owner_id", user_id).execute().data
    return render_template('owner/view_requests.html', requests=requests)


# ✏️ Updated function name and endpoint
@app.route('/owner/update-booking-status/<booking_id>/<new_status>', methods=['POST'])
def owner_update_booking_status(booking_id, new_status):
    user_id = session.get('user_id')
    if not user_id:
        return redirect(url_for('login'))

    print(f"⚙️ Updating booking: id={booking_id}, new_status={new_status}")

    try:
        res = supabase.table("bookings") \
            .update({"status": new_status}) \
            .eq("id", booking_id).execute()

        print(f"✅ Supabase response: {res}")

        if res and res.data:
            booking = res.data[0]
            student_id = booking["student_id"]
            room_id = booking["room_id"]
            message = f"Your booking request for room #{room_id} was {new_status}."

            # Insert notification
            supabase.table("notifications").insert({
                "user_id": student_id,
                "message": message
            }).execute()

            print("✅ Notification inserted")
        else:
            print(f"❌ Failed to update booking: {res}")
    except Exception as e:
        print("❌ Exception while updating booking:", e)
        return "Update failed", 500

    return redirect(url_for('view_requests'))


# ------------------ STUDENT: Bookings & Notifications ------------------
@app.route('/student/bookings')
def student_bookings():
    user_id = session.get('user_id')
    if not user_id: return redirect(url_for('login'))
    bookings = supabase.table("bookings").select("*").eq("student_id", user_id).execute().data
    return render_template("student/bookings.html", bookings=bookings)


@app.route('/student/notifications')
def student_notifications():
    user_id = session.get('user_id')
    if not user_id: return redirect(url_for('login'))
    notifications = supabase.table("notifications").select("*").eq("user_id", user_id).order("created_at", desc=True).execute().data or []
    return render_template("student/notifications.html", notifications=notifications)

@app.route('/room/<room_id>/add-review', methods=['POST'])
def add_review(room_id):
    user_id = session.get('user_id')
    if not user_id or session.get('role') != "student":
        return redirect(url_for('login'))
    
    rating = int(request.form.get('rating', 0))
    comment = request.form.get('comment', '')
    
    try:
        # insert review
        supabase.table("reviews").insert({
            "room_id": room_id,
            "student_id": user_id,
            "rating": rating,
            "comment": comment
        }).execute()
        print("✅ Review added")
    except Exception as e:
        print("❌ Review insert failed:", e)
    
    return redirect(url_for('view_room', room_id=room_id))

# ------------------ ROOM CHAT ------------------
@app.route('/messages/<room_id>/<other_user_id>')
def view_chat(room_id, other_user_id):
    user_id = session.get('user_id')
    if not user_id:
        return redirect(url_for('login'))

    try:
        # ✅ Supabase correct: .or_() me ek single string with comma to join conditions
        # AND operator ko & likhty hain between fields inside each condition
        res = supabase.table("messages") \
            .select("*") \
            .eq("room_id", room_id) \
            .or_(f"and(sender_id.eq.{user_id},receiver_id.eq.{other_user_id}),"
                 f"and(sender_id.eq.{other_user_id},receiver_id.eq.{user_id})") \
            .order("created_at") \
            .execute()
        messages = res.data or []
        print("✅ Loaded messages:", len(messages))
    except Exception as e:
        print("❌ Error loading messages:", e)
        return "Internal Server Error", 500

    return render_template("chat/chat_page.html", messages=messages,
                           room_id=room_id, other_user_id=other_user_id)


# ------------------ SEND MESSAGE ------------------
@app.route('/send-message', methods=['POST'])
def send_message():
    user_id = session.get('user_id')
    if not user_id:
        return redirect(url_for('login'))

    room_id = request.form.get('room_id')
    receiver_id = request.form.get('receiver_id')   # ✅ make sure form me input ka name bhi receiver_id ho
    text = request.form.get('text')

    if text:
        try:
            supabase.table("messages").insert({
                "sender_id": user_id,
                "receiver_id": receiver_id,
                "room_id": room_id,
                "text": text
            }).execute()
            print("✅ Message sent")
        except Exception as e:
            print("❌ Failed to send message:", e)

    # ✅ Redirect back to chat page
    return redirect(url_for('view_chat', room_id=room_id, other_user_id=receiver_id))


# ------------------ START CHAT ------------------
@app.route('/start-chat', methods=['POST'])
def start_chat():
    user_id = session.get('user_id')
    if not user_id:
        return redirect(url_for('login'))

    room_id = request.form.get('room_id')
    receiver_id = request.form.get('receiver_id')

    try:
        # ✅ Check if any previous message exists between user & receiver in this room
        res = supabase.table("messages") \
            .select("id") \
            .or_(f"and(room_id.eq.{room_id},sender_id.eq.{user_id},receiver_id.eq.{receiver_id}),"
                 f"and(room_id.eq.{room_id},sender_id.eq.{receiver_id},receiver_id.eq.{user_id})") \
            .limit(1).execute()
        print("✅ Existing chat check response:", res)
    except Exception as e:
        print("❌ Failed to check existing chat:", e)
        return "Internal Server Error", 500

    # ✅ Always go to chat page, even if no old message
    return redirect(url_for('view_chat', room_id=room_id, other_user_id=receiver_id))


@app.route('/messages')
def messages_inbox():
    user_id = session.get('user_id')
    if not user_id:
        return redirect(url_for('login'))

    try:
        res = supabase.table("messages") \
            .select("room_id,sender_id,receiver_id") \
            .or_(f"sender_id.eq.{user_id},receiver_id.eq.{user_id}") \
            .execute()

        all_msgs = res.data or []

        threads, seen = [], set()
        for msg in all_msgs:
            # ✅ Defensive check
            other_id = None
            if msg["sender_id"] and msg["receiver_id"]:
                other_id = msg["receiver_id"] if msg["sender_id"] == user_id else msg["sender_id"]

            if other_id:
                key = (msg["room_id"], other_id)
                if key not in seen:
                    seen.add(key)
                    threads.append({
                        "room_id": msg["room_id"],
                        "other_user_id": other_id
                    })

        print("✅ Inbox threads loaded:", len(threads))
    except Exception as e:
        print("❌ Inbox load failed:", e)
        return "Internal Server Error", 500

    return render_template("chat/inbox.html", threads=threads)



# ------------------ RUN ------------------
if __name__ == '__main__':
    app.run(debug=True)
