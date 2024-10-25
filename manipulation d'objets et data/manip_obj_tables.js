// création d'un objet 'student'
let student = { name: 'Marie', age: 20, courses: [] };
console.log("Objet student:");
console.log(student, "\n\n");

//changement des propriétés de l'objet
student.age=21;
student.grade = 'A';
console.log("Objet student après changement:");
console.log(student, "\n\n");

//mise à jour du tableau des cours
student.courses.push('Math', 'Physics', 'Chemisty');
let indexPhysics = student.courses.indexOf('Physics');
let courses2First = student.courses.slice(0, indexPhysics);
let first2Courses = student.courses.slice(indexPhysics);

//affichage final
console.log("Affichage student après la dernière modifications:");
console.log(student, "\n\n");
console.log("Affichage d'indexPhysics:");
console.log(indexPhysics, "\n\n");
console.log("Affichage de courses2First et first2Courses:");
console.log( courses2First);
console.log(first2Courses);