var bio = {
			"name" : "Jesper",
		 	"role" : "Ninja",
		 	"contacts" : [
				{
				"mobile": "650-555-5555",
				"email": "doe@john.web",
				"github":"Jepz",
				"blog":"jepz.me",
				"twitter": "jeppsonone",
				"location":"London, UK, Europe"
				}	
		 	],
 		   "welcomeMessage":"Hell! This is a welcome message",
			"skills": ["code", "design", "ux"],
			"bioPic": "http://png.clipart.me/graphics/thumbs/162/man-smoking-marijuana-cigarette-and-wearing-sunglasses_162311768.jpg"
}

var education = {
	"schools": [

		{
			"name":"C3L",
			"location": "Tyresö",
			"degree": "Webdeveloper with RIA",
			"majors": ["Flash"],
			"dates": 2012,
			"url":"http://www.c3l.se"
		},
		{
			"name":"Media",
			"location": "Tyresö",
			"degree": "Media guy",
			"majors": ["Media, web"],
			"dates": 2011,
			"url":"http://www.c3l.se"
		}

	],
	"onlineCourses": [
		{
			"title":"Javascript crash course",
			"school":"Udacity",
			"dates": 2016,
			"url":"http://www.udacity.com"
		}
	]
}
var work = {
	"jobs": [

		{
			"employer": "Avalon Innovation",
			"title": "Front end developer / project manager / UX",
			"dates": "2013",
			"location" : "Stockholm",
			"description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris magna nibh, vehicula cursus nisl at, efficitur consequat erat. Mauris mattis risus quam, eget facilisis tortor tincidunt eu. Sed gravida, felis vitae lobortis commodo, quam dolor auctor lectus, at molestie quam dolor et ante. Mauris quam ipsum, dignissim ac euismod ac, dapibus quis magna. Mauris aliquet velit vitae imperdiet blandit. Fusce tincidunt, velit sit amet pulvinar pretium, erat sapien dignissim nisl, vitae feugiat felis augue vitae quam. Mauris hendrerit massa tincidunt quam posuere, ut varius metus iaculis. Pellentesque placerat, neque nec vehicula tempor, lorem ipsum imperdiet felis, ac consequat magna ex in lacus.",
		}, 
		{
			"employer": "Poolia",
			"title": "Consultant",
			"dates": "2011",
			"location" : "Stockholm",
			"description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris magna nibh, vehicula cursus nisl at, efficitur consequat erat. Mauris mattis risus quam, eget facilisis tortor tincidunt eu. Sed gravida, felis vitae lobortis commodo, quam dolor auctor lectus, at molestie quam dolor et ante. Mauris quam ipsum, dignissim ac euismod ac, dapibus quis magna. Mauris aliquet velit vitae imperdiet blandit. Fusce tincidunt, velit sit amet pulvinar pretium, erat sapien dignissim nisl, vitae feugiat felis augue vitae quam. Mauris hendrerit massa tincidunt quam posuere, ut varius metus iaculis. Pellentesque placerat, neque nec vehicula tempor, lorem ipsum imperdiet felis, ac consequat magna ex in lacus."
		}

	]
}
var projects = {
	"projects": [
		{
			"title": "Sample project 1",
			"dates": 2016,
			"description": "Four loko hella humblebrag street art bicycle rights ennui, echo park green juice poutine austin trust fund paleo hoodie. +1 chartreuse iPhone cronut. Locavore offal VHS, pitchfork williamsburg viral thundercats artisan yuccie blue bottle readymade listicle authentic. Sartorial flexitarian single-origin coffee plaid.",
			"images": "https://image.freepik.com/free-vector/rocket-launch-illustration_23-2147500712.jpg"

		},
		{
			"title": "Sample project 2",
			"dates": 2015,
			"description": "Four loko hella humblebrag street art bicycle rights ennui, echo park green juice poutine austin trust fund paleo hoodie. +1 chartreuse iPhone cronut. Locavore offal VHS, pitchfork williamsburg viral thundercats artisan yuccie blue bottle readymade listicle authentic. Sartorial flexitarian single-origin coffee plaid.",
			"images":"https://image-gr.s3.envato.com/files/64960412/BIG%20IDEA%20ROCKET-590.jpg"

		},
		{
			"title": "Sample project 3",
			"dates": 2014,
			"description": "Four loko hella humblebrag street art bicycle rights ennui, echo park green juice poutine austin trust fund paleo hoodie. +1 chartreuse iPhone cronut. Locavore offal VHS, pitchfork williamsburg viral thundercats artisan yuccie blue bottle readymade listicle authentic. Sartorial flexitarian single-origin coffee plaid.",
			"images": "http://www.youtodesign.com/uploads/allimg/1504/3780.jpg"

		},
		{
			"title": "Sample project 4",
			"dates": 2013,
			"description": "Four loko hella humblebrag street art bicycle rights ennui, echo park green juice poutine austin trust fund paleo hoodie. +1 chartreuse iPhone cronut. Locavore offal VHS, pitchfork williamsburg viral thundercats artisan yuccie blue bottle readymade listicle authentic. Sartorial flexitarian single-origin coffee plaid.",
			"images": "http://www.youtodesign.com/uploads/allimg/1503/3736.jpg"

		}
	]
}

