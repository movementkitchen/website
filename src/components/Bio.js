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
          Hi, I’m Ivana, an exercise scientist, movement coach, writer, mum,
          maker and mover. I'm passionate about helping people break out of
          recurrent injuries and get stronger and more confident in their
          bodies. Over the last 11 years, I've developed a particular interest
          in women's neuromusculoskeletal health – supporting women through
          pregnancy, postnatal period, perimenopause and menopause. When I'm not
          researching or teaching movement, you can find me singing on the
          bicycle or making up stories for 7- and 9-year-olds.
        </p>
      </BioContainer>
    );
  }
}

export default Bio;
