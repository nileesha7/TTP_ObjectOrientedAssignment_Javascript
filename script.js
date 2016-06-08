//Answer for question 1
var cat={
	name:"Bobo",
	breed:"Tabby",
	age:3,
	legs:4
}
for(var i in cat){
	console.log(cat[i]);
}

//Answer for question 2

var multiplier={

	currentValue: 1, //initially number will be multiplied with 1

	getCurrentVal: function(){
		return currentValue;
	},

	multiply:function(number){
		var ans=number*multiplier.currentValue;
		return multiplier.currentValue=ans;
	}
}

console.log(multiplier.multiply(3));
console.log(multiplier.multiply(3));
console.log(multiplier.multiply(4));

//Answer to question 3

function Photo(filename, location){
	this.filename=filename;
	this.location=location;
};

var photo1 = new Photo("sun.jpg","Nileesha/Pictures");
var photo2 = new Photo("moon.jpg","Nileesha/Pictures");


//photos is an array of type Photo
function Album(){
	this.album = [];
	this.addPhoto = function(photo){
		this.album.push(photo);
	}
	this.listAllPhotos = function(){
		for(var i in this.album){
			console.log(this.album[i]);
		}
	}
	this.accessPhotoByID = function(id){
		if(id<0 || id>=this.album.length){
			console.log("No matching picture for id");
			return;
		}
		console.log(this.album[id]);
		//return this.album[id]; return value is Object object?
	}
};

var myAlbum = new Album();
myAlbum.addPhoto(photo1);
myAlbum.addPhoto(photo2);

myAlbum.listAllPhotos();

myAlbum.accessPhotoByID(0);
myAlbum.accessPhotoByID(1);
myAlbum.accessPhotoByID(10);

//Answer to question 4

/**
Create a prototypical Person object. From this object, extend a 
Teacher object and a Student object. Each of these objects should 
have attributes and methods pertinent to what they describe. Also
 create a School object that should be able to store instances of 
 students and teachers. Make sure to write code afterwards that creates 
 instances of these objects to make sure that what you've written works 
 well and you're able to store the necessary data in each object.
**/

//person
//teacher
//student
//school
function Person(name, age, sex){
	this.name = name;
	this.age = age;
	this.sex = sex;
};
function Teacher(subject){
	this.subject=subject;
	Person.apply(this, arguments);
};
function Student(gpa){
	this.gpa=gpa;
	Person.apply(this, arguments);
}
function School(){
	this.teachers=[];
	this.students=[];
	this.addStudents=function(student){
		this.students.push(student);
	}
	this.addTeachers=function(teacher){
		this.students.push(teacher);
	}
	this.listStudents = function(){
		for(i in this.students){
			console.log(students[i]);
		}
	}
	this.listTeachers = function(){
		for(i in this.teachers){
			console.log(teachers[i]);
		}
	}
}

var p1 = new Person("Ann", 21, "female");
var p2 = new Person("Bobby", 23, "male");
var p3 = new Person("Mary", 19, "female");
var p4 = new Person("David", 21, "male");





























