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
}