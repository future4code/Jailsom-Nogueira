import React from 'react';
import ApplicationFormPage from './components/ApplicationFormPage/ApplicationFormPage';
import CreateTripPage from './components/CreateTripPage/CreateTripPage';
import ListTripsPage from './components/ListTripsPage/ListTripsPage';
import Header from './components/Header/Header';
import AdminBar from './components/AdminBar/AdminBar';
import LoginPage from './components/LoginPage/LoginPage';

export default function App() {
  return (
    <>
      <Header />
      <AdminBar />
      {/* <ApplicationFormPage /> */}
      {/* <CreateTripPage /> */}
      {/* <ListTripsPage /> */}
      <LoginPage />
    </>
  );
}

