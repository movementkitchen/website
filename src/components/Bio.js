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
        I’m Ivana, a movement coach, biomechanics nerd and mum to two energetic little people. Nearly a decade ago I left my career in corporate law and since then have been studying yoga as therapy, somatics, bodywork and teaching various modalities of movement. I am currently in the final year of my Restorative Exercise certification with Nutritious Movement studying under biomechanics scientist Katy Bowman. I am passionate about rediscovering the joy of play in movement and helping people feel stronger and more confident in their bodies.
      </BioContainer>
    )
  }
}

export default Bio