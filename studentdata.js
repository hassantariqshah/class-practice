var studentdata =[]

function addStudentdata(student){
    if(student.rollno . studentdata.findindex((x)=>{return x.rollno == student.rollno}) !==1) {
        console.log('already added in the database')
    }
    studentdata.push(student)
}