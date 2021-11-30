import { useState } from 'react';
import { Typography, Modal, Box } from '@mui/material';
import { FbLogin } from './facebookLogin.js';
import axios from 'axios';
import { GoogleLog } from './googleLogin';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { a11yProps, TabPanel } from './TabPanel';

export function MainModal() {

  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 450,
    height: 350,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

  const [open, setOpen] = useState(true);
  const handleClose = () => setOpen(!open);



  //register
  const [user, setUser] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    city: "",
    state: "",
    pincode: "",
    country: ""
  });

  const handleChangereg = e => {

    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value
    });
  };

  const register = () => {
    const { first_name, last_name, email, password, city, state, pincode, country } = user;

    if (first_name && last_name && email && password && city && state && pincode && country) {
      axios.post("http://localhost:5000/register", user)
        .then(res =>
          //  alert(res.alert.message)
          console.log(res)
        );
    }
    else {
      alert("Invalid Input");
    }

  };

  //signin
  const [profile, setProfile] = useState({
    email: "",
    password: "",
  });

  const handleChangesignin = e => {

    const { name, value } = e.target;
    setProfile({
      ...profile,
      [name]: value
    });
  };


  const login = () => {
    axios.post("http://localhost:5000/login", user)
      .then(res =>
        //  alert(res.data.message )
        console.log(res)
      );
  };


  return (
    <>
      <div>!
        <Modal
          open={open}
          // onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>


            <Box sx={{ Width: '100%' }}>
              <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                  <Tab label="Sign In" {...a11yProps(0)} />
                  <Tab label="Sign Up" {...a11yProps(1)} />
                </Tabs>
              </Box>

              <TabPanel value={value} index={0}>

                <Typography>
                  {console.log("usersss", profile)}

                  {console.log("usersss", user)}
                  <label htmlFor="signInMail">E-Mail</label>
                  <label htmlFor="signInPass" id="signInPassF">Password</label><br />
                  <input onChange={handleChangesignin} name="email" value={profile.value} type="text" id="signInMail" placeholder="Email Address" />
                  <input onChange={handleChangesignin} name="password" value={profile.password} type="password" id="signInPass" placeholder="Password" />
                  <input onClick={login} type="submit" id="login" value="Login" />

                  <hr />
                </Typography>

                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                  <div style={{ display: "flex" }}>
                    <div className="google" style={{ marginRight: "1rem" }}>
                      <GoogleLog />
                    </div>
                    <div className="fb">
                      <FbLogin />
                    </div>
                    <div className="guest">
                      <button className="guestuser" onClick={handleClose}>Guest User</button>
                    </div>
                  </div>
                  <button id="close" onClick={() => window.location.href = "home"}>Close</button>
                  <p className="warn">**once you signedIn click close**</p>
                </Typography>

              </TabPanel>

              <TabPanel value={value} index={1}>

                {console.log("user", user)}
                <label htmlFor="fname">First Name</label>
                <label htmlFor="lname" id="fnameL">Last Name</label><br />
                <input onChange={handleChangereg} name="first_name" value={user.first_name} type="text" id="fname" placeholder="First Name" />
                <input onChange={handleChangereg} name="last_name" value={user.last_name} type="text" id="lname" placeholder="Last Name" /><br />

                <label htmlFor="email">E-Mail Id</label><br />
                <input onChange={handleChangereg} name="email" value={user.value} type="text" id="emaill" placeholder="Email Address" /><br />

                <label htmlFor="phonee">Password</label><br />
                <input onChange={handleChangereg} name="password" value={user.password} type="text" id="phonee" placeholder="Password" /><br />

                <label htmlFor="city">City</label>
                <label htmlFor="state" id="stateL">State</label><br />
                <input onChange={handleChangereg} name="city" value={user.city} type="text" id="city" placeholder="City" />
                <input onChange={handleChangereg} name="state" value={user.state} type="text" id="state" placeholder="State" /><br />

                <label htmlFor="pincode">Pin Code</label>
                <label htmlFor="country" id="countryL">Country</label><br />
                <input onChange={handleChangereg} name="pincode" value={user.pincode} type="text" id="pincode" placeholder="Pin Code" />
                <input onChange={handleChangereg} name="country" value={user.country} type="text" id="country" placeholder="Country" /><br />

                <button id="signup" onClick={register}>Register</button>

              </TabPanel>

            </Box>


          </Box>
        </Modal>
      </div>
    </>
  );
}
