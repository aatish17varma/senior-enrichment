
import React,{Component} from "react";
import {makeStudent} from "../reducers/Student";
import {connect} from "react-redux";
import { Link } from "react-router-dom";


export class AddStudent extends Component{
    
constructor(props){
    super(props);
    this.state = {
        nameInputValue: "",
        emailInputValue: "",
        imageInputValue: ""
    }
    this.nameHandleChange = this.nameHandleChange.bind(this);
        this.emailHandleChange = this.emailHandleChange.bind(this);
             this.imageHandleChange = this.imageHandleChange.bind(this);
                this.handleSubmit = this.handleSubmit.bind(this);

}

nameHandleChange(event){
    this.setState({nameInputValue: event.target.value, formEdtited: true});
}
emailHandleChange(event){
    this.setState({emailInputValue: event.target.value, formEdtited: true});
}
imageHandleChange(event){
    this.setState({imageInputValue: event.target.value, formEdtited: true});
}


handleSubmit(event){
    console.log(this.state.nameInputValue);
    console.log(this.state.emailInputValue);
    console.log(this.state.imageInputValue);
    event.preventDefault();
    this.props.createStudent(this.state.nameInputValue, this.state.emailInputValue, this.props.match.params.id, this.state.imageInputValue)
    .then(() => this.props.history.push('/'));

}


render(){
    console.log("reached");
    return(
        <div>
              <form className="form-horizontal" onSubmit = {this.handleSubmit}>
             <fieldset>
                <legend>New Student</legend>
                <label > Student Name: </label>
                 <input className="form-control" value = {this.state.nameInputValue} type = "text" onChange = {this.nameHandleChange} />
                  <label > Student Email: </label>
                 <input className="form-control" value = {this.state.emailInputValue} type = "text" onChange = {this.emailHandleChange} />
               
                <label > Student Image: (Optional) </label>
                 <input className="form-control" value = {this.state.imageInputValue} type = "text" onChange = {this.imageHandleChange} />
                
                     <button type = "submit" className = "btn btn-success">Submit</button>
                

              </fieldset>
              </form>

        </div>
    )
}
}

const mapDispatchToProps = function(dispatch, ownProps){
    return {
        createStudent(name, email, campus, image){
            console.log("reached");
            var madeStudent = makeStudent({name: name, email: email, campusId: campus, image: image}, ownProps.history);
            dispatch(madeStudent);
        }
        
    }

}

export default connect(null,mapDispatchToProps)(AddStudent);





