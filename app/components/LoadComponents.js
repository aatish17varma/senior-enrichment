import React, {Component} from 'react';
import NavigationBar from "./NavigationBar";
import AllCampuses from "./AllCampuses";
import Root from "./Root";
import {getCampuses} from "../reducers/Campus"
import {getStudents} from "../reducers/Student"
import store from "../reducers/index";
import SingleCampus from "./SingleCampus";
import AddStudent from "./AddStudent";
import AllStudents from "./AllStudents";
import AddCampus from "./AddCampus";
import UpdateCampus from "./UpdateCampus"
import UpdateStudent from "./UpdateStudent"

import {Route, Switch } from 'react-router-dom';


export default class LoadComponents extends Component{
    componentDidMount(){
        const campusesThunk = getCampuses();
        const studentsThunk = getStudents();
        store.dispatch(campusesThunk);
        store.dispatch(studentsThunk);
    }

    render(){
        return(
            <div>
                <NavigationBar />
                <Route exact path = "/" component = {AllCampuses} />
                <Route exact path = "/campuses/:id" component = {SingleCampus} /> 
                <Route exact path = "/campuses/:id/add-student" component = {AddStudent} />
                <Route exact path = "/students" component = {AllStudents} />
                <Route exact path = "/make-campus" component = {AddCampus} />
                <Route exact path = "/campuses/:id/update" component = {UpdateCampus} />
                <Route exact path = "/students/:id/update-student" component = {UpdateStudent} />
            </div>
        )
    
    }



}