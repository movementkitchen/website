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
        I’m a movement coach, biomechanics geek and mum to two energetic little people. My background brings together over 1200 hours of training in yoga as therapy, somatics and bodywork and years of working with the movement and the body. I am currently in the final year of my Personal Trainer RES Certification with Nutritious Movement studying under biomechanics scientist Katy Bowman. I am passionate about rediscovering the joy of play in movement and helping people feel stronger and more confident in their bodies.
      </BioContainer>
    )
  }
}

export default Bio