import React, { Component } from "react";
import {Route, Navigate} from 'react-router-dom';
import AuthService from '../services/AuthService';
import Login from './Login'


class AppWrapper extends Component{
  render(){

  if(!AuthService.getToken)
    return <Navigate to="/login" />

   return(
     <div>
       App wrapper
       <Route path='/Login' component={Login} />
     </div>
   );
  }
}

export default {AppWrapper};
