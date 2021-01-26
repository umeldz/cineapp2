import { Component } from "react";
import {Link} from 'react-router-dom';
//import '../css/Header.css';
class HeaderComponent extends Component{
    render(){
        return(
            <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
                <a style={{marginRight:15}}className="navbar-brand" href="/">CineApp</a>  
                <ul className="navbar-nav">
                <li className="nav-item">
                    <a className="nav-link" href="/">Link 1</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/">Link 2</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/hello">Link 3</a>
                </li>
                </ul>
          </nav>
        )
    }

}

export default HeaderComponent;