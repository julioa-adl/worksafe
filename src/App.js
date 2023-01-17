import React, { useEffect } from "react";
import { Route, BrowserRouter } from "react-router-dom";

import ReactGA from 'react-ga';



import './App.css';
import Home from './pages/Home';
import Sobre from './pages/About';
import Orcamento from "./pages/Orcamento";
import Services from "./pages/Services";
import ServicesDetails from "./pages/ServicesDetails";
import My404Component from "./pages/My404Component";

function App() {
  ReactGA.initialize('G-SS6FXT77D7');
  ReactGA.pageview(window.location.pathname + window.location.search);
  return (
    <BrowserRouter>
      <Route exact path="/" component = { Home }/>
      <Route exact path="/sobre" component = { Sobre }/>
      <Route exact path="/cote-agora" component = { Orcamento }/>
      <Route exact path="/servicos" component = { Services }/>
      <Route exact path="/servicos/:id" component={ ServicesDetails } />
      {/* <Route exact path="/portifolio" component = { Portifolio }/> */}
      {/* <Route exact path="/portifolio/:id" component={ PortifolioDetails } /> */}
      {/* <Route component={ My404Component } /> */}
    </BrowserRouter>
  );
}

export default App;
