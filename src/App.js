import React from "react";
import { Route, BrowserRouter } from "react-router-dom";

import './App.css';
import Home from './pages/Home';

function App() {
  return (
    <BrowserRouter>
      <Route component = { Home }  path="/" exact />
      {/* <Route component = { Sobre }  path="/sobre" /> */}
    </BrowserRouter>
  );
}

export default App;
