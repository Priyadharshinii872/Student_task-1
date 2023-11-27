const prompt = require('prompt-sync')()

let studentsdata = {
    students:[
        {rollno:"1",name:"tom" ,grade:"fifth" , section:"A"},
        {rollno:"2",name:"jerry",grade:"fifth", section:"B"},
        {rollno:"3",name:"dora",grade:"fifth" , section:"C"}
    ]
}

console.log("\n 1.Add Student\n 2.Delete Studentdata\n 3.Get Studentdata\n 4.Edit Studentdata\n 5.Display Studentsdata")
const option = prompt("enter the Option: ")
switch(option)
{
    case "1":
    {
        //*****Adding Student********
            console.log("Adding Student")

            function addStudent(stu)
            {
                //stu.rollno = studentsdata.students.length + 1;
                studentsdata.students.push(stu)
            }
            const urollno = prompt("enter the rollno:")
            const uname = prompt("enter the name: ")
            const ugrade = prompt("enter the grade: ")
            const usection = prompt("enter the section: ")
            addStudent({ rollno:urollno , name:uname,grade:ugrade,section:usection});
            console.log('After adding:', studentsdata);
            break;
    }
    case "2":
        {
            //******Delete Student********
            console.log("Deleting Student")

            const rollnotodel = prompt("enter the rollno to delete that student data: ")

            function deleteStudent(rollno) 
            {
                studentsdata.students = studentsdata.students.filter(student => student.rollno !== rollno);
            }
            deleteStudent(rollnotodel)
            console.log(studentsdata)
            break;
        }
    case "3":
        {
            //*******Get Student*******
            console.log("Getting Student Data by rollno");

            const getrollno = prompt("Enter the rollno to get student's details : ")
            function getStudentData(rollno) 
            {
                return studentsdata.students.find(student => student.rollno === rollno);
            }

            const get =  getStudentData(getrollno)   
            console.log(get)
            break;
        }
    case "4":
        {
            //**********Edit Student*********
            console.log("editing the Student data using rollno")

            const rollnotoedit = prompt("Enter the rollno for editing: ")

            function editstudentdata(rollno)
            {
                const matchroll = studentsdata.students.find(student => student.rollno === rollno)
                if(matchroll)
                {
                    const changeingrade = prompt("Enter the grade to be updated : ")
                    const changeinsection = prompt("Enter the section to be updated : ")
                    // studentsdata.students[2]=changeingrade
                    // studentsdata.students[3]=changeinsection
                    matchroll.grade=changeingrade
                    matchroll.section=changeinsection
                    console.log(studentsdata.students)
                }
                else
                {
                    console.log("Student Id not found!!!")
                }
            }

            editstudentdata(rollnotoedit)
            break;

        }
    case "5":
        {
            console.log("List of students")
            console.log(studentsdata)
            break;
        }



        
}