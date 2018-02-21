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
`;

class Bio extends React.Component {
  render() {
    return (
      <BioContainer>
        <p>
          <ProfileImage src={profilePic} alt={`Ivana Miletic Demmel`} />
          I’m Ivana, a Nutritious Movement™ Certified Restorative Exercise
          Specialist, yoga and mindfulness teacher, biomechanics nerd and mum to
          two energetic little people. I'm passionate about helping people
          reclaim ease and joy in moving.
        </p>
        <NutritiousMovementLink href="https://nutritiousmovement.com/find-a-teacher/#marker633">
          <img src={nutritiousMovementLogo} alt={`Nutritious Movement logo`} />
        </NutritiousMovementLink>
      </BioContainer>
    );
  }
}

export default Bio;
