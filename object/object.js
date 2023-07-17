
/* A JavaScript object has properties and methods. A property is like a variable that belongs to the object, and a method is something the object can "do," or that can be "done" to the object.  */
const students= {
 name:"Saya",
 age: 29,
 work: "Engineer",
 city: "Austin",
 isWorked: true,
 skills: ['JS', 'HTML', 'CSS','Express']
};

students.name = 'Bruno';
const message = `Hi, How are you doing ${students.name}, I'm ${students.age} year old. I've been reviewing ${students.skills.join(', ')} to be a new project by using my skills`;
//console.log(message); 

// loop throug object

/* for(let key in object) { do something } key is variable name so you name it whatever you want, object is object name*/

for(let list in students){
    console.log(`${list}: ${students[list]}`)
    console.log(list);
}

// Object.keys()- method returns an array containing the property names (or keys) of an object. 
// Object.values() - method retuns an array of a given object's property values, in the same order as provided by a for...in loop


// const studentsPropName = Object.keys(students);
// const studentsLength = Object.keys(students).length;


// const studentsValue = Object.values(students);

// console.log(studentsPropName);
// console.log(studentsLength);
// console.log(studentsValue);