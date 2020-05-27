import React from "react";
//styles
import Style from './App.module.scss'
import "./App.css";
import Navbar from './views/Navbar/Navbar'
import AppBody from './views/Appbody/Appbody'
import { BrowserRouter, HashRouter } from 'react-router-dom'
function App() {

  return (
    <div className={Style.App}>
      <HashRouter>
        <Navbar></Navbar>
        <AppBody></AppBody>
      </HashRouter>
    </div>
  );
}

export default App;
