public class Event
{
    public int Id {get; set;}
    public string Name {get; set;} = string.Empty;
    public DateOnly Date{get; set;}
    public int AvailableSeats {get; set;}
}