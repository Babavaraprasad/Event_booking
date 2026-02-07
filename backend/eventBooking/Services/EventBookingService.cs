using System.Text.Json;

public class EventBookingService
{
    private readonly EventFileStorage _storage;

    public EventBookingService(EventFileStorage storage)
    {
        _storage = storage;
    }

    public List<Event> GetEvents()
    {
        return _storage.GetEventsData();
    }

    public Event BookEvent(int EventId, int Seats)
    {
       var events = GetEvents();
       var ev = events.FirstOrDefault(e => e.Id == EventId);
        if (ev == null) throw new Exception("Event not found");
        
       if(ev.AvailableSeats < Seats)
       throw new Exception("Not enough available seats");
       ev.AvailableSeats = ev.AvailableSeats - Seats;
       _storage.SaveEventData(events);
       return ev;
    }

    
}
