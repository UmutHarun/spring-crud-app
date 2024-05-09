import React from 'react';
import '../styles/navbar.css';

const Header = () => {
  return (
    <header className="header dark-bg">
      <a href="index.html" className="logo">Crud <span className="lite">Panel</span></a>

      <div className="top-nav notification-row">
        <ul className="nav pull-right top-menu">
          <li className="dropdown">
            <a data-toggle="dropdown" className="dropdown-toggle" href="#">
              <i className="icon-bell-l"></i>
              <span className="badge bg-important">7</span>
            </a>
            {/* <ul className="dropdown-menu extended notification">
              <div className="notify-arrow notify-arrow-blue"></div>
              <li>
                <p className="blue">You have 4 new notifications</p>
              </li>
              <li>
                <a href="#">
                  <span className="label label-primary"><i className="icon_profile"></i></span>
                  Friend Request
                  <span className="small italic pull-right">5 mins</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span className="label label-warning"><i className="icon_pin"></i></span>
                  John location.
                  <span className="small italic pull-right">50 mins</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span className="label label-danger"><i className="icon_book_alt"></i></span>
                  Project 3 Completed.
                  <span className="small italic pull-right">1 hr</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span className="label label-success"><i className="icon_like"></i></span>
                  Mick appreciated your work.
                  <span className="small italic pull-right"> Today</span>
                </a>
              </li>
              <li>
                <a href="#">See all notifications</a>
              </li>
            </ul> */}
          </li>
          <li className="dropdown">
            <a data-toggle="dropdown" className="dropdown-toggle" href="#">
              <span className="profile-ava">
                <img alt="" src="img/avatar1_small.jpg" />
              </span>
              <span className="username">Jenifer Smith</span>
              <b className="caret"></b>
            </a>
            <ul className="dropdown-menu extended logout">
              <div className="log-arrow-up"></div>
              <li className="eborder-top">
                <a href="#"><i className="icon_profile"></i> My Profile</a>
              </li>
              <li>
                <a href="#"><i className="icon_mail_alt"></i> My Inbox</a>
              </li>
              <li>
                <a href="#"><i className="icon_clock_alt"></i> Timeline</a>
              </li>
              <li>
                <a href="#"><i className="icon_chat_alt"></i> Chats</a>
              </li>
              <li>
                <a href="login.html"><i className="icon_key_alt"></i> Log Out</a>
              </li>
              <li>
                <a href="documentation.html"><i className="icon_key_alt"></i> Documentation</a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;