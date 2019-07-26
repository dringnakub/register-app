import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import ThaiLocationSelectForm from './components/thaiLocationSelectForm'

function App() {


  return (
    <div>
      {/* <LocationDropDown defaultLabel="จังหวัด" locations={provinces} /> */}
      <ThaiLocationSelectForm />
    </div>
  );
}

export default App;
