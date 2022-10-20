//sort based on CGPA
// 50 seats for each subject 
// Assign electives to each student
//Create an excel sheet of those electives

const parser = require('simple-excel-to-json')
const doc = parser.parseXls2Json('./Assignment.xlsx')[0]; 
const json2xls = require("json2xls")
const fs = require("fs")

const newdoc= [...doc];

doc.sort((a, b) => {
    return a.CGPA - b.CGPA;
});

//console.log(doc)

const sub1counter=0;
const sub1="User Interface/User Experience (UI/UX) Design";
const sub2="Fundamentals of Web Technologies";
const sub2counter = 0;
const sub3= "Internet, Technology and Society";
const sub3counter=0;
const ="Enterprise Resource Planning";
const =0;

const options = newdoc.map((student) => {
    
    return student
})

fs.writeFileSync('assigned.xlsx', xlsData, 'binary');
