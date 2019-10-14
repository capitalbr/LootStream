import React from "react";
import ReactDOM from 'react-dom';
import Root from "./components/root";
// import configureStore from "./store/store";
// import { logout } from './actions/session_actions';
import "./assets/stylesheets/output.css"
// import jwt_decode from 'jwt-decode';
// import { setAuthToken } from './util/session_api_util';
// import axios from 'axios';

document.addEventListener( "DOMContentLoaded", () => {
  let root = document.getElementById("root");
  ReactDOM.render(<Root/>, root);
})