import React, { useEffect } from "react";
import { Router, Switch ,Route, BrowserRouter } from "react-router-dom";


import './App.css';
import Home from './pages/Home';
import Sobre from './pages/About';
import Orcamento from "./pages/Orcamento";
import Services from "./pages/Services";
import ServicesDetails from "./pages/ServicesDetails";
import Treinamentos from "./pages/Treinamentos";
import My404Component from "./pages/My404Component";
import ReactGA from 'react-ga';

ReactGA.initialize('UA-218904708-2');

function App() {

  return (
    <BrowserRouter>
     <Switch>
        <Route exact path={"/"} component = { Home }/>
        <Route exact path={"/sobre"} component = { Sobre }/>
        <Route exact path={"/cote-agora"} component = { Orcamento }/>
        <Route exact path={"/servicos"} component = { Services }/>
        <Route exact path={"/servicos/:id"} component={ ServicesDetails } />
        <Route exact path={"/treinamentos"} component={ Treinamentos } />
        {/* <Route exact path="/portifolio" component = { Portifolio }/> */}
        {/* <Route exact path="/portifolio/:id" component={ PortifolioDetails } /> */}
        <Route exact path={"*"} component={ My404Component } />
     </Switch>
    </BrowserRouter>
  );
}

export default App;
