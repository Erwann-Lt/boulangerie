
import Header from "./accueil/Header";
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'
import "./index.css";
import Home from "./accueil/Home";
import Footer from "./accueil/Footer";
import { Switch, Route} from 'react-router-dom'
import Boulangerie from "./boulangerie/Boulangerie";
import Chocolaterie from "./chocolat/Chocolaterie";
import Patisserie from "./patisserie/Patisserie";
import Contact from "./contact/Contact";

const App = () => {
  return (
    <div className='container-fluid'>

    

      <div className='navbar sticky-top navbar-light bg-light'>
     
      <Header />
      </div>
     
      
      
      <Switch>

      <Route exact path='/'>
      <Home />
      </Route>

       <Route exact path='/boulangerie'>
        <Boulangerie />
       </Route>

       <Route exact path='/chocolaterie'>
        <Chocolaterie />
       </Route>

       <Route exact path='/patisserie'>
        <Patisserie />
       </Route>

       <Route exact path='/contact'>
        <Contact />
       </Route>

     </Switch>

    <div  >
    <Footer />
    </div>
      
     
     
    
    </div>
  )
}


export default App;
