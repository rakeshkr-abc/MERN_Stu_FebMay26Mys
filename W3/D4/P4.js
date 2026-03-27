// Filter method
let marks = [75,49,56,70,82,51,68];
let passed = marks.filter(mark => mark >=70);

// console.log(marks);
// console.log(passed);

// Filter objects
let students = [
    {name: "Geetha", score: 45},
    {name: "Sita", score: 75},
    {name: "Meena", score: 68},
    {name: "Amar", score: 88},
];
let qualifiedStudents = students.filter(s => s.score > 70);
let jeevan = qualifiedStudents.map(s=>s.name);

let qualifiedStudents1 = students.filter(s => s.score > 70)
                            .map(s => s.name); 
// console.log("qualifiedStudents: ",qualifiedStudents);
console.log(qualifiedStudents1);