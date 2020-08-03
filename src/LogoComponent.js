import React from 'react';
import Lottie from 'react-lottie';
import logo from './lotties/4762-food-carousel.json';

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: logo,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice'
  }
};

const LogoComponent = () => (
  <div>
    <Lottie options={defaultOptions} height={200} width={200} />
    <h1>What's In Your Fridge?</h1>
  </div>
);

export default LogoComponent;
