import React from 'react';
import styled from 'react-emotion';

import profilePic from './profile-pic.jpg';
import nutritiousMovementLogo from './nutritious_movement_logo.jpg';
import { rhythm } from '../utils/typography';

const BioContainer = styled.div`
  padding: ${rhythm(2)};
`;

const ProfileImage = styled.img`
  float: left;
  margin: ${rhythm(1 / 4)} ${rhythm(1 / 4)} 0 0;
  width: ${rhythm(2.5)};
  height: ${rhythm(2.5)};
`;

const NutritiousMovementLink = styled.a`
  text-align: center;
  display: block;

  & > img {
    max-height: 35vh;
    margin: 0;
  }
`;

class Bio extends React.Component {
  render() {
    return (
      <BioContainer>
        <p>
          <ProfileImage src={profilePic} alt={`Ivana Miletic Demmel`} />
          Hi, I’m Ivana, a movement coach RES-CPT, mum, maker, mover and
          researcher. I'm passionate about empowering people to feel stronger
          and more confident in their bodies. I'm also an advocate of
          movement-rich life, integrating more movement into the everyday.
        </p>
        <NutritiousMovementLink href="https://www.nutritiousmovement.com/live-events/#find-teacher">
          <img src={nutritiousMovementLogo} alt={`Nutritious Movement logo`} />
        </NutritiousMovementLink>
      </BioContainer>
    );
  }
}

export default Bio;
