import React, {useState} from "react";
import axios from 'axios';

import './login.css'


function Login({onLogin}) {

    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');

    let connection_api_url= process.env.CONNECTION_SERVER_IP || 'http://myservice.info/users'
    connection_api_url += '/users/authenticate';
    const API_url = connection_api_url;

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
          localStorage.setItem('userId', response.data.userId)
          console.log(response.data.userId)
    
          // Trigger the onLogin callbkjack or any other action after successful login
          onLogin(response.data.userId);

          console.log("user connected is",response.data.userId);


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