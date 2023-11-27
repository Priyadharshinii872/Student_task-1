const prompt = require('prompt-sync')();

let studentsdata = {
    students: [
        { rollno: "1", name: "tom", grade: "5", section: "A" },
        { rollno: "2", name: "jerry", grade: "5", section: "B" }
    ]
};

while (true) 
{
    const addoption = "\n1.Add Student"
    const getoption = "2.Get Studentdata"
    const editoption = "3.Edit Studentdata"
    const deloption = "4.Delete Studentdata"
    const displayoption = "5.Display Studentsdata"
    const exitoption = "6.Exit\n"
    console.log('\x1b[32m%s\x1b[0m' , addoption);
    console.log('\x1b[36m%s\x1b[0m' , getoption);
    console.log('\x1b[34m%s\x1b[0m' , editoption);
    console.log('\x1b[31m%s\x1b[0m' , deloption);
    console.log('\x1b[35m%s\x1b[0m' , displayoption);
    console.log('\x1b[33m%s\x1b[0m' , exitoption);

    const option = prompt("Enter the Option:  ");

    switch (option) 
    {
        case "1": {
            // ***** Adding Student ********
            const add = "\n***Adding Student***";
            console.log('\x1b[32m%s\x1b[0m', add);
        
            let urollno;
            let isRollNoValid = false;
        
            do 
            {
                urollno = prompt("Enter the rollno: ");
        
                if ((isNaN(urollno))||(urollno==="")) 
                {
                    console.log('\x1b[33m%s\x1b[0m', "*****The rollno should be in number********");
                } 
                else 
                {
                    const isRollNoExist = studentsdata.students.some(student => student.rollno === urollno);
        
                    if (isRollNoExist) 
                    {
                        const ck = "Roll No already exists";
                        console.log('\x1b[31m%s\x1b[0m', ck);
                    } 
                    else 
                    {
                        isRollNoValid = true;
                    }
                }
            } while (!isRollNoValid);
        
            function addStudent(stu) 
            {
                studentsdata.students.push(stu);
            }
        
            const uname = prompt("Enter the name: ");
            const ugrade = prompt("Enter the grade: ");
            const usection = prompt("Enter the section: ");
        
            if (typeof uname === 'string' && typeof ugrade === 'string' && typeof usection === 'string')
            {
                addStudent({ rollno: urollno, name: uname, grade: ugrade, section: usection });
                console.log('After adding:');
                displayStudents();
            } 
            else 
            {
                const vt = "'*****The Other data should be in string format********'";
                console.log('\x1b[33m%s\x1b[0m', vt);
            }
            break;
        }
        

        case "2": 
        {
            // ***** Getting Student Data ********
            const gg = "\n***Getting Student Data by rollno***"
            console.log('\x1b[36m%s\x1b[0m' , gg);

            const getrollno = prompt("Enter the rollno to get student's details: ");

            if (!isNaN(getrollno)) 
            {

                function getStudentData(rollno) 
                {
                    return studentsdata.students.find(student => student.rollno === rollno);
                }

                const student = getStudentData(getrollno);
                if (student) 
                {
                    sdt = "Student Details"
                    console.log('\x1b[36m%s\x1b[0m' , sdt);
                    console.log("Roll No\t Name\t Grade\t Section");
                    
                    console.log(`${student.rollno}\t ${student.name}\t ${student.grade}\t ${student.section}`);
                    
                } 
                else 
                {
                    const nt = "Student rollno Not Found"
                    console.log('\x1b[33m%s\x1b[0m' , nt)

                    let urollno;
                    do 
                    {
                        urollno = prompt("Enter the rollno to get students's detailsx2: ");
                        if (isNaN(urollno)) 
                        {
                            console.log('\x1b[33m%s\x1b[0m', "'*****The rollno should be in number********'");
                        }
                        function getStudentData(rollno) 
                        {
                            return studentsdata.students.find(student => student.rollno === rollno);
                        }
        
                        const student = getStudentData(urollno);
                        if (student) 
                        {
                            sdt = "Student Details"
                            console.log('\x1b[36m%s\x1b[0m' , sdt);
                            console.log("Roll No\t Name\t Grade\t Section");
                            
                            console.log(`${student.rollno}\t ${student.name}\t ${student.grade}\t ${student.section}`);
                            
                        } 
            
                    } while (isNaN(urollno));
                    
                }
            } 
            else 
            {
                const vt = "'*****Enter a valid rollno********'"
                console.log('\x1b[33m%s\x1b[0m' , vt)

                let urollno;
                    do 
                    {
                        urollno = prompt("Enter the rollno to get students's detailsx2: ");
                        if (isNaN(urollno)) 
                        {
                            console.log('\x1b[33m%s\x1b[0m', "'*****The rollno should be in number********'");
                        }
                        function getStudentData(rollno) 
                        {
                            return studentsdata.students.find(student => student.rollno === rollno);
                        }
        
                        const student = getStudentData(urollno);
                        if (student) 
                        {
                            sdt = "Student Details"
                            console.log('\x1b[36m%s\x1b[0m' , sdt);
                            console.log("Roll No\t Name\t Grade\t Section");
                            
                            console.log(`${student.rollno}\t ${student.name}\t ${student.grade}\t ${student.section}`);
                            
                        } 
            
                    } while (isNaN(urollno));
                    
            }
            break;
        }

        case "3": {
            // ********** Edit Student *********
            const ed = "\n***Editing the Student data using rollno***";
            console.log('\x1b[34m%s\x1b[0m', ed);
        
            let rollnotoedit;
            do 
            {
                rollnotoedit = prompt("Enter the rollno for editing: ");
                if (isNaN(rollnotoedit)) 
                {
                    console.log('\x1b[33m%s\x1b[0m', '*****Enter a valid rollno********');
                }

            } while (isNaN(rollnotoedit));
        
            function editstudentdata(rollno) 
            {
                const matchroll = studentsdata.students.find(student => student.rollno === rollno);
                if (matchroll) 
                {
                    let changeingrade = prompt("Enter the grade to be updated: ");
                    let changeinsection = prompt("Enter the section to be updated: ");
        
                    if (changeingrade !== '') 
                    {
                        matchroll.grade = changeingrade;
                    }
                    if (changeinsection !== '') 
                    {
                        matchroll.section = changeinsection;
                    }
        
                    console.log('After editing:');
                    displayStudents();
                } 
                else 
                {
                    const nt = "Student rollno Not Found";
                    console.log('\x1b[33m%s\x1b[0m', nt);
        
                    let urollno;
                    do {
                        urollno = prompt("Enter the correct rollno to edit student's details: ");
                        if (isNaN(urollno)) 
                        {
                            console.log('\x1b[33m%s\x1b[0m', "'*****The rollno should be in number********'");
                        } 
                        else 
                        {
                            let changeingradee = prompt("Enter the grade to be updated: ");
                            let changeinsectionn = prompt("Enter the section to be updated: ");
        
                            if (changeingradee !== '') {
                                matchroll.grade = changeingradee;
                            }
                            if (changeinsectionn !== '') {
                                matchroll.section = changeinsectionn;
                            }
        
                            console.log('After editing:');
                            displayStudents();
                        }
                    } while (isNaN(urollno));
                }
            }
        
            editstudentdata(rollnotoedit);
            break;
        }

        case "4": 
        {
            // ****** Delete Student ********
            const d = "\n***Deleting Student***";
            console.log('\x1b[31m%s\x1b[0m', d);
        
            let rollnotodel;
            let checkrolltodel;
        
            do {
                rollnotodel = prompt("Enter the rollno to delete that student data: ");
        
                if (isNaN(rollnotodel)) 
                {
                    const vt = "'*****Enter a valid rollno********'";
                    console.log('\x1b[33m%s\x1b[0m', vt);
                } 
                else 
                {
                    function chechingstudent(rollno) 
                    {
                        return studentsdata.students.find(student => student.rollno === rollno);
                    }
        
                    checkrolltodel = chechingstudent(rollnotodel);
        
                    if (!checkrolltodel) 
                    {
                        const nt = "Student rollno Not Found";
                        console.log('\x1b[33m%s\x1b[0m', nt);
                    }
                }
            } while (isNaN(rollnotodel) || !checkrolltodel);
        
            if (checkrolltodel) 
            {
                function deleteStudent(rollno) 
                {
                    studentsdata.students = studentsdata.students.filter(student => student.rollno !== rollno);
                }
                deleteStudent(rollnotodel);
                const dd = "Data deleted Successfully";
                console.log('\x1b[31m%s\x1b[0m', dd);
                console.log('After deleting:');
                displayStudents();
            }
        
            break;
        }
        case "5": 
        {
            const l = "\n***List of students***";
            console.log('\x1b[35m%s\x1b[0m' , l);
            displayStudents();
            break;
        }

        case "6": 
        {
            const exiting = "Exiting Program......"
            console.log('\x1b[33m%s\x1b[0m' , exiting);
            process.exit();
        }

        default: 
        {
            console.log("*********Enter a valid option*********");
        }
    }
}

function displayStudents() 
{
    const tab = "Roll No\t Name\t Grade\t Section"
    console.log('\x1b[33m%s\x1b[0m' , tab);
        for (var j in studentsdata.students)
        {
            console.log(`${studentsdata.students[j].rollno}\t ${studentsdata.students[j].name}\t ${studentsdata.students[j].grade}\t ${studentsdata.students[j].section}`);
        }

        
}
