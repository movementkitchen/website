import React from 'react';
import styled from 'react-emotion';

import {
  MIN_DEFAULT_MEDIA_QUERY,
  MOBILE_WIDTH,
  MIN_MOBILE_MEDIA_QUERY,
  DEFAULT_WIDTH,
} from 'typography-breakpoint-constants';
import { rhythm } from '../utils/typography';

const ImagesContainer = styled.div`
  margin: ${rhythm(1)} 0 ${rhythm(2.5)} 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const ImageLink = styled.a`
  flex: 0 1 100%;
  margin-bottom: ${rhythm(1 / 2)};

  ${MIN_MOBILE_MEDIA_QUERY} {
    flex: 0 1 48.5%;
  }

  ${MIN_DEFAULT_MEDIA_QUERY} {
    flex: 0 1 32%;
  }
`;

const Image = styled.img`
  margin: 0;
`;

class Instagram extends React.Component {
  render() {
    return (
      <div>
        <h2>My last few Instagram posts</h2>
        <ImagesContainer>
          {this.props.posts.map(post => (
            <ImageLink
              key={post.id}
              href={`https://www.instagram.com/p/${post.code}/`}
            >
              <Image
                src={post.smallImage.childImageSharp.small.src}
                srcSet={post.smallImage.childImageSharp.small.srcSet}
                sizes={`(min-width: ${DEFAULT_WIDTH}px) 250px, (min-width: ${MOBILE_WIDTH}px) 50vw, 100vw`}
              />
            </ImageLink>
          ))}
        </ImagesContainer>
      </div>
    );
  }
}

export default Instagram;
