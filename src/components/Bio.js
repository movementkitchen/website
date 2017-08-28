import React from 'react'
import styled from "styled-components"

import profilePic from './profile-pic.jpg'
import { rhythm } from '../utils/typography'

const BioContainer = styled.p`
  padding: ${rhythm(2)};
`

const ProfileImage = styled.img`
  float: left;
  margin: ${rhythm(1 / 4)} ${rhythm(1 / 4)} 0 0;
  width: ${rhythm(2.5)};
  height: ${rhythm(2.5)};
`

class Bio extends React.Component {
  render() {
    return (
      <BioContainer>
        <ProfileImage src={profilePic} alt={`Ivana Miletic Demmel`} />
        I’m a movement coach, biomechanics geek and mum to two energetic little people. My background brings together yoga, somatics, mindfulness and Restorative Exercise (RES). I am currently in the final year of my Personal Trainer RES Certification with Nutritious Movement studying under biomechanics scientist Katy Bowman. I am passionate about helping people feel stronger and more confident in their bodies and overcome pain.
      </BioContainer>
    )
  }
}

export default Bio