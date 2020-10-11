import React, { useRef } from "react";
import { useHistory } from "react-router-dom";
import { useOutsideClick } from "../hooks/useOutsideClick";

const Registation = () => {
  const optionsRef = useRef(null);
  const history = useHistory();

  useOutsideClick(optionsRef, () => {
    history.push("/horoom");
  });

  return (
    <>
      <div id="login-popup" className="popup-box small" ref={optionsRef}>
        <div className="input-field reg-field">
          <label htmlFor="set-name">username</label>
          <input type="text" id="set-name" placeholder="XXXXXXXXXXXXXXXXX" />

          <label htmlFor="set-email">email</label>
          <input type="email" id="set-email" placeholder="XXXXXXXXXXXXXXXXX" />

          <label htmlFor="set-pas1">password</label>
          <input
            type="password"
            id="set-pas1"
            placeholder="XXXXXXXXXXXXXXXXX"
          />

          <label htmlFor="set-pas2">confirm password</label>
          <input
            type="password"
            id="set-pas2"
            placeholder="XXXXXXXXXXXXXXXXX"
          />

          <label htmlFor="set-city">city</label>
          <input type="text" id="set-city" placeholder="XXXXXXXXXXXXXXXXX" />

          <label htmlFor="set-address">real address</label>
          <input type="text" id="set-address" placeholder="XXXXXXXXXXXXXXXXX" />

          <label htmlFor="set-id">id number</label>
          <input type="number" id="set-id" placeholder="XXXXXXXXXXXXXXXXX" />

          <label htmlFor="set-date">date of birth</label>
          <input type="date" id="set-date" />

          <label htmlFor="set-fullname">full name</label>
          <input
            type="text"
            id="set-fullname"
            placeholder="XXXXXXXXXXXXXXXXX"
          />

          <label htmlFor="set-phone">phone</label>
          <input type="number" id="set-phone" placeholder="XXXXXXXXXXXXXXXXX" />

          <label htmlFor="set-link">facebook</label>
          <input type="url" id="set-link" placeholder="XXXXXXXXXXXXXXXXX" />
        </div>
        <div className="btn-field">
          <p className="submit">submit</p>
        </div>
      </div>
    </>
  );
};

export default Registation;
