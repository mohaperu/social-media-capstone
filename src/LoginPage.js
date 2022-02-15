import axios from 'axios';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// import { MainModal } from './MainModal';
import { useHistory } from 'react-router-dom';


const LoginPage = () => {

    let history = useHistory();

    const [data, setData] = useState({
        email: "test@gmail.com",
        password: "Admin123@"
      });
    
      const handleChange = ({ currentTarget: input }) => {
        setData({ ...data, [input.name]: input.value })
      }
    
      const [error, setError] = useState("")
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          const url = "https://social-media-management-tool-b.herokuapp.com/api/auth";
          const { data: res } = await axios.post(url, data);
          localStorage.setItem("token", res.data);
          history.push("/home");
          alert("Login Successfull")
          console.log(res.message);
        } catch (error) {
          if (error.response &&
            error.response.status >= 400 &&
            error.response.status <= 500
          ) {
            setError(error.response.data.message)
          }
        }
      }

    return <div className="LPage">
        <div className="LoginPage">
            <p className="loginTitle">Login</p>
            <form onSubmit={handleSubmit}>
            <label for="email" id="emaill">Email</label><br />
            <input onChange={handleChange} value={data.email} name="email" type="email" id="email" placeholder="Email" required /><br />
            <label for="password" id="passwordl">Password</label><br />
            <input onChange={handleChange} value={data.password} name="password" type="password" id="password" placeholder="Password" required /><br />
            {error&&<div>{error}</div>}
            <input type="submit" id="submit" />
            <Link to="/register" id="register"><p>Register?</p></Link>
            </form>
        </div>
    </div>;
};

export default LoginPage;
