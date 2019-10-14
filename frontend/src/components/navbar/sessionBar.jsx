import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell, faUser } from '@fortawesome/free-solid-svg-icons'


const SessionBar = () => {
  return (
    false ? (
      <>
        <FontAwesomeIcon className="icon" icon={faBell} />
      </>
    ) : (
      <>
        <div className="button-container">
          <button className="log-in" >Log In</button>
          <button className="sign-up" >Sign Up</button>
        </div>
        <FontAwesomeIcon className="icon" icon={faUser} />
      </>
    )
  )
}

export default SessionBar;