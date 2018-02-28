import React from 'react';
import styled from 'react-emotion';

import { MIN_TABLET_MEDIA_QUERY } from 'typography-breakpoint-constants';
import { rhythm } from '../utils/typography';

const TestimonialsList = styled.ul`
  list-style-type: none;
  margin: 0 0 ${rhythm(2.5)};
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Testimonial = styled.li`
  flex: 0 1 100%;
  margin-top: ${rhythm(2)};

  ${MIN_TABLET_MEDIA_QUERY} {
    flex: 0 1 30%;
  }
`;

const TestimonialAvatar = styled.img`
  max-width: 120px;
  clip-path: circle(60px at center);
  margin: 0 auto;
  display: block;
`;

const TestimonialName = styled.h4`
  text-align: center;
`;

export default class Testimonials extends React.Component {
  render() {
    return (
      <div>
        <h3>Testimonials</h3>
        <TestimonialsList>
          {this.props.testimonials.map(testimonial => (
            <Testimonial key={testimonial.url}>
              <TestimonialAvatar src={testimonial.avatar} />
              <TestimonialName>{testimonial.name}</TestimonialName>
              <p>{testimonial.text}</p>
              <a href={testimonial.url} target="_blank">
                See original testimonial
              </a>
            </Testimonial>
          ))}
        </TestimonialsList>
      </div>
    );
  }
}
