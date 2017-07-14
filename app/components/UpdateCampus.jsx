
import React,{Component} from "react";
import {connect} from "react-redux";
import { Link } from "react-router-dom";
import {changeCampus} from "../reducers/Campus";

export class UpdateCampus extends Component{
    
constructor(props){
    super();
    this.state = {
        nameInputValue: "",
        imageInputValue: ""
    }
    this.nameHandleChange = this.nameHandleChange.bind(this);
    this.imageHandleChange = this.imageHandleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.findRightCampus = this.findRightCampus.bind(this);

}

componentDidMount() {
    const user = this.findRightCampus();
    this.setState({
        nameInputValue: user && user.name,
        imageInputValue: user && user.image
    })
}

findRightCampus(){

   var foundCampus = this.props.allCampuses.filter((campus) => {
        return +this.props.match.params.id === +campus.id;
   })
   console.log(foundCampus);
    return foundCampus[0];
}

nameHandleChange(event){
    this.setState({nameInputValue: event.target.value});
}

imageHandleChange(event){
    this.setState({imageInputValue: event.target.value});
}

handleSubmit(event){
    console.log(this.props);
    event.preventDefault();
    console.log("IM IN HANDLE SUBMIT +++++++++++++++++");
    console.log(this.state.nameInputValue)
    console.log(this.state.imageInputValue);
    this.props.updateCampus(this.state.nameInputValue, this.state.imageInputValue, this.props.match.params.id);

}
render(){
    console.log("reached");
    return(
        <div>
              <form className="form-horizontal" onSubmit = {this.handleSubmit}>
             <fieldset>
                <legend>Update Campus</legend>
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

const mapStateToProps = function(state){
    return {
        allCampuses: state.campuses
    }
}

const mapDispatchToProps = function(dispatch){
    return {
        updateCampus: (name, image, id) => {
            console.log("reached the updateCampus thunk in my component");
            var thunk = changeCampus({name: name, image: image, id: id});
            dispatch(thunk);
        }
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(UpdateCampus);
