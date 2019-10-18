import React from "react";
import { Link } from 'react-router-dom';
import Logo from "../../assets/images/glitch_logo_small.png";

const ContentBar = () => (
  <div className="center-children left-children">
    <img src={Logo}/>
    <Link to="/browse">Browse</Link>
  </div>
)

export default ContentBar;