// import logo from './logo.svg';
// import './App.css';
import React from "react";
import "./Use.css";

// named import -- export const Header = () => {}
// import { Header } from "./components/Header";

// default import
import Header from "./components/Header";

// import * as Obj from "./components/Header";
// <Obj.Title />   same as <React.Fragment >

import Body from "./components/Body";
import Footer from "./components/Footer";

/**
 * Header
 *  - Logo
 *  - Nav items ( right)
 *  - Cart
 * Body
 *  - SearchBar
 *  - Restaurant list
 *    - Restaurant card
 *    - Image
 *    - Name
 *    - Cuisines
 *    - Distance
 * Footer
 *  - links
 *  - copyright
 */

// config driven UI

// React.Fragment same as <></>
// JSX - have one parent only

const AppLayout = () => {
  return (
    <>
      <Header />
      <Body />
      <Footer />
    </>
  );
};

function App() {
  return (
    <div className="App">
      <AppLayout />
      {/* <h1>hehe</h1> */}
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
