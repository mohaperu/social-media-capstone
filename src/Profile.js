import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';

export function Profile() {


  const [profileList, setProfileList] = useState(JSON.stringify([]));

  useEffect(async () => {
    var response = await axios.get('https://social-media-capstone.herokuapp.com/profile');
    setProfileList(response.data);
  }, []);

  return (
    <div className="profile">
      <h1>Profile Details<span className="profile-edit">✐Edit</span></h1>

      <form>
        <label htmlFor="fname">First Name</label>
        <label htmlFor="lname" id="fnameL">Last Name</label><br />
        <input type="text" id="fname" value={profileList[0].first_name} placeholder="First Name" />
        <input type="text" id="lname" value={profileList[0].last_name} placeholder="Last Name" /><br />

        <label htmlFor="email">E-Mail Id</label><br />
        <input type="text" id="email" value={profileList[0].email} placeholder="Email Address" /><br />

        <label htmlFor="phone">Phone No</label><br />
        <input type="text" id="phone" value={profileList[0].phone_no} placeholder="Phone No with Country Code" /><br />

        <label htmlFor="dob">Date of Birth</label><br />
        <input type="text" id="dob" value={profileList[0].dob} placeholder="DOB" /><br />

        <label htmlFor="city">City</label>
        <label htmlFor="state" id="stateL">State</label><br />
        <input type="text" id="city" value={profileList[0].city} placeholder="City" />
        <input type="text" id="state" value={profileList[0].state} placeholder="State" /><br />

        <label htmlFor="pincode">Pin Code</label>
        <label htmlFor="country" id="countryL">Country</label><br />
        <input type="text" id="pincode" value={profileList[0].phone_no} placeholder="Pin Code" />
        <input type="text" id="country" placeholder="Country" value={profileList[0].country} /><br />

        <input type="submit" id="submit" value="Save" onClick={(event) => event.preventDefault()} />
      </form>


    </div>
  );
}
