
import axios from "axios";
const GET_ALL_STUDENTS = "GET_ALL_STUDENTS"

const ADD_STUDENT = "ADD_STUDENT"

const EMPTY_STUDENT_LIST = "EMPTY_STUDENT_LIST" 

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


export default function reduce(state = [], action){
    switch(action.type){
        case GET_ALL_STUDENTS:
             return action.students//dont need to indicate
             break;
        case ADD_STUDENT:
            return Object.assign({}, state, [...students, action.student])
            break;
        default:
            console.log("Hit the default statement")
            return state;
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
export function makeStudent(studentInformation){
    return function thunk(dispatch){
        return axios.post("/api/student/", studentInformation)
        .then(res => res.data)
        .then(madeStudent => {
            var student = addStudent(madeStudent);
            dispatch(student);
        })
    }
}


