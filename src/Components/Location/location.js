import React from 'react';
import background from '../../ressource/bar.jpg';
import './location.css';
import {ParallaxLayer} from 'react-spring/renderprops-addons'
const Location = () => {
  return (
      <>
    <ParallaxLayer offset={1.5} factor={1}>
    <section className="location">
        
        <img id="background" src={background} alt="logo nicht verfügbar" />
        <div className="dark-layer" />
        <p id="location-title">LOCATION</p>

    </section>
    </ParallaxLayer>
    
    <ParallaxLayer offset={1.96} speed={0.5} factor={1}>
    <iframe id="googlemaps" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1185.3471442141963!2d8.5752946!3d53.5453726!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b6b11b97dcb5b7%3A0x5670fe41c36fa74c!2sBan%20Mai%20Sushi%20Bar!5e0!3m2!1sde!2sde!4v1567883127341!5m2!1sde!2sde"></iframe>   
    </ParallaxLayer>
    </>
  );

}
export default Location;