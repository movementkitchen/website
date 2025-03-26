import React from 'react';
import styled from 'react-emotion';

import profilePic from '../images/Ivana-bio-blue.jpg';
import { rhythm } from '../utils/typography';

const ProfileImage = styled.img`
  float: left;
  margin: ${rhythm(1 / 5)} ${rhythm(1)} 0 0;
  width: ${rhythm(9)};
`;

class Bio extends React.Component {
  render() {
    return (
      <p>
        <ProfileImage src={profilePic} alt={`Ivana Miletic Demmel`} />
        Hi there! I'm Ivana, I'm a biomechanics scientist MSc and coach with 13 years of experience
        working in health and fitness. I am passionate about women's health and performance (both
        athletic and biological) and longevity. I specialise in helping women 40+ with history of
        back pain move from managing symptoms to pushing their boundaries. I have also published
        research on{' '}
        <a href="https://commons.nmu.edu/isbs/vol40/iss1/36/" target="_blank" rel="noreferrer">
          elite master endurance runners
        </a>{' '}
        who practically slowed down ageing with high levels of training. I value evidence-based
        solutions and precise, focused training where everything has its ‘why’. My coaching style is
        grounded in empathy and non-violence – challenging the body with kindness.
      </p>
    );
  }
}

export default Bio;
