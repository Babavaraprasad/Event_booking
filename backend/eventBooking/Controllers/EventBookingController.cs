using Microsoft.AspNetCore.Mvc;

[ApiController]
[Route("api/events")]
public class EventsBookingController : ControllerBase
{
    private readonly EventBookingService _eventService;

    public EventsBookingController(EventBookingService eventService)
    {
        _eventService = eventService;
    }

    [HttpGet]
    public IActionResult GetEvents()
    {
        return Ok(_eventService.GetEvents());
    }

    [HttpPost("book")]
    public IActionResult BookEvent([FromBody] BookingRequest request)
    {
        try
        {
            var updatedEvent = _eventService.BookEvent(request.EventId, request.Seats);
            return Ok(updatedEvent);
        }
        catch(Exception ex)
        {
            return BadRequest(new { message = ex.Message });  
        }
    }
}