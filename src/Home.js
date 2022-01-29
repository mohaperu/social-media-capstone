import { useState } from 'react';
import { MediaCard } from './MediaCard';
import { Moodal } from "./Moodal";
// import { MainModal } from './MainModal';
// import {Button} from 'react-bootstrap'
import { Link } from 'react-router-dom';


export function Home() {


  const [text, setText] = useState('');

  const handleChange = (newValue) => {
    setText(newValue);
    console.log(setText(newValue));
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.reload();
  }

  const user = localStorage.getItem('token');
  console.log(user);

  return (
    <div className="home_content">
      <div className="text">
        
        <p>Hi {(text === "") ? "User" : text}, Welcome to Social Media Mangement
        {user ?
          <button id='LoginButton' onClick={handleLogout} >Logout</button> :
          <Link to="/login"><button id='LoginButton'>Login</button></Link>
        }
        </p>

        <MediaCard />
        {user ? null : <Moodal value={text} onChange={handleChange} />}
        {/* <MainModal /> */}



      </div>
    </div>
  );
}
