import { useNavigate, useLocation} from "react-router-dom";
import { useState } from "react";
import { Event } from "../types/Event";

export default function EventDetails(){
    const [selectedSeats, setSelectedSeats] = useState<number>(1);
    const location = useLocation();
    const event = location.state.event as Event;

    const navigate = useNavigate();
    const handleBook = async() => {
    try {
        const response = await fetch("http://localhost:5279/api/events/book",{
            method:"POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ eventId: event.id, seats: selectedSeats }),
        });

        const latestEvents: Event[] = await response.json();
        navigate("/", {state: {events:latestEvents}});

    } catch (error) {
        console.log(error);
    }
    }

    return(
       <div style={{ padding: "20px" }}>
        <h2 style={{backgroundColor: "#ff9b095e"}}>{event.name}</h2>
        <p><strong>Date:</strong> {event.date}</p>
        <p><strong>Available Seats:</strong> {event.availableSeats}</p>
        <p style={{border:"0 0 5px 0px dotted #ff9b095e"}}>{event.description}</p>
        <p><strong>seats to  book:</strong></p>
        <select
        value={selectedSeats}
        onChange={(e) => setSelectedSeats(Number(e.target.value))}
      >
        {Array.from({ length: event.availableSeats }, (_, i) => i + 1).map((num) => (
          <option key={num} value={num}>{num}</option>
        ))}
      </select>
        <button onClick={handleBook}>Book event</button>
       </div>
    );
}