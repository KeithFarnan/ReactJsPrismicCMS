import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Components/Layout/Navbar';
// importing react router for application navigation
import { Switch, Route } from 'react-router-dom';
import Footer from './Components/Layout/Footer';
// importing Pages to the main application
import Home from './Components/Pages/Home';
import News from './Components/Pages/News';
import Contacts from './Components/Pages/Contacts';
import Details from './Components/Pages/Details';
import NotFound from './Components/Pages/NotFound';


function App() {
  return (
    <div className="App">
      <Navbar /> 
      <Switch>
        <Route path="/home" component={Home} />
        <Route path="/news" component={News} />
        <Route path="/contacts" component={Contacts} />
        <Route path="/details" component={Details} />
        <Route path="/notFound" component={NotFound} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
