using Microsoft.AspNetCore.Components.Web;
using Microsoft.AspNetCore.Components.WebAssembly.Hosting;
using ReactCourseInBlazor;
using MudBlazor.Services;
using ReactCourseInBlazor.Services;

var builder = WebAssemblyHostBuilder.CreateDefault(args);
builder.RootComponents.Add<App>("#app");
builder.RootComponents.Add<HeadOutlet>("head::after");

builder.Services.AddMudServices();
builder.Services.AddScoped(sp => new HttpClient { BaseAddress = new Uri(builder.HostEnvironment.BaseAddress) });
builder.Services.AddScoped<DataService>();
builder.Services.AddScoped<LectureDataService>();

var host = builder.Build();

//Loads the lectures data from json before the site is running.
var lectureService = host.Services.GetRequiredService<LectureDataService>();
await lectureService.LoadLectures();

await host.RunAsync();