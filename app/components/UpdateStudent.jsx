
import React,{Component} from "react";
import {connect} from "react-redux";
import { Link } from "react-router-dom";
import {changeStudent} from "../reducers/Student";

export class UpdateStudent extends Component{
    
constructor(props){
    super();

    this.state = {
        nameInputValue: "",
        emailInputValue: "",
        imageInputValue: "",
        campusIdInputValue: 0
    }
    this.nameHandleChange = this.nameHandleChange.bind(this);
    this.emailHandleChange = this.emailHandleChange.bind(this);
    this.imageHandleChange = this.imageHandleChange.bind(this);
    this.campusIdHandleChange = this.campusIdHandleChange.bind(this);


    this.handleSubmit = this.handleSubmit.bind(this);
    this.findRightStudent = this.findRightStudent.bind(this);
}

componentDidMount() {
    const user = this.findRightStudent();
    this.setState({
        nameInputValue: user && user.name,
        emailInputValue: user && user.email,
        imageInputValue: user && user.image,
        campusIdInputValue: user && user.campusId
    })
}

findRightStudent(){

   var foundStudent = this.props.allStudents.filter((student) => {
        return +this.props.match.params.id === +student.id;
   })
   console.log(foundStudent);
    return foundStudent[0];
}

nameHandleChange(event){
    this.setState({nameInputValue: event.target.value});
}

emailHandleChange(event){
    this.setState({emailInputValue: event.target.value});
}

imageHandleChange(event){
    this.setState({imageInputValue: event.target.value});
}
campusIdHandleChange(event){
    this.setState({campusIdInputValue: event.target.value});
}



handleSubmit(event){
    console.log(this.props);
    event.preventDefault();
    console.log("IM IN HANDLE SUBMIT +++++++++++++++++");
    console.log(this.state.nameInputValue)
    console.log(this.state.emailInputValue)
    console.log(this.state.imageInputValue);
    console.log(this.state.campusIdInputValue);

    this.props.updateStudent(this.state.nameInputValue, this.state.emailInputValue, this.state.imageInputValue, this.props.match.params.id, this.state.campusIdInputValue);

}
render(){
    console.log("reached");
    return(
        <div>
              <form className="form-horizontal" onSubmit = {this.handleSubmit}>
             <fieldset>
                <legend>Update Student</legend>

                <label > Student Name: </label>
                 <input className="form-control" value = {this.state.nameInputValue} defaultValue="whatever" type = "text" onChange = {this.nameHandleChange} />

                  <label > Student Email: </label>
                 <input className="form-control" value = {this.state.emailInputValue} type = "text" onChange = {this.emailHandleChange} />
                
                <label > Student Image: (Optional) </label>
                 <input className="form-control" value = {this.state.imageInputValue} type = "text" onChange = {this.imageHandleChange} />

                  <label >Campus ID: </label>
                 <input className="form-control" value = {this.state.campusIdInputValue} type = "text" onChange = {this.campusIdHandleChange} />

                     <button type = "submit" className = "btn btn-success">Submit</button>
                
              </fieldset>
              </form>

        </div>
    )
}
}

const mapStateToProps = function(state){
    return {
        allStudents: state.students
    }
}
const mapDispatchToProps = function(dispatch, props){
    return {
        updateStudent: (name, email, image,  id, campusId) => {
            console.log("reached the updatedStudent thunk in my component");
            var thunk = changeStudent({name: name, email: email, image: image, id: id, campusId: campusId}, props.history);
            dispatch(thunk);
        }
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(UpdateStudent);
