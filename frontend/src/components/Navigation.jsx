import React from "react";
import {Link} from 'react-router-dom';
import logo from '../logo.svg';
import {BiNotepad}  from 'react-icons/bi';
import {AiOutlineUser, AiOutlineFileAdd}  from 'react-icons/ai';



export default function Navigation() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark p-3">
      <div className="container d-flex">
        <div className="d-flex justify-content-start">
          <Link className="navbar-brand" to="/">
            <img src={logo} alt="react-logo" style={{width: '4rem'}} /> NotesApp
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
            >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
        <div className="collapse navbar-collapse d-flex justify-content-end" id="navbarNav">
          <ul className="navbar-nav ml-auto align-left">
            <li className="nav-item active ">
              <Link to="/" className="nav-link">
                <BiNotepad />
                Notes
              </Link>
            </li>
            <li className="nav-item">
              
              <Link to="/create" className="nav-link">
              <AiOutlineFileAdd />
                Create Note
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/user" className="nav-link">
              <AiOutlineUser />
                Create User
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
