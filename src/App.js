
import React from 'react'
import NavBar from './Component/NavBar/navBar';
import './App.css'
import Banner from './Component/Banner/Banner';
import Rowpost from './Component/Rowpost/Rowpost';
import {orginals,action} from './url'
function App() {
  return (
    <div className="App">
      <NavBar/>
     <Banner/>
     <Rowpost url={orginals} title='Netflix Orginals'/>
     <Rowpost url={action} title='Action ' isSmall/>
    </div>
  );
}

export default App;
