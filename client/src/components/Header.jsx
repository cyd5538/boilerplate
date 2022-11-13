import React from "react";
import {Link} from 'react-router-dom';
import { AiOutlineLogin } from 'react-icons/ai'
import { SlPeople } from "react-icons/sl";

const Header = () => {
  return (
    <div className="navbar bg-fuchsia-50">
      <div className="flex-1">
        <Link to="/" className="btn btn-ghost normal-case text-xl">FootBall</Link>
      </div>

      {/* user 없을시 */}
      <ul className="flex-none gap-2">
        <li className="btn btn-ghost">
           <Link to="/login" className="flex gap-2">
            <span><AiOutlineLogin /> </span>
            <span>Login</span>
           </Link>
        </li>
        <li className="btn btn-ghost flex gap-2">
          <Link to="/register" className="flex gap-2">
           <span><SlPeople /> </span>
           <span>Register</span>
           </Link>
        </li>
      </ul>

      {/* user 있을시  */}
      <div className="flex-none gap-2 ">
        <div className="form-control">
        </div>
        <div className="dropdown dropdown-end ">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img src="https://placeimg.com/80/80/people" />
            </div>
          </label>
          <ul
            tabIndex={0}
            className="mt-3 p-2 shadow menu menu-compact bg-fuchsia-50 dropdown-content rounded-box w-52"
          >
            <li>
              <a className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div>
      </div>

    </div>
  );
};

export default Header;
