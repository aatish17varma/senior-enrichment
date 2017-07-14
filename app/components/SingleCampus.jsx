
import React from "react";
import {connect} from "react-redux";
import {getStudents} from "../reducers/student";
import { Link } from "react-router-dom";
import {eraseStudent} from "../reducers/Student";


export function singleCampus(props){

    const {allStudents} = props;    
    var filteredStudents = allStudents.filter(element => { return element.campusId === Number(props.match.params.id)})
    console.log(filteredStudents);

    return(
     <div className = "row">
            <div className ="col-md-8">
             {
            filteredStudents.map(eachStudent => {
                return (
                      <div className = "container" key = {eachStudent.id}>  
                        <div className = "media-left">
                            <img src = {eachStudent.image} class = "media-object" style = {{width: '60px'}}/>     
                        </div>
                        <div className = "media-body">

                        <div className = "container">
                            
                            <div className = "row">

                                <div className = "col">
                            <h4 className="media-heading">{eachStudent.name}</h4>
                                <p>{eachStudent.email}</p>
                                </div>

                                <div className = "col">
                             <button type="button" onClick = {() => props.deleteStudent(eachStudent)} className="btn btn-danger">Delete</button>
                                </div>
                            
                            </div>

                        </div>
                        
                      </div>  
                    </div>
                    )
            })
            }
            </div>
        <div className="col-md-4">
            <Link to = {`/campuses/${props.match.params.id}/add-student`}>
            <button type="button" className="btn btn-primary btn-lg">Add Student</button> 
            </Link>
            
        </div>  
    </div>
    )
}

function mapStateToProps(state){
    return {
        allStudents: state.students
    }
}

function mapDispatchToProps(dispatch){
    return{
          deleteStudent(singleStudent){
            var toDispatch = eraseStudent(singleStudent);
            dispatch(toDispatch);
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(singleCampus);




