import React, { Component } from 'react';
import Header from "./Components/Header";
import Experience from "./Components/Experience"
import './App.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";

class App extends Component {
  constructor() {
    super();
    this.state = {

    };
  };

  render() {
    return (
      <div className="App">
        <Header />
        <Experience />
      </div>
    );
  };
};

export default App;
