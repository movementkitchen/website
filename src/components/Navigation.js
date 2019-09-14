import React from 'react';
import styled from 'react-emotion';
import Link from 'gatsby-link';
import { withRouter } from 'react-router';
import {
  MIN_DEFAULT_MEDIA_QUERY,
  DEFAULT_MEDIA_QUERY,
} from 'typography-breakpoint-constants';

import {
  options as typographyOptions,
  rhythm,
  scale,
} from '../utils/typography';
import Hero from './Hero';

const Wrapper = styled.div`
  position: relative;
`;

const MenuToggleButton = styled.button`
  position: fixed;
  top: ${rhythm(1.5)};
  right: ${rhythm(1 / 2)};
  z-index: 11;
  padding: 0;
  border: none;
  background: transparent;
  width: 50px;
  height: 50px;
  text-shadow: 0px 0px 2px black, 0px 2px 1px black;

  ${MIN_DEFAULT_MEDIA_QUERY} {
    display: none;
  }
`;

const Nav = styled.nav`
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(3px);
  z-index: 10;

  ${DEFAULT_MEDIA_QUERY} {
    display: ${props => (props.menuOpen ? 'block' : 'none')};
    bottom: 0;
  }
`;

const NavList = styled.ul`
  list-style-type: none;
  display: flex;
  margin: 0;
  width: 100%;
  justify-content: center;

  ${DEFAULT_MEDIA_QUERY} {
    height: 100%;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: center;
    align-items: center;
  }
`;

const NavItem = styled.li`
  font-family: ${typographyOptions.headerFontFamily.join(`,`)};
  font-weight: ${typographyOptions.bodyWeight};
  text-align: center;
  text-transform: uppercase;
  margin: 3vh 0;

  ${MIN_DEFAULT_MEDIA_QUERY} {
    margin: 1vh 2vh;
  }
`;

const HeadingStyleLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  ${scale(2 / 5)};

  ${MIN_DEFAULT_MEDIA_QUERY} {
    ${scale(1 / 5)};
  }
`;

const HeadingStyleExternalLink = HeadingStyleLink.withComponent('a');

class Navigation extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      menuOpen: false,
    };

    this.toggleMenuBound = this.toggleMenu.bind(this);
    this.onNavigationBound = this.onNavigation.bind(this);
  }

  toggleMenu() {
    this.setState({ menuOpen: !this.state.menuOpen });
  }

  onNavigation() {
    this.setState({ menuOpen: false });
  }

  render() {
    const { navItems } = this.props;
    const currentNavItem = navItems.find(el => {
      return el.uri === this.props.location.pathname;
    });
    const heroImage =
      currentNavItem && currentNavItem.hero
        ? currentNavItem.hero
        : navItems[0].hero;

    return (
      <Wrapper>
        <Nav menuOpen={this.state.menuOpen}>
          <NavList>
            {navItems.map(navItem => (
              <NavItem key={navItem.uri}>
                {navItem.uri.indexOf('http') === 0 ? (
                  <HeadingStyleExternalLink href={navItem.uri}>
                    {navItem.label}
                  </HeadingStyleExternalLink>
                ) : (
                  <HeadingStyleLink
                    onClick={this.onNavigationBound}
                    to={navItem.uri}
                    activeStyle={{
                      textDecoration: 'underline',
                    }}
                    isActive={(match, location) => {
                      if (!match || (match.path === '/' && !match.isExact)) {
                        return false;
                      }
                      return location.pathname.includes(match.path);
                    }}
                  >
                    {navItem.label}
                  </HeadingStyleLink>
                )}
              </NavItem>
            ))}
          </NavList>
        </Nav>
        <Hero imageURI={heroImage} />
        <MenuToggleButton onClick={this.toggleMenuBound}>
          {menuSVG}
        </MenuToggleButton>
        <LogoButton onClick={this.onNavigationBound} to={'/'}>
          logo
        </LogoButton>
      </Wrapper>
    );
  }
}

const menuSVG = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="100%"
    height="100%"
    viewBox="0 0 100 100"
  >
    <filter id="shade">
      <feOffset result="offOut" in="SourceAlpha" dx="0" dy="2" />
      <feGaussianBlur result="blurOut" in="offOut" stdDeviation="2" />
      <feBlend in="SourceGraphic" in2="blurOut" mode="normal" />
    </filter>
    <filter id="dropshadow">
      <feGaussianBlur in="SourceAlpha" stdDeviation="1" result="blur" />
      <feOffset dx="0" dy="2" result="offsetblur" />
      <feOffset dx="0" dy="0" result="offsetblur2" in="blur" />
      <feComponentTransfer result="shadow1" in="offsetblur" />
      <feComponentTransfer result="shadow2" in="offsetblur2" />
      <feMerge>
        <feMergeNode in="shadow1" />
        <feMergeNode in="shadow2" />
        <feMergeNode in="SourceGraphic" />
      </feMerge>
    </filter>
    <g filter="url(#dropshadow)">
      <circle
        style={{
          fill: 'none',
          stroke: '#ffffff',
          strokeWidth: '2.0865',
          strokeMiterlimit: '10',
        }}
        cx="50"
        cy="50"
        r="30.2"
      />
      <path
        style={{
          fill: 'none',
          stroke: '#ffffff',
          strokeWidth: '1.8488',
          strokeMiterlimit: '10',
        }}
        d="M34.7 41.9h31m-31 8h31m-31 7.8h31"
      />
    </g>
  </svg>
);

export default withRouter(Navigation);
