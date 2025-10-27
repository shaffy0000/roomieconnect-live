import React from 'react';
import './FeaturedRooms.css';

const FeaturedRooms: React.FC = () => {
  const rooms = [
    {
      id: 1,
      title: "Room in University Residence",
      price: "$150/month",
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      features: ["WiFi", "Study Area", "Shared Kitchen"]
    },
    {
      id: 2,
      title: "Shared Room Near Campus",
      price: "$120/month",
      image: "https://images.unsplash.com/photo-1586105251261-72a756497a11?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      features: ["Near Campus", "Affordable", "Clean"]
    },
    {
      id: 3,
      title: "Private Room with Ensuite",
      price: "$200/month",
      image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      features: ["Private Bathroom", "Modern", "Quiet"]
    }
  ];

  return (
    <section className="featured-rooms section">
      <div className="container">
        <h2 className="section-title">Featured Rooms</h2>
        <p className="section-subtitle">
          Discover our most popular accommodations perfect for students
        </p>
        
        <div className="rooms-grid grid grid-3">
          {rooms.map((room) => (
            <div key={room.id} className="room-card card">
              <img 
                src={room.image} 
                alt={room.title}
                className="card-image room-image"
              />
              <div className="room-content">
                <h3 className="card-title">{room.title}</h3>
                <p className="room-price">{room.price}</p>
                <div className="room-features">
                  {room.features.map((feature, index) => (
                    <span key={index} className="room-feature-tag">
                      {feature}
                    </span>
                  ))}
                </div>
                <button className="btn btn-primary room-btn">View Details</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedRooms;