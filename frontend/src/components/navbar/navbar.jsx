import React from "react";
import { Link } from 'react-router-dom';
import SessionBar from "./sessionBar"

export default class NavBar extends React.Component {

  render(){
    return(
      <div className="main-nav">
        <div className="main-nav-left-section 
          resize center-children left-children">
          <Link to="/browse">Browse</Link>
        </div>
        <div className="main-nav-middle-section resize center-children">
          <input className="search-field" placeholder="Search"/>
        </div>
        <div 
          className="main-nav-right-section 
          resize center-children right-children">
          <SessionBar/>
        </div>
      </div>
    )
  }
}