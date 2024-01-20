namespace ReactCourseInBlazor.Common.Models;

public class LectureModel
{
    public int Index { get; set; }
    public DateOnly LectureDate { get; set; }
    public List<AssignmentModel>? LectureAssignments { get; set; }
}

public class AssignmentModel
{
    public int Index { get; set; }
    public string? Title { get; set; }
    public string? AssigmentPageRoute { get; set; }
    public string? AssignmentSolutionRoute { get; set; }
    public string? AssignmentUrl { get; set; }
    public List<AssigmentTask>? Tasks { get; set; }
}

public class AssigmentTask
{
    public int? Index { get; set; }
    public string? TaskDescription { get; set; }
}