import React, { lazy, Suspense } from 'react';
import './App.css'
import logo from '../../ressource/banmai-logo.png';
//import Home from '../Home/main';
import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons';
import { useSpring, animated } from 'react-spring';

const Home = lazy(() => import('../Home/main'));

function Logo() {
  const fade = useSpring({
    from: {
      opacity: 0,
      marginTop: -500
    },
    to: {
      opacity: 1,
      marginTop: 0
    },
  });
  return (
    <>
        <Parallax pages={2.5} scrolling={true}>
        <animated.section className="header" style={fade}>
          <h1 id="restaurant-title-a">Ban Mai</h1>
          <img id="logo" src={logo} alt="logo nicht verfügbar" />
          <h1 id="restaurant-title-b">Sushi Bar</h1>
        </animated.section>
        <Suspense fallback={<div id="loading-spinner">Loading....</div>}>
        <Home />
      </Suspense>
      </Parallax>
    </>
  );

}

export default Logo;

