public class Event
{
    public int Id {get; set;}
    public string Name {get; set;} = string.Empty;
    public DateOnly Date{get; set;}
    public int AvailableSeats {get; set;}
    public string Description{get; set;} = string.Empty;
}

public class BookingRequest
{
    public int EventId {get; set;}
    public int Seats {get; set;}
}