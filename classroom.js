// 1) Define a Classroom class which contains a list of students. a subject, and a teacher.

// 2) Define a teacher class which contains a name and an array of subjects that they know how to teach.  

var Classroom = function(department){
	this.department = department;
	this.subject = [];
	this.student = [];
	this.teacher = [];
};

var history = new Classroom ('history');

var Teacher = function (name){
	this.name = name;
	this.subject = subject;
};

