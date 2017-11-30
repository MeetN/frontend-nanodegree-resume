var bio = {
  "name" : "Meet Nathwani",
  "welcomeMessage" : "No half-measures",
  "role" : "Web Developer",
  "biopic" : "images/me.jpg",
  "contacts" : {
    "mobile" : "000",
    "email" : "meetunathwani@gmail.com",
    "github" : "meetg",
    "twitter" : "meett",
    "location" : "Nashik"
  },
  "skills" : [ "Patience", "Stable mind" , "Strong Logic"]
};

var education = {
  "schools" : [
    {
    "name" : "SPIT",
    "location" : "Mumbai",
    "degree" : "BE",
    "dates" : "4 years",
    "url" : "https://example.com",
    "majors" : ["Electronics"],
    }
  ],
  "onlineCourses" : [
      {
        "title" : "UDA",
        "school" : "Uda",
        "dates" : "4 months",
        "url" : "https://udacity.com",
      }
    ]
};

var work = {
  "jobs" : [
    {
    "employer" : "Infosys" ,
    "title" : "Systems Engineer",
    "location" : "Mysore",
    "dates" : "18th December",
    "description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent at consequat ipsum. Ut placerat nibh id mi elementum consectetur eu sed ligula. Donec eu interdum sem. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum sagittis diam ante, eu semper leo aliquam in. Sed dignissim tincidunt dolor, non condimentum nisi tincidunt ut. In auctor nulla nec felis facilisis, id lacinia enim consequat. Fusce vehicula venenatis sem eu scelerisque. Curabitur lorem enim, porta nec lectus non, molestie blandit lorem."
    },
    {
    "employer" : "Freelance" ,
    "title" : "Content Writer",
    "location" : "Mumbai",
    "dates" : "1st January",
    "description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent at consequat ipsum. Ut placerat nibh id mi elementum consectetur eu sed ligula. Donec eu interdum sem. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum sagittis diam ante, eu semper leo aliquam in. Sed dignissim tincidunt dolor, non condimentum nisi tincidunt ut. In auctor nulla nec felis facilisis, id lacinia enim consequat. Fusce vehicula venenatis sem eu scelerisque. Curabitur lorem enim, porta nec lectus non, molestie blandit lorem."
    }
  ]
};

var projects = {
    "projects" : [
    {
    "title" : "SLRS",
    "dates" : "1 year",
    "description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent at consequat ipsum. Ut placerat nibh id mi elementum consectetur eu sed ligula. Donec eu interdum sem. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum sagittis diam ante, eu semper leo aliquam in. Sed dignissim tincidunt dolor, non condimentum nisi tincidunt ut. In auctor nulla nec felis facilisis, id lacinia enim consequat. Fusce vehicula venenatis sem eu scelerisque. Curabitur lorem enim, porta nec lectus non, molestie blandit lorem.",
    "images" : ["images/pro1.jpg","images/pro2.jpg"]
    }
  ]
};

bio.display = function(){
  var formattedHeader = HTMLheaderName.replace("%data%", bio.name);
  $("#header").append(formattedHeader);
  var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
  $("#header").append(formattedRole);

  var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
  var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
  var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
  var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
  var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);

  $("#topContacts,#footerContacts").append(formattedMobile);
  $("#topContacts,#footerContacts").append(formattedEmail);
  $("#topContacts,#footerContacts").append(formattedGithub);
  $("#topContacts,#footerContacts").append(formattedTwitter);
  $("#topContacts,#footerContacts").append(formattedLocation);

  var formattedMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
  $("#header").append(formattedMsg);

  var formattedPic = HTMLbioPic.replace("%data%", bio.biopic);
  $("#header").append(formattedPic);

  if(bio.skills.length > 0) {
    $("#header").append(HTMLskillsStart);

    for (var i=0; i<bio.skills.length; i++) {
      var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
      $("#skills-h3").append(formattedSkill);
      }
    }
};

bio.display();

work.display = function(){
  var jobArray = work.jobs;
  $("#workExperience").append(HTMLworkStart);
  jobArray.forEach (function(attribute) {

  var formattedEmployer = HTMLworkEmployer.replace("%data%", attribute.employer);
  var formattedTitle = HTMLworkTitle.replace("%data%", attribute.title);
  var formattedEmployerTitle = formattedEmployer + formattedTitle;
  var formattedDates = HTMLworkDates.replace("%data%", attribute.dates);
  var formattedLocation = HTMLworkLocation.replace("%data%", attribute.location);
  var formattedDiscription = HTMLworkDescription.replace("%data%", attribute.description);

  $(".work-entry:last").append(formattedEmployerTitle);
  $(".work-entry:last").append(formattedDates);
  $(".work-entry:last").append(formattedLocation);
  $(".work-entry:last").append(formattedDiscription);
});
};
work.display();

projects.display = function() {
  var projectArray = projects.projects;
  $("#projects").append(HTMLprojectStart);
  projectArray.forEach (function(example) {

    var formattedTitle = HTMLprojectTitle.replace("%data%", example.title);
    $(".project-entry:last").append(formattedTitle);
    var formattedDates = HTMLprojectDates.replace("%data%", example.dates);
    $(".project-entry:last").append(formattedDates);
    var formattedDescription = HTMLprojectDescription.replace("%data%", example.description);
    $(".project-entry:last").append(formattedDescription);

    if (example.images.length>0) {
      for(var i=0; i < example.images.length; i++) {
        var formattedImage = HTMLprojectImage.replace("%data%", example.images[i]);
        $(".project-entry:last").append(formattedImage);
      }
    }
  });
};
projects.display();

education.display = function(){
  var schoolsArray = education.schools;
  $("#education").append(HTMLschoolStart);
  schoolsArray.forEach (function(school) {
  var formattedName = HTMLschoolName.replace("%data%", school.name);
  var formattedDegree = HTMLschoolDegree.replace("%data%", school.degree);
  var formattedNameDegree = formattedName + formattedDegree;
  var formattedDates = HTMLschoolDates.replace("%data%", school.dates);
  var formattedLocation = HTMLschoolLocation.replace("%data%", school.location);
  $(".education-entry:last").append(formattedNameDegree);
  $(".education-entry:last").append(formattedDates);
  $(".education-entry:last").append(formattedLocation);

  if(school.majors.length > 0) {
    for (var i=0; i < school.majors.length; i++) {
      var formattedMajor = HTMLschoolMajor.replace("%data%", school.majors[i]);
      $(".education-entry").append(formattedMajor);
    }
  }
});

  var courseArray = education.onlineCourses;
  $(".education-entry:last").append(HTMLonlineClasses);

  courseArray.forEach (function(course) {

  var formattedTitle = HTMLonlineTitle.replace("%data%", course.title);
  var formattedSchool = HTMLonlineSchool.replace("%data%", course.school);
  var formattedTitleSchool = formattedTitle + formattedSchool;
  var formattedDates = HTMLonlineDates.replace("%data%", course.dates);
  var formattedUrl = HTMLonlineURL.replace("%data%", course.url);

  $(".education-entry:last").append(formattedTitleSchool);
  $(".education-entry:last").append(formattedDates);
  $(".education-entry:last").append(formattedUrl);
});
};

education.display();

$("#mapDiv").append(googleMap);
