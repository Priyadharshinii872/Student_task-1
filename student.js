const readline = require('readline');

class Student {
  constructor(name, section, rollNo) {
    this.name = name;
    this.section = section;
    this.rollNo = rollNo;
  }

  static students = [];

  static addStudent(name, section, rollNo) {
    const newStudent = new Student(name, section, rollNo);
    this.students.push(newStudent);
    return newStudent;
  }

  static getStudentByRollNo(rollNo) {
    return this.students.find(student => student.rollNo === rollNo);
  }

  static updateStudent(rollNo, newName, newSection) {
    const studentToUpdate = this.getStudentByRollNo(rollNo);
    if (studentToUpdate) {
      studentToUpdate.name = newName || studentToUpdate.name;
      studentToUpdate.section = newSection || studentToUpdate.section;
      return studentToUpdate;
    }
    return null;
  }

  static deleteStudent(rollNo) {
    const index = this.students.findIndex(student => student.rollNo === rollNo);
    if (index !== -1) {
      this.students.splice(index, 1);
      return true;
    }
    return false;
  }
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function startApp() {
  rl.question('Enter your command (add/get/update/delete/exit): ', command => {
    switch (command.trim().toLowerCase()) {
      case 'add':
        rl.question('Enter student name: ', name => {
          rl.question('Enter section: ', section => {
            rl.question('Enter roll number: ', rollNo => {
              Student.addStudent(name, section, rollNo);
              console.log('Student added successfully.');
              startApp();
            });
          });
        });
        break;
      case 'get':
        rl.question('Enter roll number: ', rollNo => {
          const foundStudent = Student.getStudentByRollNo(rollNo);
          if (foundStudent) {
            console.log('Found Student:', foundStudent);
          } else {
            console.log('Student not found.');
          }
          startApp();
        });
        break;
      case 'update':
        rl.question('Enter roll number: ', rollNo => {
          rl.question('Enter new name (press enter to skip): ', newName => {
            rl.question('Enter new section (press enter to skip): ', newSection => {
              const updatedStudent = Student.updateStudent(rollNo, newName, newSection);
              if (updatedStudent) {
                console.log('Student updated successfully.');
              } else {
                console.log('Student not found.');
              }
              startApp();
            });
          });
        });
        break;
      case 'delete':
        rl.question('Enter roll number: ', rollNo => {
          const isDeleted = Student.deleteStudent(rollNo);
          if (isDeleted) {
            console.log('Student deleted successfully.');
          } else {
            console.log('Student not found.');
          }
          startApp();
        });
        break;
      case 'exit':
        rl.close();
        break;
      default:
        console.log('Invalid command.');
        startApp();
        break;
    }
  });
}

startApp();