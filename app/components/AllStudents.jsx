import {connect} from "react-redux";
import React from "react";
import {eraseStudent} from "../reducers/Student"

function AllStudents(props){
    console.log(props);
    return(
        <div>
            <h3>All Students:
                 
                 </h3>
            {props.listOfStudents.map(function(element){
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
                                </div>

                                <div className = "col">
                             <button type="button" onClick = {() => props.deleteStudent(element)}  className="btn btn-danger">Delete</button>
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
        listOfStudents: state.students
    }
}
const mapDispatchToProps = function(dispatch){
    return{
        deleteStudent(student){
            var thunk = eraseStudent(student);
            dispatch(thunk);

       }
    }
}

export default connect (mapStateToProps, mapDispatchToProps)(AllStudents);



