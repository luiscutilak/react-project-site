import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Sobre from './pages/sobre';
import Contato from './pages/contato';
import Home from './pages/home';

const root = 
ReactDOM.createRoot(document.getElementById('root')) //new way to use Reactdom in React 18

  root.render(
    (

      <Router>
        <App></App>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/sobre" component={Sobre}/>
            <Route path="/contato" component={Contato}/>
          </Switch>
      </Router>     
    ),
  );
