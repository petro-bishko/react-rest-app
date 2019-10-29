import React from 'react';
import { NavLink } from 'react-router-dom';
import './Nav.css'

export interface navInterface {
  title: string,
  link: string;
}

const Nav: React.FC = () => {
  const navList: navInterface[] = [
    {
      title: 'Home',
      link: '/'
    }
  ];
  return (
    <div className="container-fluid bg-light">
      <div className="row">
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light  w-100">
            <a className="navbar-brand" href="/">Logo</a>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">
                {navList.map((val, index) => {
                  return (<li className="nav-item active" key={index}><NavLink className="nav-link" to={val.link}>{val.title}</NavLink></li>)
                })}
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </div>
  )
};

export default Nav;
