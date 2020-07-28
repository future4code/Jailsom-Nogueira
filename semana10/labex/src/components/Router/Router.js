import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import ApplicationFormPage from '../ApplicationFormPage/ApplicationFormPage';
import CreateTripPage from '../CreateTripPage/CreateTripPage';
import AllTripsPage from '../AllTripsPage/AllTripsPage';
import TripDetailsPage from '../TripDetailsPage/TripDetailsPage';
import Header from '../Header/Header';
import AdminBar from '../AdminBar/AdminBar';
import LoginPage from '../LoginPage/LoginPage';

export default function Router () {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/'>
          <Header />
          <ApplicationFormPage />
        </Route>
        <Route exact path='/login'>
          <Header />
          <LoginPage />
        </Route>
        <Route exact path='/admin/create-trip'>
          <Header />
          <AdminBar />
          <CreateTripPage />
        </Route>
        <Route exact path='/admin/all-trips'>
          <Header />
          <AdminBar />
          <AllTripsPage />
        </Route>
        <Route exact path='/admin/trip-details/:tripId'>
          <Header />
          <AdminBar />
          <TripDetailsPage/>
        </Route>
        <Route path='/'>
          <h3>Eita Giovana, o forninho caiu (404)</h3>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};