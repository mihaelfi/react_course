namespace ReactCourseInBlazor.Services;

public abstract class ServiceNotifyChange
{
    public event Action? OnChange;
    protected void NotifyStateChanged() => OnChange?.Invoke();
}