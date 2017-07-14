
import React,{Component} from "react";
import {connect} from "react-redux";
import { Link } from "react-router-dom";
import {createCampus} from "../reducers/Campus";

export class AddCampus extends Component{
    
constructor(props){
    super();
    this.state = {
        nameInputValue: "",
        imageInputValue: ""
    }
    this.nameHandleChange = this.nameHandleChange.bind(this);
    this.imageHandleChange = this.imageHandleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

}

nameHandleChange(event){
    this.setState({nameInputValue: event.target.value});
}

imageHandleChange(event){
    this.setState({imageInputValue: event.target.value});
}

handleSubmit(event){
    event.preventDefault();
    console.log("IM IN HANDLE SUBMIT +++++++++++++++++");
    console.log(this.state.nameInputValue)
    console.log(this.state.imageInputValue);
    this.props.makeCampus(this.state.nameInputValue, this.state.imageInputValue);

}
render(){
    console.log("reached");
    return(
        <div>
              <form className="form-horizontal" onSubmit = {this.handleSubmit}>
             <fieldset>
                <legend>New Campus</legend>
                <label > Campus Name: </label>
                 <input className="form-control" value = {this.state.nameInputValue} type = "text" onChange = {this.nameHandleChange} />
                
                <label > Campus Image: (Optional) </label>
                 <input className="form-control" value = {this.state.imageInputValue} type = "text" onChange = {this.imageHandleChange} />
                
                     <button type = "submit" className = "btn btn-success">Submit</button>
                

              </fieldset>
              </form>

        </div>
    )
}
}
const mapDispatchToProps = function(dispatch){
    return {
        makeCampus: (name, image) => {
            console.log("reached");
            var madeCampus = createCampus({name: name, image: image});
            dispatch(madeCampus);
        }
        
    }

}

export default connect(null, mapDispatchToProps)(AddCampus);
