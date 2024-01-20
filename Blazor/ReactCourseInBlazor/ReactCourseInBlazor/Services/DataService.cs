using ReactCourseInBlazor.Common.Models.Lecture01;

namespace ReactCourseInBlazor.Services;

public class DataService: ServiceNotifyChange
{
    public ContactUsFormModel FormModel { get; set; } = new();

    public string? LectureTwoSolutionTitle { get; private set; }

    public void ChangeLectureTwoTitle(string title)
    {
        LectureTwoSolutionTitle = title;
        Console.WriteLine($"[DataService]: Setting title to {title}");
        NotifyStateChanged();
    }
}