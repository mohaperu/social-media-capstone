import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';

const RegisterPage = () => {

    let history = useHistory();

    const [data, setData] = useState({
        username: "",
        email: "",
        password: ""
    });

    const handleChange = ({ currentTarget: input }) => {
        setData({ ...data, [input.name]: input.value })
    }

    const [error, setError] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const url = "https://social-media-management-tool-b.herokuapp.com/api/users";
            const { data: res } = await axios.post(url, data);
            console.log(res.message);
            alert("User Created Successfully");
            history.push("/login");
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
      <p className="loginTitle">Register</p>
      <form onSubmit={handleSubmit} >
      <label for="username" id="usernamel">Username</label><br />
      <input type="text" onChange={handleChange} value={data.username} name="username" id="username" placeholder="Username" required /><br />
      <label for="email" id="emaill">Email</label><br />
      <input type="email" onChange={handleChange} value={data.email} name="email" id="email" placeholder="Email" required /><br />
      <label for="password" id="passwordl">Password</label><br />
      <input type="password" onChange={handleChange} value={data.password} name="password" id="password" placeholder="Password" required /><br />
      {error&&<div>{error}</div>}
      <input type="submit" id="submit" />
      </form>
  </div>
</div>;;
};

export default RegisterPage;
