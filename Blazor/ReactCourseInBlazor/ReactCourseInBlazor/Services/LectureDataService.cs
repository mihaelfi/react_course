using System.Net.Http.Json;
using ReactCourseInBlazor.Common.Models;

namespace ReactCourseInBlazor.Services;

public class LectureDataService : ServiceNotifyChange
{
    private readonly HttpClient _httpClient;
    public LectureDataService(HttpClient httpClient)
    {
        _httpClient = httpClient;
        Lectures = new List<LectureModel>();
    }
    public List<LectureModel> Lectures { get; set; }

    public void UpdateLectures(List<LectureModel> lectures)
    {
        Lectures = lectures;
        NotifyStateChanged();
    }

    public async Task LoadLectures()
    {
        var result = await _httpClient.GetFromJsonAsync<LectureModel[]>("sample-data/LectureNavData/lecture_nav_data.json");
        if (result != null) UpdateLectures(result.ToList());
    }
}