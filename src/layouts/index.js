import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import get from 'lodash/get';

import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { rhythm, scale } from '../utils/typography';

class Template extends React.Component {
  render() {
    const { location, children } = this.props;

    return (
      <div>
        <Navigation navItems={get(this, 'props.data.site.siteMetadata.navigation')} />
        {children()}
        <Footer />
      </div>
    );
  }
}

Template.propTypes = {
  children: PropTypes.func,
  location: PropTypes.object,
};

export default Template;

export const pageQuery = graphql`
  query LayoutIndexQuery {
    site {
      siteMetadata {
        navigation {
          uri
          label
          hero
        }
      }
    }
  }
`;
