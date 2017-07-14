
import axios from "axios";
const GET_ALL_STUDENTS = "GET_ALL_STUDENTS"

const ADD_STUDENT = "ADD_STUDENT"

const EMPTY_STUDENT_LIST = "EMPTY_STUDENT_LIST" 

const DELETE_A_STUDENT = "DELETE_A_STUDENT"

export function getAllStudents(students){
    return {
        type: GET_ALL_STUDENTS,
        students
    }
}

export function addStudent(student){
    return {
        type: ADD_STUDENT, 
        student
    }
}
export function deleteAStudent(student){
    return{
        type: DELETE_A_STUDENT,
        student //this is going to be every other student who hasn't been deleted
    }
}


export default function reduce(students = [], action){
    switch(action.type){
        case GET_ALL_STUDENTS:
             return action.students//dont need to indicate
             break;
        case ADD_STUDENT:
            return  [action.student, ...students]
            break;
        case DELETE_A_STUDENT:
            console.log('reached DELETE case in reducer', action)
            return students.filter((eachStudent) => {if(eachStudent.id !== action.student.id){return true;}})
            break;
        default:
            console.log("Hit the default statement")
            return students;
    }

}

export function getStudents(){
    return function thunk(dispatch){
        return axios.get("/api/student/")
        .then(res => res.data)
        .then(allStudents => {
            var studentList = getAllStudents(allStudents);
            return dispatch(studentList);
        })
    }
}
export function makeStudent(studentInformation, history){
    console.log("reached makeStudent thunk statement");
    return function thunk(dispatch){
        return axios.post("/api/student/", studentInformation)
        .then(res => res.data)
        .then(madeStudent => {
            var student = addStudent(madeStudent);
            return dispatch(student);
            history.push('/');
        })
    }
}

export function eraseStudent(student){
    console.log("reached a deleted student");
    return function thunk(dispatch){
        return axios.delete(`/api/student/${student.id}`)
        .then(res => res.data)
        .then(() => {
            var notDeleted = deleteAStudent(student);
            return dispatch(notDeleted);
        })
    }
}


