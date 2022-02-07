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
          Hi, I’m Ivana, a human movement scientist, movement coach, mover,
          maker and a mum. I'm excited about improving human biological
          performance and quality of life through movement. Over the years, I've
          developed a particular interest in women's neuromusculoskeletal health
          – supporting women through pregnancy, postnatal period, perimenopause
          and menopause – empowering them to get stronger and more confident in
          their bodies.
        </p>
      </BioContainer>
    );
  }
}

export default Bio;
