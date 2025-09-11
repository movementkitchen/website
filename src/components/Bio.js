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
        Hi there! I'm Ivana Demmel, a back pain nerd, biomechanics scientist MSc and coach 
       passionate about women's health, performance and
        longevity. I value evidence-based
        solutions and precise, focused training where everything has its ‘why’. My coaching style is
        grounded in empathy and non-violence – challenging the body with kindness.
      </p>
    );
  }
}

export default Bio;
