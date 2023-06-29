import React, { useEffect } from 'react'
import './App.css';
import Header from './Header';
import Home from './Home';
import { BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Checkout from './Checkout';
import  Login  from './Login';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';
import  Payment  from './Payment';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import Orders from './Orders'; 

const promise = loadStripe('pk_test_51NN9ECSGe9zqVhku2op98ojickcufXng91sR7jSqAZjIGIJky7a8dvYx6t9g1u9IsWeWQx8LtMEwCIY4VOR6tCvW00FYmH2eJs');
function App() {
  const [{}, dispatch ] = useStateValue();

  useEffect (() => {
    auth.onAuthStateChanged(authUser => { 
      console.log('THE USER IS >>> ',authUser);

      if(authUser){
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      }else{
        dispatch({
          type:'SET_USER',
          user:null
      })
      }

    })
  }, [])
  return (
    <Router>
    <div className="app">
      <Routes>
      <Route path="/orders" element={<><Header /><Orders /></>}> 
        </Route>

      <Route path="/login" element={<><Login /></>}> 
        </Route>

        <Route path="/checkout"
        element={<><Header /><Checkout/></>}>
        </Route>

        <Route path="/payment"
        element={<><Header /><Elements stripe={promise}><Payment/></Elements></>}>
        </Route>

        <Route path="/" 
        element={<><Header /><Home/></>}>
      </Route>
    </Routes>
    </div>
    </Router>
  );
}

export default App;
