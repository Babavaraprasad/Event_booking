
/*import React, { useState, useEffect } from "react";
import { getMyBookings } from "./api";

export default function MyBookings() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    getMyBookings("user123").then(res => setBookings(res.data));
  }, []);

  return (
    <div>
      <h1>My Bookings</h1>
      {bookings.length === 0 ? <p>No bookings yet</p> : (
        bookings.map(b => (
          <div key={b.id} style={{ border: "1px solid #ccc", margin: "10px", padding: "10px" }}>
            <h3>{b.event.name}</h3>
            <p>Date: {new Date(b.event.date).toLocaleDateString()}</p>
            <p>Seats booked: {b.seatsBooked}</p>
            {b.id && <p>Booking ID: #{b.id}</p>}
          </div>
        ))
      )}
    </div>
  );
}*/
