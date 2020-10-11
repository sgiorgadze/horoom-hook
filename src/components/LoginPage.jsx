import React, { useRef } from "react";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import { useOutsideClick } from "../hooks/useOutsideClick";

const LoginPage = () => {
  const optionsRef = useRef(null);
  const history = useHistory();

  useOutsideClick(optionsRef, () => {
    history.goBack();
  });

  return (
    <>
      <div id="login-popup" className="popup-box small" ref={optionsRef}>
        <div className="input-field log-field">
          <label htmlFor="name">username</label>
          <input type="text" id="name" placeholder="XXXXXXXXXXXX" />
          <label htmlFor="pas">password</label>
          <input type="password" id="pas" placeholder="XXXXXXXXXXXX" />
        </div>

        <div className="btn-field">
          <p className="submit">submit</p>
          <Link to="/horoom/registation" className="register">
            register
          </Link>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
