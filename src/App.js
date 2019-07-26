import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import LocationDropDown from './components/locationDropDown';

function App() {

  let provinces = [
    { name: 'Bangkok', id: 1 },
    { name: 'Nonthaburi', id: 2 }
  ]


  return (
    <div>
      <LocationDropDown locations={provinces} />
    </div>
  );
}

export default App;
