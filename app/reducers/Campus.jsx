import axios from "axios";

const GET_ALL_CAMPUSES = "GET_ALL_CAMPUSES"

const ADD_CAMPUS = "ADD_NEW_CAMPUS"

const GET_STUDENTS_FOR_CAMPUS = "GET_STUDENTS_FOR_CAMPUS"

export function getAllCampuses(campuses){
    return {
        type: GET_ALL_CAMPUSES,
        campuses
    }
}

export function addCampus(campus){
    return {
        type: ADD_CAMPUS,
        campus
    }
}

export function getStudentsForCampus(studentList){
    return {
        type: GET_STUDENTS_FOR_CAMPUS,
        studentList
    }
}


export default function reduce(state = [], action){
    switch(action.type){
        case GET_ALL_CAMPUSES:
             return action.campuses   //dont need to indicate
             break;
         case ADD_CAMPUS:
             return Object.assign({}, state, [...campuses, action.campus]);    //dont need to indicate
             break;
        default:
            console.log("Hit the default statement")
            return state;
        
    }

}

export function getCampuses(){
    return function(dispatch){
        return axios.get('/api/campus')
        .then(res => res.data)
        .then(allCampuses => {
        var campuses = getAllCampuses(allCampuses);
        return dispatch(campuses);
        })
    }
}

// export function getStudents(campusID){
//     return function(thunk){
//         return axios.get("/campus/${campusID}")
//         .then(res => res.data)
//         .then(listOfStudents => {
//             var studentList = getStudentsForCampus(listOfStudents);
//             return dispatch(studentList);
//         })
//     }
// }

