import React from "react";
import { Switch, Route } from "react-router-dom";
import Video from "./Video";
import NavBox from "./NavBox";
import MainBox from "./MainBox";
import LoginPage from "./LoginPage";
import NightsInfroPage from "./NightsInfoPage-goback";
import Registation from "./RegistrationField";
import "./horoom.scss";

const Horoom = () => {
  return (
    <>
      <Video />
      <div className="page-wrapper">
        <NavBox />
        <MainBox />
        <div id="horoom-logo"></div>
        <div id="copy-right">© 2020 BASSIANI</div>
        <Switch>
          <Route path="/horoom/login">
            <LoginPage />
          </Route>
          <Route path="/horoom/registation">
            <Registation />
          </Route>
          <Route path="/horoom/nights-info">
            <NightsInfroPage />
          </Route>
        </Switch>
      </div>
    </>
  );
};

export default Horoom;
