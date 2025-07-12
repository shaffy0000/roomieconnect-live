import os
from dotenv import load_dotenv
from supabase import create_client

# Load env
load_dotenv()

SUPABASE_URL = os.getenv("SUPABASE_URL")
SUPABASE_KEY = os.getenv("SUPABASE_KEY")
SUPABASE_SERVICE_ROLE_KEY = os.getenv("SUPABASE_SERVICE_ROLE_KEY")

print("✅ SUPABASE_URL loaded:", SUPABASE_URL)
print("✅ SUPABASE_KEY loaded:", "Yes" if SUPABASE_KEY else "No")
print("✅ SUPABASE_SERVICE_ROLE_KEY loaded:", "Yes" if SUPABASE_SERVICE_ROLE_KEY else "No")

supabase = create_client(SUPABASE_URL, SUPABASE_KEY)
