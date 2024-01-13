namespace ReactCourseInBlazor.Common.Models.Lecture01;

public class ContactUsFormModel
{
    public string FirstName { get; set; }
    public string LastName { get; set; }
    public string Email { get; set; }
    public int Gender { get; set; }
    public string City { get; set; }
    public string Message { get; set; }

    public override string ToString()
    {
        return $"""
                                FirstName: {FirstName},
                                LastName: {LastName},
                                Email: {Email},
                                Gender: {Gender},
                                City: {City},
                                Message: {Message}
                """;
    }
}