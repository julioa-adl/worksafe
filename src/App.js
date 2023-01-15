import React from "react";
import { Route, BrowserRouter } from "react-router-dom";

import './App.css';
import Home from './pages/Home';
import Sobre from './pages/About';
import Orcamento from "./pages/Orcamento";
import Services from "./pages/Services";

function App() {
  return (
    <BrowserRouter>
      <Route exact path="/" component = { Home }/>
      <Route exact path="/sobre" component = { Sobre }/>
      <Route exact path="/cote-agora" component = { Orcamento }/>
      <Route exact path="/servicos" component = { Services }/>
      {/* <Route exact path="/servicos/:id" component={ servicesDetails } /> */}
      {/* <Route exact path="/portifolio" component = { Portifolio }/> */}
      {/* <Route exact path="/portifolio/:id" component={ PortifolioDetails } /> */}
    </BrowserRouter>
  );
}

export default App;
