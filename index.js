// let num = 1
// num = 2
// console.log(num)

// const myFunction = () => {
//     console.log("From MyFunction")
// }

// myFunction()


// object

// const studentObject = {
//     NAME: "Vaibhav",
//     CGPA: 0,
//     ADDRESS: {
//         city: "Ranchi",
//         state: "Jharkhand",
//         region: "Diptih"
//     },
//     "Favourite Hobby": "Painting"
// }

// console.log(studentObject["Favourite Hobby"])

// const { NAME } = studentObject;

// console.log(NAME);


// const parser = require('simple-excel-to-json')
// const doc = parser.parseXls2Json('./Example.xlsx')[0]; 
// const json2xls = require("json2xls")
// const fs = require("fs");


//console.log(doc)

// const totalCgpa = doc.reduce((prevValue, currentValue) => {
//     prevValue += currentValue.CGPA
//     return prevValue
// }, 0)

// const averageCGPA = totalCgpa / doc.length;

// console.log(totalCgpa)
// console.log(averageCGPA)

// A+ = 9.5, A=9 and above, B=8.5 and above, C=8

// const gradedDocument = doc.map((student) => {
//     if(student.CGPA >= 9.5) {
//         student.GRADE = "A+"
//     }
//     else if (student.CGPA < 9.5 && student.CGPA >= 9) {
//         student.GRADE = "A"
//     }

//     else if (student.CGPA < 9 && student.CGPA>= 8.5) {
//         student.GRADE = "B"
//     }
//     else if (student.CGPA < 8.5 && student.CGPA >= 8) {
//         student.GRADE = "C"
//     }
//     else if (student.CGPA < 8) {
//         student.GRADE = "D"
//     }    
//     return student;
// })

// const filterDocument = gradedDocument.filter(student => student.CGPA > 8)

// gradedDocument.push({CGPA: averageCGPA, NAME: "Average Grades"})
// const excelDocument = json2xls(gradedDocument);
// fs.writeFileSync("Grades.xlsx", excelDocument, "binary")

// console.log(filterDocument);


const express = require("express")
const server = express();

server.get('/', (req, res) => {
    res.send('Hello World!')
  })

server.listen(3000, ()=>console.log("Server started on port 300"));