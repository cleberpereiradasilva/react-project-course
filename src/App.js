import React, { Component } from 'react';
import './resources/styles.css'
import Header from './components/header_footer/Header'
import Featured from './components/featured'
import VenueNfo from './components/VenueNfo';
import HightLights from './components/highLights'

class App extends Component {
  render() {
    return (
      <div className="App" style={{ height: "1500px", background: "cornflowerblue" }}>
          <Header />
          <Featured />
          <VenueNfo />
          <HightLights />
      </div>
    );
  }
}

export default App;
