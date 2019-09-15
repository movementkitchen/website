import React from 'react';
import styled from 'react-emotion';

import profilePic from '../images/profile-pic.jpg';
import nutritiousMovementLogo from '../images/nutritious_movement_logo.jpg';
import { rhythm } from '../utils/typography';

const BioContainer = styled.div`
  padding: ${rhythm(2)};
`;

const ProfileImage = styled.img`
  float: left;
  margin: ${rhythm(1 / 5)} ${rhythm(1)} 0 0;
  width: ${rhythm(5)};
  height: ${rhythm(5)};
  clip-path: circle(${rhythm(5 / 2)} at center);
`;

const NutritiousMovementLink = styled.a`
  width: 100%;
  display: block;

  & > img {
    width: 50%;
    height: auto;
    margin: 0 25%;
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
