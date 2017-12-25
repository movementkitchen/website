import React from 'react';

import { rhythm } from '../utils/typography';

class Footer extends React.Component {
  // TODO: add Legal, privacy statement, credits

  render() {
    return (
      <div
        style={{
          margin: `0 ${rhythm(3 / 4)}`,
          textAlign: 'center',
        }}
      >
        <hr />
        <p>
          📱&nbsp;<a href="tel:+447936348233">+447936348233</a> | 📧&nbsp;<a href="mailto:ivana@movementkitchen.co.uk">
            ivana@movementkitchen.co.uk
          </a>{' '}
          | <a href="http://eepurl.com/biH6R1">Newsletter sign up</a> |{' '}
          <a href="https://github.com/movementkitchen/website">Open source on Github</a> |{' '}
          <a href="https://www.netlify.com/">Hosted by Netlify</a>
        </p>
      </div>
    );
  }
}

export default Footer;
