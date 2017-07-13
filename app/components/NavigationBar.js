import React, {Component} from "react"

export default class NavigationBar extends Component{

    render(){
        return(
    <nav className="navbar navbar-inverse">
        <div className="container-fluid">
            <div className="navbar-header">
            <a className="navbar-brand">Campus Portal</a>
            </div>
            <ul className="nav navbar-nav">
            <li className="active"><a href="/">Home</a></li>
            <li><a href="#">Students</a></li>
            </ul>
         </div>
        </nav>
        )
    }

}