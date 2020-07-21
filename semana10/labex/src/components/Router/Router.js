import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";

import ApplicationFormPage from '../ApplicationFormPage/ApplicationFormPage';
import CreateTripPage from '../CreateTripPage/CreateTripPage';
import TripDetailsPage from '../TripDetailsPage/TripDetailsPage';
import Header from '../Header/Header';
import AdminBar from '../AdminBar/AdminBar';
import LoginPage from '../LoginPage/LoginPage';

export default function Router () {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Header />
          <ApplicationFormPage />
        </Route>
        <Route exact path="/LoginPage">
          <Header />
          <LoginPage />
        </Route>
        <Route exact path="/CreateTripPage">
          <Header />
          <AdminBar />
          <CreateTripPage />
        </Route>
        <Route exact path="/TripDetailsPage">
          <Header />
          <AdminBar />
          <TripDetailsPage />
        </Route>
        <Route path="/">
          <h3>Eita Giovana, o forninho caiu (404)</h3>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};