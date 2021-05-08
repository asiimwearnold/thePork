import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route,Link } from "react-router-dom";
import {Fade} from 'react-awesome-reveal'
import HomeScreen from './screens/HomeScreen';
import Footer from './components/Footer';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
       <Router>
     
        

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
                 
          <Route  exact path="/">
            <Header />
            <HomeScreen/>
            <Fade/>
            <Footer/>
          </Route>

        </Switch>
   
    </Router>
    </div>
  );
}

export default App;  
