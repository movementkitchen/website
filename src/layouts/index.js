import React from 'react';
import PropTypes from 'prop-types';

import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

class Template extends React.Component {
  render() {
    const { location, children, data } = this.props;

    return (
      <div>
        <Navigation navItems={data.site.siteMetadata.navigation} />
        {children()}
        <Footer />
      </div>
    );
  }
}

Template.propTypes = {
  children: PropTypes.func,
  location: PropTypes.object,
  data: PropTypes.object,
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
