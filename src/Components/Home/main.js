import React from 'react';
import background from '../../ressource/background_sushi-min.jpg';
import './main.css';
import OpeningHours from '../OpeningHours/openinghours';
import Location from '../Location/location';
import {Parallax, ParallaxLayer} from 'react-spring/renderprops-addons'

function Welcome() {
  return (
  <>
        <ParallaxLayer offset={0} factor={1}>

        <section className="home">
        <ParallaxLayer offset={0} factor={1}>
          <img id="background" src={background} alt="logo nicht verfügbar" />
          <div className="dark-layer" />
          </ParallaxLayer>
          <ParallaxLayer offset={0.1} speed={0.15} factor={1}>
          <div className="title-wrapper">
            <p id="home-title">SUSHI - ALL YOU CAN EAT</p>
            <p id="home-title">IN BREMERHAVEN</p>
          </div>
          </ParallaxLayer>
        </section>

    </ParallaxLayer>
    <ParallaxLayer offset={1} factor={1}>
      <OpeningHours />
      </ParallaxLayer>

        <Location />

     </>
  );

}
export default Welcome;