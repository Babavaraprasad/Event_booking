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
}
