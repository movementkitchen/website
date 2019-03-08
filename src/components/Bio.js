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
          Hi, I’m Ivana, a movement and wellness coach, RES-CPT, yoga therapist,
          mum, maker, mover and keen researcher of movement. I'm passionate
          about empowering women to improve their quality of life after having
          children and have spent most of my career supporting women in their
          journeys through pregnancy and motherhood. I'm an advocate of
          movement-rich life, integrating more movement into everyday.
        </p>
        <NutritiousMovementLink href="https://www.nutritiousmovement.com/live-events/#find-teacher">
          <img src={nutritiousMovementLogo} alt={`Nutritious Movement logo`} />
        </NutritiousMovementLink>
      </BioContainer>
    );
  }
}

export default Bio;
