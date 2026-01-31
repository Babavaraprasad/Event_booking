import { useLocation } from "react-router-dom";
import { Event } from "../types/Event";

export default function EventDetails(){
    const location = useLocation();
    const event = location.state.event as Event;

    return(
       <div style={{ padding: "20px" }}>
        <h2>{event.name}</h2>
        <p><strong>Date:</strong> {event.date}</p>
        <p><strong>Available Seats:</strong> {event.availableSeats}</p>
        <p>{event.description}</p>
        <button>Book event</button>
       </div>
    );
}