bio.display = function (){
	
  	var b_Name = HTMLheaderName.replace("%data%", bio.name),
	b_Role = HTMLheaderRole.replace("%data%", bio.role),
	b_BioPic = HTMLbioPic.replace("%data%", bio.bioPic),
	b_Msg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
	
	$("#header").prepend(b_Role);
	$("#header").prepend(b_Name);
	$("#header").append(b_BioPic);
	$("#header").append(b_Msg);

	for (contact in bio.contacts){
		var c_Mobile = HTMLmobile.replace("%data%", bio.contacts[contact].mobile),
		c_Email = HTMLemail.replace("%data%", bio.contacts[contact].email),
		c_Twitter = HTMLtwitter.replace("%data%", bio.contacts[contact].twitter),
		c_Github = HTMLgithub.replace("%data%", bio.contacts[contact].github),
		c_Blog = HTMLblog.replace("%data%", bio.contacts[contact].blog),
		c_Location = HTMLlocation.replace("%data%", bio.contacts[contact].location),
		c_Contact = c_Mobile + c_Email + c_Twitter + c_Github + c_Blog + c_Location;
		
		$("#footerContacts").append(c_Contact);
	}
	

	$("#header").append(HTMLskillsStart);
	for (i = 0; i < bio.skills.length; i++) {
		var formatedSkill = HTMLskills.replace("%data%", bio.skills[i]);
		$("#skills").append(formatedSkill);
	}
}

	 
work.display = function () {
	for (job in work.jobs) {
		if (work.jobs.hasOwnProperty(job)) {
		   $("#workExperience").append(HTMLworkStart);
		   var w_Employer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer),
		   w_Title = HTMLworkTitle.replace("%data%", work.jobs[job].title),
		   w_Date = HTMLworkDates.replace("%data%", work.jobs[job].dates),
		   w_Location = HTMLworkLocation.replace("%data%", work.jobs[job].location),
		   w_Description = HTMLworkDescription.replace("%data%", work.jobs[job].description),
		   w_Job = w_Date + w_Location + w_Employer + w_Title + w_Description;
		   
		   $(".work-entry:last").append(w_Job);
	   };
   };
}
   
projects.display = function() {
	for (project in projects.projects) {
		if (projects.projects.hasOwnProperty(project)) {
			$("#projects").append(HTMLprojectStart);
			
			var p_Title = HTMLprojectTitle.replace("%data%", projects.projects[project].title),
			p_Date = HTMLprojectDates.replace("%data%", projects.projects[project].dates),
			p_Image = HTMLprojectImage.replace("%data%", projects.projects[project].images),
			p_Description = HTMLprojectDescription.replace("%data%", projects.projects[project].description),
			p_Project = p_Image + p_Title + p_Date + p_Description;
			
			$(".project-entry:last").append(p_Project);
		};
	};
}

education.display = function() {
	
   for (school in education.schools) {
    //if (education.schools.hasOwnProperty(school)) {
		$("#education").append(HTMLschoolStart);
		var e_Name = HTMLschoolName.replace("%data%", education.schools[school].name),
		e_Date = HTMLschoolDates.replace("%data%", education.schools[school].dates),
		e_Degree = HTMLschoolDegree.replace("%data%", education.schools[school].degree),
		e_Location = HTMLschoolLocation.replace("%data%", education.schools[school].location),
		e_School;

		  for (major in education.schools[school].majors) {
		  	var e_Major = HTMLschoolMajor.replace("%data%", education.schools[school].majors[major]);
		  }

		e_School = e_Date + e_Location + e_Name + e_Degree + e_Major;
      	$(".education-entry:last").append(e_School);

   };
}; 
education.onlineDisplay = function(){

	$("#online").append(HTMLonlineClasses);
	
    for (online in education.onlineCourses) {
  	   if (education.onlineCourses.hasOwnProperty(online)) {
		   $("#online").append(HTMLonlineStart);
  		   var o_Title = HTMLonlineTitle.replace("%data%", education.onlineCourses[online].title),
  		   o_School = HTMLonlineSchool.replace("%data%", education.onlineCourses[online].school),
  		   o_Dates = HTMLonlineDates.replace("%data%", education.onlineCourses[online].dates),
  		   o_URL = HTMLonlineURL.replace("%data%", education.onlineCourses[online].url),
  		   o_Online = o_Title + o_School + o_Dates + o_URL;
		   
  		   $(".online-education-entry:last").append(o_Online);
  	   }
   	
     };
};



bio.display();
work.display();
projects.display();
education.onlineDisplay();
education.display();


$("#mapDiv").append(googleMap);






