import React from "react"
import styled from "styled-components"

import { options as typographyOptions, rhythm, scale } from "../utils/typography"

const ImageContainer = styled.div`
  width: 100%;
  height: 45vh;
  background-size: cover;
  background-position: right;
  position: relative;
`

const ShadyHeadline = styled.h2`
  font-family: ${typographyOptions.bodyFontFamily.join(`,`)};
  text-align: center;
  padding: ${rhythm(2)} ${rhythm(2)} 0 ${rhythm(2)};
  margin-bottom: 0;
`

const CallToActionButton = styled.button`
  background: yellow;
  border: none;
  width: ${rhythm(5)};
  position: absolute;
  bottom: ${rhythm(1)};
  right: ${rhythm(1)};
  padding: ${rhythm(0.5)};
`

class Hero extends React.Component {
  render() {
    return (
      <div>
        <ImageContainer
          style={{
            backgroundImage: `url(${this.props.imageURI})`
          }}
        >
          <CallToActionButton>
            Book now
          </CallToActionButton>
        </ImageContainer>
        <ShadyHeadline>
          Find your way to sustainable, pain free movement
        </ShadyHeadline>
      </div>
    )
  }
}

Hero.propTypes = {
  imageURI: React.PropTypes.string,
}

export default Hero
