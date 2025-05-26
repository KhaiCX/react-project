import React, { useState } from 'react';
import './App.scss';
import HeaderComponent from './components/header/HeaderComponent';
import UserListComponent from './components/bodys/UserListComponent';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <div className='app-container'>
      <HeaderComponent />
      <Container>
        <UserListComponent />
      </Container>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      //transition={Bounce}
      />
    </div>
  );
}

export default App;
