const class07Students = [];
function addStudentToClass(studentName) {
    const numberOfStudents = getNumberOfStudents()
    /**check class has stil place for one student and student name is not Queen */
    if (numberOfStudents >= 6 && studentName.toLowerCase() !== 'queen')
        console.log('"Can not add more students to class 07"');
    else if (studentName === '') {
        console.log('Please Enter valid student name.');
    }
    else {
        /*check student name is allready added or not*/
        let isAllreadyAdded = false;
        for (let i = 0; i < numberOfStudents; i++) {

            if (class07Students[i].toLowerCase() === studentName.toLowerCase() && studentName.toLowerCase() !== 'queen') {
                /**if student name found break the loop */
                isAllreadyAdded = true; break;
            }
        }
        if (isAllreadyAdded) {
            console.log('Student ' + studentName + ' is already in the class');
        }
        else {/**(name of student is not already added) and (No of students are not more then 6) or( name is queen.) So, add new student   */
            class07Students.push(studentName)

        }
    }

}

function getNumberOfStudents() {
    return class07Students.length;

}
addStudentToClass('student1');
addStudentToClass('');
addStudentToClass('student2');
addStudentToClass('student2');
addStudentToClass('student3');
addStudentToClass('student4');
addStudentToClass('student5');
addStudentToClass('student6');
addStudentToClass('student7');
addStudentToClass('queen');
addStudentToClass('queen');
addStudentToClass('queen');
addStudentToClass('queen');

console.log(getNumberOfStudents())
console.log(class07Students)