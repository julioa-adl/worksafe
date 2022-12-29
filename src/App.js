import React from "react";
import { Route, BrowserRouter } from "react-router-dom";

import './App.css';
import Home from './pages/Home';
import Sobre from './pages/About';
import Orcamento from "./pages/Orcamento";

function App() {
  return (
    <BrowserRouter>
      <Route component = { Home }  path="/" exact />
      <Route component = { Sobre }  path="/sobre" />
      <Route component = { Orcamento }  path="/cote-agora" />
    </BrowserRouter>
  );
}

export default App;
