import axios from "axios";

const GET_ALL_CAMPUSES = "GET_ALL_CAMPUSES"

const ADD_CAMPUS = "ADD_CAMPUS"

const GET_STUDENTS_FOR_CAMPUS = "GET_STUDENTS_FOR_CAMPUS"

const DELETE_CAMPUS = "DELETE_CAMPUS"

const FIND_CAMPUS = "FIND_CAMPUS"

const UPDATE_CAMPUS = "UPDATE_CAMPUS"


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

export function deleteCampus(campusId){
    return {
        type: DELETE_CAMPUS,
        campusId
    }
}

export function updateCampus(campus){
    return {
        type: UPDATE_CAMPUS,
        campus
    }

}


export default function reduce(campuses = [], action){
    switch(action.type){
        case GET_ALL_CAMPUSES:
             return action.campuses   //dont need to indicate
             break;
         case ADD_CAMPUS:
             return [action.campus, ...campuses];   //dont need to indicate
             break;
        case DELETE_CAMPUS:
             return campuses.filter((eachCampus) => {if(eachCampus.id !== Number(action.campusId)){return true;}})
        case UPDATE_CAMPUS:
             return campuses.map(eachCampus => {if(+eachCampus.id === +action.campus.id){
                 return action.campus;
             }
             else{
                return eachCampus;
             }
            })
        default:
            console.log("Hit the default statement")
            return campuses;
        
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

export function createCampus(campusInfo, history){
    console.log("reached the createCampus thunk")
    return function(dispatch){
        return axios.post("/api/campus", campusInfo)
        .then(res => res.data)
        .then(campus => {
            var campusInAction = addCampus(campus[0]);
            history.push('/');
            return dispatch(campusInAction);
           
        })
    }
}

export function eraseCampus(campusId){
    console.log('reached the eraseCampus thunk')
    return function(dispatch){
        return axios.delete(`/api/campus/${campusId}`)
        .then(res => res.data)
        .then(() => {
            var campusToDelete = deleteCampus(campusId);
            return dispatch(campusToDelete);
        })
    }
}

export function changeCampus(campus, history){
        console.log('reached the updateCampus thunk')
        return function(dispatch){
            return axios.put(`/api/campus/${campus.id}`, campus)
            .then(res => res.data)
            .then((updatedCampus) => {
                var action = updateCampus(updatedCampus);
                history.push(`/campuses/${campus.id}`);
                return dispatch(action);
            })
        }
}