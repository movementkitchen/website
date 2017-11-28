import React from 'react'
import styled from "styled-components"

import profilePic from './profile-pic.jpg'
import nutritiousMovementLogo from './nutritious_movement_logo.jpg'
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

const NutritiousMovementLogo = styled.img`
  margin: 0 auto;
  display: block;
`

class Bio extends React.Component {
  render() {
    return (
      <BioContainer>
        <ProfileImage src={profilePic} alt={`Ivana Miletic Demmel`} />
        <p>
          I’m Ivana, a Nutritious Movement™ Certified Restorative Exercise Specialist, yoga and mindfulness teacher, biomechanics nerd and mum to two energetic little people. Nearly a decade ago I left my career in corporate law and since then have been studying yoga as therapy, somatics, bodywork and teaching various modalities of movement. I'm passionate about helping people reclaim joy and ease in moving.
        </p>
        <NutritiousMovementLogo src={nutritiousMovementLogo} alt={`Nutritious Movement logo`} />
      </BioContainer>
    )
  }
}

export default Bio