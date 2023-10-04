import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';

import { MIN_DEFAULT_MEDIA_QUERY } from 'typography-breakpoint-constants';

import {
  options as typographyOptions,
  rhythm,
  scale,
} from '../utils/typography';

const Wrapper = styled.div`
  width: 100%;
  position: relative;
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 50vh;
  background-size: cover;
  background-position: right;
  position: relative;

  &:after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: block;
    background-color: rgba(0, 0, 0, 0.5);
  }
`;

// applying class multiple times to increase specificity
const ShadyHeadline = styled.h2`
  && {
    text-align: center;
    position: absolute;
    width: calc(100% - ${rhythm(1)});
    top: 50%;
    transform: translateY(-50%);
    color: white;
    font-family: ${typographyOptions.bodyFontFamily.join(`,`)};
    ${scale(0.3)};
    font-weight: 400;
    margin: 0 ${rhythm(0.5)};

    ${MIN_DEFAULT_MEDIA_QUERY} {
      ${scale(0.4)};
    }
  }
`;

class Hero extends React.Component {
  render() {
    return (
      <Wrapper>
        <ImageContainer
          style={{
            backgroundImage: `url(${this.props.imageURI})`,
          }}
        />
        <ShadyHeadline>Evidence-Based Core Rehab</ShadyHeadline>
      </Wrapper>
    );
  }
}

Hero.propTypes = {
  imageURI: PropTypes.string,
};

export default Hero;
