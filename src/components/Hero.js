import React from "react"
import styled from "styled-components"

import { options as typographyOptions, rhythm, scale } from "../utils/typography"

const ImageContainer = styled.div`
  width: 100%;
  height: 30vh;
  background-size: cover;
  background-position: center;
  position: relative;
`

const ShadyHeadline = styled.h2`
  font-family: ${typographyOptions.bodyFontFamily.join(`,`)};
  position: absolute;
  top: 50%;
  left: 15%;
  transform: translateY(-25%);
  text-align: center;
  width: 70%;
  color: white;
  text-shadow: 0px 0px 2px black, 0px 2px 1px black;
`

class Hero extends React.Component {
  render() {
    return (
      <ImageContainer
        style={{
          backgroundImage: `url(${this.props.imageURI})`
        }}
      >
        <ShadyHeadline>
          Find your way to sustainable, pain free movement
        </ShadyHeadline>
      </ImageContainer>
    )
  }
}

Hero.propTypes = {
  imageURI: React.PropTypes.string,
}

export default Hero
