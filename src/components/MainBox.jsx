import React from "react";
import { Link } from "react-router-dom";

const MainBox = () => {
  return (
    <section id="main-box">
      <div id="bassiani-logo">
        <Link to="/basiani" href=""></Link>
      </div>
      <div id="auth-nights">
        <Link to="/horoom/login" href="" className="action-btn" id="login">
          login
        </Link>
        <Link
          to="/horoom/nights-info"
          href=""
          className="action-btn"
          id="nights"
        >
          nights
        </Link>
      </div>
      <div id="night-info">
        <a href="/">28 november, 2020</a>
        <a href="/">Horoom Nights X Herrensauna</a>
        <a href="/">
          cadency b2b spfdj
          <br />
          mcmlxxxv
        </a>
      </div>
    </section>
  );
};

export default MainBox;
