import React from 'react';
import './App.scss';
import UserComponent from './components/Body/UserComponent';
import HeaderComponent from './components/Header/HeaderComponent';
import UserListComponent from './components/Body/UserListComponent';
import { Container, Row } from 'react-bootstrap';

function App() {
  return (
    <div className='app-container'>
      <HeaderComponent />
    </div>
  );
}

export default App;
