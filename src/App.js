import React from 'react';
import {BrowserRouter as Router,
Switch,
Route,
} from "react-router-dom"
import SignIn from './SignIn.js';
import SignUp from './SignUp.js';
import ProductListing from './ProductListing.js';
import LandingPage from './landingPage.js';
import ProductPage from './productPage.js';
import Cart from './Cart.js';

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <div>
      <Router>
        <Switch>
          <Route path = '/signin'>
            <SignIn />
          </Route>
          <Route path = '/signup'>
            <SignUp />
          </Route>
          <Route path = '/cart'>
            <Cart />
          </Route>
          <Route path = '/women'>
            <ProductListing />
          </Route>
          <Route path = '/men'>
            <ProductListing />
          </Route>
          <Route path = '/kids'>
            <ProductListing />
          </Route>
          <Route path = '/productpage'>
            <ProductPage />
          </Route>
          <Route path = '/'>
            <LandingPage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
