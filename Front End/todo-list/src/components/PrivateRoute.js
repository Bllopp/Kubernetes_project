import React, { Component } from "react";
import {Route, Navigate} from 'react-router-dom';
import AuthService from '../services/AuthService';


const PrivateRoute = ({ element: Element, ...rest }) => (
    <Route
      {...rest}
      element={AuthService.getToken() ? <Element /> : <Navigate to="/login" />}
    />
  );

export default {PrivateRoute};
