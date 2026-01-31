import {useState, useEffect} from "react";
import { Event } from "../types/Event";
import {data, Link} from "react-router-dom";

export default function EventList(){
 const [events, setEvents] = useState<Event[]>([]);
 const [isloading, setloading] = useState(true);
 
 const apiUrl = "http://localhost:5279/api/events";
 useEffect(()=>{
       fetch(apiUrl)
       .then(res => res.json())
       .then(data => 
        {setEvents(data);
        setloading(false);
        })
        .catch((err)=> console.log(err));
 }, []);

 if(isloading) {return <p>Loading items....</p>}


    return(
        <div>
            <h2>Upcoming Events</h2>
            <div style={{display: "flex", flexDirection:"column"}}>
            {events.map(event =>(
                <div key={event.id} style={{ border: "1px solid #ccc", padding: 12, marginBottom: 14, backgroundColor:"whitesmoke", display:"flex", 
                    flexDirection:"row", justifyContent:"space-evenly", alignItems:"center", borderRadius:"10px"}}>
                    <h3>{event.name}</h3>
                    <p>Date: {event.date}</p>
                    <p>Available seats: {event.availableSeats}</p>
                    <Link to={`events/${event.id}`} state={{event}}>View Details</Link>
                </div>
            ))
            }
            </div>
        </div>
    );
}

// concepts fetch Js API for handling endpoint
// iterative rendering
//useEffect- to fetch API data on component initial render
// useState - hold data inside component