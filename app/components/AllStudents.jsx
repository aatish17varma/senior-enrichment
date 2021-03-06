import {connect} from "react-redux";
import React from "react";
import {eraseStudent} from "../reducers/Student"
import {getCampuses} from "../reducers/Campus"
import {Link} from "react-router-dom";

function AllStudents(props){
   
    return(
        <div>
        

            <h3>All Students:
                 
                 </h3>
            {props.listOfStudents.map(element => {
                return(
                <div className = "container" key = {element.id}>  

                        <div className = "media-left">
                            <img src = {element.image} class = "media-object" style = {{width: '60px'}}/>     
                        </div>
                        <div className = "media-body">

                        <div className = "container">
                            
                            <div className = "row">

                                <div className = "col">
                            <h4 className="media-heading">{element.name}</h4>
                                <p>{element.email}</p>

                                <p>Campus Name: {
                                    props.listOfCampuses.filter(  (campus) => {return +element.campusId === +campus.id}).length === 0 ? null : props.listOfCampuses.find(  (campus) => {return +element.campusId === +campus.id}).name
                                    
                                    }</p>
                                
                            </div>

                                <div className = "col">
                             <button type="button" onClick = {() => props.deleteStudent(element)}  className="btn btn-danger">Delete</button>

                        <Link to = {`/students/${element.id}/update-student`}>
                            <button type="button"  className="btn btn-danger">Update</button>
                        </Link>

                                </div>
                            
                            </div>

                        </div>
                        
                      </div>  
                    </div>)
            })}
        </div>
    )
} 

const mapStateToProps = function(state){
    return{
        listOfStudents: state.students,
        listOfCampuses: state.campuses
    }
}
const mapDispatchToProps = function(dispatch){
    return{
        deleteStudent(student){
            var thunk = eraseStudent(student);
            dispatch(thunk);
       },
       loadCampuses(){
           var thunk = getCampuses();
           dispatch(thunk);
       }
    }
}

export default connect (mapStateToProps, mapDispatchToProps)(AllStudents);



