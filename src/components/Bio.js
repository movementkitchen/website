import React from 'react';
import styled from 'react-emotion';

import profilePic from '../images/profile-pic.jpg';
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

class Bio extends React.Component {
  render() {
    return (
      <BioContainer>
        <p>
          <ProfileImage src={profilePic} alt={`Ivana Miletic Demmel`} />
          Hi there! I’m Ivana, a sports and exercise scientist with a Master's degree in Biomechanics and a special interest in mechanisms of injuries, aging, and women's health. I have over a decade of experience working with movement and rehabilitation and have published research on aging master endurance athletes. I’m passionate about using the learning from elite athletes to improve quality of life of everyday people, especially mums.
        </p>
      </BioContainer>
    );
  }
}

export default Bio;
