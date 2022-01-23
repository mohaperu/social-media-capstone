import { Link, Route, Switch } from 'react-router-dom';
import { useState } from 'react';
import { Post } from "./Post";
import { Profile } from "./Profile";
import { AddAccount } from "./AddAccount";
import { Home } from "./Home";



export function SideNavBar() {

  const [active, setActive] = useState(true);

  const handleToggle = () => {
    setActive(!active);
  };

  return (
    <>
      <div className={`sidebar ${active ? "" : "active"}`}>
        <div className="logo_content">
          <div className="logo">
            <i className='bx bxl-audible'></i>
            <div className="logo_name">Social Media</div>
          </div>
          <i className='bx bx-menu' id="btn" onClick={handleToggle}></i>
        </div>

        <ul className="nav_list">
          <li>
            <i className='bx bx-search' onClick={handleToggle}></i>
            <input type="text" placeholder="Search..." />
            <span className="tooltip">Search</span>
          </li>

          <li>
            <Link to="/">
              <i class='bx bx-home'></i>
              <span className="links_name">Home</span>
            </Link>
            <span className="tooltip">Home</span>
          </li>

          <li>
            <Link to="/add_account">
              <i className='bx bxs-user-account'></i>
              <span className="links_name">Add Account</span>
            </Link>
            <span className="tooltip">Add account</span>
          </li>
          <li>
            <Link to="/post">
              <i className='bx bx-repost bx-xs'></i>
              <span className="links_name">Post</span>
            </Link>
            <span className="tooltip">Post</span>
          </li>
          {/* <li>
            <Link to="/profile">
              <i className='bx bxs-dashboard'></i>
              <span className="links_name">Profile Details</span>
            </Link>
            <span className="tooltip">Profile</span>
          </li> */}
        </ul>
      </div>
      {/* <div className="home_content">
              <div className="text">
                <p>Hi, Welcome to Social Media Mangement</p>
              </div>
            </div> */}


      <Switch>


        <Route exact path="/">
          <Home />
        </Route>

        <Route path="/add_account">
          <AddAccount />
        </Route>

        <Route path="/post">
          <Post />
        </Route>


        {/* <Route path="/profile">
          <Profile />
        </Route> */}
      </Switch>
    </>
  );
}

