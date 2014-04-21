//The Student Class

var Student = function(name){
	this.name = name;
	this.grades = [];
	
//Prompt's the student for the score, this pushes to grades

	this.takeTest = function(){
		var score = prompt('What did you receive on the test?');
		this.grades.push(score);
	};

//Returns the average of all the student's grades

this.currentGrade = function() {
	var total = 0;
	for (var i=0; i<this.grades.length; i++) {
		total += this.grades[i];
	}
	return total/this.grades.length;
	};
};

var Classroom = function(teacher, subject) {
	this.students = [];
	this.name = name;
	this.subject = subject;
	this.teacher = teacher;
};

var Teacher = function(fullName, subjects) {
	this.name = fullName;
	this.subjects = [];
}

var tom = new Student('Tom');
var sarah = new Student('Sarah');

//tom.takeTest();
//prompts user to enter their score, prompt score is pushed to grades array
//entered 86 to the prompt

//tom.grades
//logs 86

tom.grades.push(95);
tom.grades.push(85);
tom.grades.push(100);

sarah.grades.push(100);
sarah.grades.push(101);
sarah.grades.push(100);

tom.currentGrade();
//logs 93.333
sarah.currentGrade();
//logs 98.333


var raine = new Teacher('Raine', ['JavaScript', 'C++', 'Racket']); 
var chris = new Teacher('Raine', ['JavaScript', 'C#', 'Action Script']);
var sean = new Teacher('Sean', []);

var teachers = [raine, chris, sean];

var webDev = new Classroom(raine, 'Web Development', 'JavaScript');
var uav = new Classroom(null, 'NodeCopter', 'JavaScript');
	//find all teachers that can teach the uav class
teachers.filter(function(teacher) {
	return (teacher.subjects.indexOf(uav.subject) !== -1);
	// console.log(teacher.subjects.indexOf(uav.subject) !== -1);
	//returns false x3

});

//this could be abstracted into a generic function that finds teachers that can teach ANY class.

var findTeachers = function(teachers, classroom) {

	return teachers.filter(function(teacher) {
		return teacher.subjects.indexOf(classroom.subject) !== -1;
	});
}