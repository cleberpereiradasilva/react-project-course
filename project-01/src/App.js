import React, { Component } from 'react';
import './resources/styles.css'
import Header from './components/header_footer/Header'
import Featured from './components/featured'
import VenueNfo from './components/VenueNfo';
import HightLights from './components/highLights'
import Pricing from './components/Pricing'
import { Location } from './components/Location';
import Footer from './components/header_footer/Footer';
import { Element } from 'react-scroll'
class App extends Component {
  render() {
    return (
      <div className="App" style={{ height: "1500px", background: "cornflowerblue" }}>
          <Element name='Header'>
            <Header />
          </Element>         
          <Featured />         
          <Element name='VenueNfo'>
            <VenueNfo />
          </Element>
          <Element name='HightLights'>
            <HightLights />
          </Element>
          <Element name='Pricing'>
            <Pricing />
          </Element>
          <Element name='Location'>
            <Location />
          </Element>
          <Footer />
      </div>
    );
  }
}

export default App;
