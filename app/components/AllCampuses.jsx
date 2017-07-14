
import React, {Component} from "react";
import {connect} from "react-redux";
import { Link } from "react-router-dom";


function allCampuses(props){
    const {campuses} = props;
    console.log(campuses);

    return( 

        <div>  

            <div className = "row">
                <div className = "col-xs-6">
                    <h3>Campuses</h3>
                </div>
                <div className = "col-xs-2 col-xs-offset-4">
                    <Link to = "/make-campus">
                    <button type="button" className="btn btn-primary"> Add a Campus </button>
                    </Link>

                </div>
            </div>


          <div className = "row">

           {
            campuses.map(eachCampus => {
            return (
            <div className="col-xs-4" key={ eachCampus.id }>
                 <Link className="thumbnail" to={`/campuses/${eachCampus.id}`}>   
                <img src={ eachCampus.image } className = "img-thumbnail" style = {{height: '250px', width: '700px'}}/>
                <div className="caption">
                  <h5>
                    <span>{ eachCampus.name }</span>
                  </h5>
                </div>
                </Link>   
            </div>)
           }) 
           
           }

         </div>  
            
            
            
        </div>
    )

}

const mapStateToProps = function(state){ //goes in to the reducer and gets the state
    return {
        campuses: state.campuses
    }
}



export default connect(mapStateToProps)(allCampuses) //is this good