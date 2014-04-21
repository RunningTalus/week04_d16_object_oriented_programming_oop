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
sarah.grades.push(100);
sarah.grades.push(95);

tom.currentGrade();
//logs 93.333
sarah.currentGrade();
//logs 98.333