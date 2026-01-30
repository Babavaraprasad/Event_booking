import {useState, useEffect} from "react";
import { Event } from "../types/Event";

export default function EventList(){
 const [events, setEvents] = useState<Event[]>([]);
 const [isloading, setloading] = useState(true);
 
 const apiUrl = "https://mocki.io/v1/af609a82-bdbb-4149-85eb-56248cbdba58";
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
            {events.map(event =>(
                    <div key={event.id} style={{ border: "1px solid #ccc", padding: 12, marginBottom: 8 }}>
                    <h3>{event.name}</h3>
                    <p>Date: {event.date}</p>
                    <p>Available seats: {event.availableSeats}</p>
                    <button>view details</button>
                    </div>
                ))
            }
        </div>
    );
}

// concepts fetch Js API for handling endpoint
// iterative rendering
//useEffect- to fetch API data on component initial render
// useState - hold data inside component