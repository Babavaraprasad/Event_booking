
using System.Text.Json;
  public class EventFileStorage
{
    private readonly string _filePath = "Data/events.json";

    public List<Event> GetEventsData()
    {
        if (!File.Exists(_filePath))
            return new List<Event>();

        var content = File.ReadAllText(_filePath);

        return JsonSerializer.Deserialize<List<Event>>(content,
            new JsonSerializerOptions
            {
                PropertyNameCaseInsensitive = true
            }) ?? new List<Event>();
    }
    public void SaveEventData(List<Event>events)
    {
         var content = JsonSerializer.Serialize(events, new JsonSerializerOptions { WriteIndented = true });
        File.WriteAllText(_filePath, content);
    }
}  

