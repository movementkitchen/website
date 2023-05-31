import React from 'react';
import styled from 'react-emotion';
import { rhythm, options as typographyOptions } from '../utils/typography';

const Wrapper = styled.div`
  padding: ${rhythm(1 / 2)};
  text-align: center;
  color: white;
  background-color: ${typographyOptions.brandColorPrimaryGreen};

  a {
    color: white;
  }
`;

class Footer extends React.Component {
  // TODO: add Legal, privacy statement, credits

  render() {
    return (
      <Wrapper>
        <span>
          📱&nbsp;<a href="tel:+447936348233">+447936348233</a>
          {' | '}
          📧&nbsp;
          <a href="mailto:ivana@movementkitchen.co.uk">
            ivana@movementkitchen.co.uk
          </a>
          {' | '}
          🗺&nbsp;
          <a href="https://www.google.co.uk/maps/place/Movement+Kitchen/@51.5669652,-0.0379511,16.21z/data=!4m5!3m4!1s0x48761c47a16c9833:0x63290ee9190cbacb!8m2!3d51.5670449!4d-0.0347802">
            Find us on Google Maps
          </a>
        </span>
        <br />
        <small>
          <a href="https://github.com/movementkitchen/website">
            Open source on Github
          </a>
          {' | '}
          <a href="https://pages.github.com">Hosted by Github Pages</a>
        </small>
      </Wrapper>
    );
  }
}

export default Footer;
