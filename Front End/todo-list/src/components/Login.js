import React, {useState} from "react";
import axios from 'axios';

import './login.css'


function Login({onLogin}) {

    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');

    const API_url='http://localhost:4000/users/authenticate'

    const handleLogin = async () => {
        try {
          const response = await axios.post(API_url, {
            username: username,
            password: password,
          });
    
          // Assuming your API returns a token
          const token = response.data.token;
    
          // Save the token to local storage or state
          // Example: localStorage.setItem('token', token);
          localStorage.setItem('token', token)
    
          // Trigger the onLogin callback or any other action after successful login
          onLogin();
        } catch (error) {
          // Handle login failure
          console.error('Login failed:', error);
        }
      };


    return(
        <div className="login">
            <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
            <input type="text" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />

            <button onClick={handleLogin}>Login</button>
        </div>
    );

} 

export default Login;