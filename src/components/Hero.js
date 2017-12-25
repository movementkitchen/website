import React from 'react'
import PropTypes from 'prop-types'
import styled from 'react-emotion'

import {
  options as typographyOptions,
  rhythm,
  scale,
} from '../utils/typography'

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

class Hero extends React.Component {
  render() {
    return (
      <div>
        <ImageContainer
          style={{
            backgroundImage: `url(${this.props.imageURI})`,
          }}
        />
        <ShadyHeadline>Rediscovering the joy of play in movement</ShadyHeadline>
      </div>
    )
  }
}

Hero.propTypes = {
  imageURI: PropTypes.string,
}

export default Hero
