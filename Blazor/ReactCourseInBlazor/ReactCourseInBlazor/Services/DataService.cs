using ReactCourseInBlazor.Common.Models.Lecture01;

namespace ReactCourseInBlazor.Services;

public class DataService
{
    public event Action OnChange;
    private void NotifyStateChanged() => OnChange?.Invoke();
    public ContactUsFormModel FormModel { get; set; } = new();

    public string? LectureTwoSolutionTitle { get; private set; }

    public void ChangeLectureTwoTitle(string title)
    {
        LectureTwoSolutionTitle = title;
        Console.WriteLine($"[DataService]: Setting title to {title}");
        NotifyStateChanged();
    }
}