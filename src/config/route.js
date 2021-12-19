import React, { useEffect, useContext } from 'react';
import Login from '../screens/login/login';
import Signup from '../screens/signup/signup';
import Navbar from '../components/navbar';
import HomePage from '../screens/home/home';
import {auth,onAuthStateChanged,} from './firebase';
import { GlobalContext } from '../context/context';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

  
  function Routess() {
    const {state, dispatch} = useContext(GlobalContext)
    
    useEffect( () => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
            
              const uid = user.uid;
              console.log(user, 'user is here')
            } else {
                console.log('user is not here')
              // ...
            }
          });
          
    }, [])

return (
    <Router>
        <Navbar />
        <Switch>
         
         <Route exact path='/signup' >
            <Signup />
         </Route>

         <Route exact path='/login' >
            <Login />
         </Route>

         <Route exact path='/home' >
            <HomePage />
         </Route>

        </Switch>
    </Router>
)
}
export default Routess