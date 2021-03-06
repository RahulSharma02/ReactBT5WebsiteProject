import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import {Switch,Route,Redirect} from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import Service from './components/Service';
import Contact from './components/Contact';
import Navbar from './designcompo/Navbar';
import Footer from './designcompo/Footer';

const App = () => {
  return (
    <>
    <Navbar/>
     <Switch>
     <Route exact path = "/" component = {Home}/>
     <Route path = "/about" component = {About}/>
     <Route path = "/service" component = {Service}/>
     <Route path = "/contact" component = {Contact}/>
      <Redirect to = "/" />
     </Switch>
     <Footer/>
    </>
  );
}

export default App;
