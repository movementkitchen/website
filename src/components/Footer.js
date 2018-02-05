import React from 'react';
import styled from 'react-emotion';
import { rhythm } from '../utils/typography';

const Wrapper = styled.div`
  margin: 0 ${rhythm(3 / 4)} ${rhythm(1)};
  text-align: center;
`;

class Footer extends React.Component {
  // TODO: add Legal, privacy statement, credits

  render() {
    return (
      <Wrapper>
        <hr />
        <span>
          📱&nbsp;<a href="tel:+447936348233">+447936348233</a>
          {' | '}
          📧&nbsp;<a href="mailto:ivana@movementkitchen.co.uk">ivana@movementkitchen.co.uk</a>
          {' | '}
          🗺&nbsp;<a href="https://www.google.co.uk/maps/place/Movement+Kitchen/@51.5729593,-0.0756381,15z/data=!4m5!3m4!1s0x0:0x63290ee9190cbacb!8m2!3d51.57656!4d-0.061476">
            Find us on Google Maps
          </a>
          {' | '}
          <a href="http://eepurl.com/biH6R1">Newsletter sign up</a>
        </span>
        <br />
        <small>
          <a href="https://github.com/movementkitchen/website">Open source on Github</a>
          {' | '}
          <a href="https://www.netlify.com/">Hosted by Netlify</a>
        </small>
      </Wrapper>
    );
  }
}

export default Footer;
