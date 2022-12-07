import React from 'react';
import styled from 'react-emotion';
import { rhythm } from '../utils/typography';
import instaIcon from '../images/Movement_Kitchen_Instagram.png';
import faecesIcon from '../images/Movement_Kitchen_Facebook.png';
import twitterIcon from '../images/Movement_Kitchen_Twitter.png';

const Wrapper = styled.div`
  padding: ${rhythm(1)};
  text-align: center;
  background-color: rgba(48, 162, 153, 0.15);
`;

const SocialLinks = styled.p`
  display: grid;
  grid-template-columns: repeat(3, ${rhythm(2)});
  column-gap: ${rhythm(1)};
  place-content: center;
`;

const SocialLink = styled.a`
  display: block;
  height: ${rhythm(2)};

  & > img {
    height: 100%;
    width: auto;
  }
`;

class Footer extends React.Component {
  // TODO: add Legal, privacy statement, credits

  render() {
    return (
      <Wrapper>
        <SocialLinks>
          <SocialLink href="https://www.instagram.com/movementkitchen/">
            <img src={instaIcon} alt={`Movement Kitchen on Instagram`} />
          </SocialLink>
          <SocialLink href="https://www.facebook.com/movementkitchen/">
            <img src={faecesIcon} alt={`Movement Kitchen on Facebook`} />
          </SocialLink>
          <SocialLink href="https://twitter.com/zzuuu">
            <img src={twitterIcon} alt={`Movement Kitchen on Twitter`} />
          </SocialLink>
        </SocialLinks>
        <span>
          📱&nbsp;<a href="tel:+447936348233">+447936348233</a>
          {' | '}
          📧&nbsp;<a href="mailto:ivana@movementkitchen.co.uk">
            ivana@movementkitchen.co.uk
          </a>
          {' | '}
          🗺&nbsp;<a href="https://www.google.co.uk/maps/place/Movement+Kitchen/@51.5669652,-0.0379511,16.21z/data=!4m5!3m4!1s0x48761c47a16c9833:0x63290ee9190cbacb!8m2!3d51.5670449!4d-0.0347802">
            Find us on Google Maps
          </a>
          {' | '}
          <a href="http://eepurl.com/biH6R1">Newsletter sign up</a>
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
