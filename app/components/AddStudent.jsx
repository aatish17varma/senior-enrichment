
import {connect} from "react-redux";
import React from "react";

function AddStudent(props){
    return(
        <div>
              <form className="form-horizontal">
             <fieldset>
                <legend>New Student</legend>
                <label > Student Name: </label>
                 <input className="form-control" />
                  <label > Student Email: </label>
                 <input className="form-control" />

              </fieldset>
              </form>
        </div>
    )
}

const mapStateToProps = function(state){

}

export default connect(mapStateToProps)(AddStudent);