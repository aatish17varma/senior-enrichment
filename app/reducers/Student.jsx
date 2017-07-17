
import axios from "axios";
const GET_ALL_STUDENTS = "GET_ALL_STUDENTS"

const ADD_STUDENT = "ADD_STUDENT"

const EMPTY_STUDENT_LIST = "EMPTY_STUDENT_LIST" 

const DELETE_A_STUDENT = "DELETE_A_STUDENT"

const UPDATE_STUDENT = "UPDATE_STUDENT"

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

export function updateStudent(student){
    return {
        type: UPDATE_STUDENT, 
        student
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
            return students.filter((eachStudent) => {if(eachStudent.id !== action.student.id){return true;}})
            break;
        case UPDATE_STUDENT:
            return students.map((eachStudent) => {
                if(eachStudent.id === action.student.id){        
                    return action.student;
                }
                else{
                    return eachStudent;
                }
            })
        default:
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
    return function thunk(dispatch){
        return axios.post("/api/student/", studentInformation)
        .then(res => res.data)
        .then(madeStudent => {
            var student = addStudent(madeStudent);
            return dispatch(student);
        })
    }
}

export function eraseStudent(student){
    return function thunk(dispatch){
        return axios.delete(`/api/student/${student.id}`)
        .then(res => res.data)
        .then(() => {
            var notDeleted = deleteAStudent(student);
            return dispatch(notDeleted);
        })
    }
}

export function changeStudent(student){
        return function(dispatch){
            return axios.put(`/api/student/${student.id}`, student)
            .then(res => res.data)
            .then((updatedStudent) => {
                var action = updateStudent(updatedStudent);
                return dispatch(action);
            })
        } 
}


