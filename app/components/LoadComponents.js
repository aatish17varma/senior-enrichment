import React, {Component} from 'react';
import NavigationBar from "./NavigationBar";
import AllCampuses from "./AllCampuses";
import Root from "./Root";
import {getCampuses} from "../reducers/Campus"
import {getStudents} from "../reducers/Student"
import store from "../reducers/index";
import SingleCampus from "./SingleCampus";
import AddStudent from "./AddStudent";

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
                <Switch>
                <Route exact path = "/" component = {AllCampuses} />
                <Route path = "/campuses/:id" component = {SingleCampus} /> 
                <Route path = "/add-student" component = {AddStudent} />
                </Switch>
            </div>
        )
    
    }



}