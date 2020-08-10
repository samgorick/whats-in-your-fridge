import React from 'react';
import Lottie from 'react-lottie';
import logo from './lotties/4762-food-carousel.json';
import { Header } from 'semantic-ui-react';
import { Link } from 'react-router-dom'

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
    <Link to="/">
      <Lottie options={defaultOptions} height={200} width={200} />
    </Link>
    <Header as="h1" textAlign='center' style={{margin: 20}}>What's In Your Fridge?</Header>
  </div>
);

export default LogoComponent;
