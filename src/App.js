import React, { useState } from "react"
// import logo from './logo.svg';
// import { Counter } from './features/counter/Counter';
// import './App.css';

import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import Login from './pages/Login';
import Contacts from './pages/Contacts';
import ContactDetail from './pages/ContactDetail';
import { AuthContext } from './context/auth';

function App() {
  const [authTokens, setAuthTokens] = useState(localStorage.getItem('authTokens') || '');

  const setTokens = (data) => {
    localStorage.setItem("tokens", JSON.stringify(data));
    setAuthTokens(data);
  };

  return (
    <AuthContext.Provider value={{ authTokens, setAuthTokens: setTokens }}>
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/login">Login Page</Link>
            </li>
            <li>
              <Link to="/">Contacts Page</Link>
            </li>
            <li>
              <Link to="/contacts/:id">Contact Detail</Link>
            </li>
          </ul>
          <Route path="/login" component={Login} />
          <PrivateRoute exact path="/" component={Contacts} />
          <PrivateRoute path="/contacts/:id" component={ContactDetail} />
        </div>
      </Router>
    </AuthContext.Provider>
  )
}

export default App;

// return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <Counter />
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <span>
  //         <span>Learn </span>
  //         <a
  //           className="App-link"
  //           href="https://reactjs.org/"
  //           target="_blank"
  //           rel="noopener noreferrer"
  //         >
  //           React
  //         </a>
  //         <span>, </span>
  //         <a
  //           className="App-link"
  //           href="https://redux.js.org/"
  //           target="_blank"
  //           rel="noopener noreferrer"
  //         >
  //           Redux
  //         </a>
  //         <span>, </span>
  //         <a
  //           className="App-link"
  //           href="https://redux-toolkit.js.org/"
  //           target="_blank"
  //           rel="noopener noreferrer"
  //         >
  //           Redux Toolkit
  //         </a>
  //         ,<span> and </span>
  //         <a
  //           className="App-link"
  //           href="https://react-redux.js.org/"
  //           target="_blank"
  //           rel="noopener noreferrer"
  //         >
  //           React Redux
  //         </a>
  //       </span>
  //     </header>
  //   </div>
  // );
