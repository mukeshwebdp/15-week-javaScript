
let student ={
    name: 'Mukesh',
    age: 21,
    grade:'A'
}
function check (updateGrade){
    student.grade = updateGrade
    console.log(`Student details`);
    for(let data in student){
        console.log(`${data} : ${student[data]}`);
    }
}
check('B')