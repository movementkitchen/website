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
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MenuToggleButton = styled.button`
  position: fixed;
  top: ${rhythm(1.5)};
  right: ${rhythm(1 / 2)};
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

const LogoButton = styled(Link)`
  padding: 0;
  border: none;
  background: transparent;
  height: ${rhythm(2)};
  margin: ${rhythm(1.5)} ${rhythm(1)} ${rhythm(1.5)};
  align-self: flex-start;

  & > svg {
    height: 100%;
    width: auto;
  }

  ${MIN_DEFAULT_MEDIA_QUERY} {
    height: ${rhythm(3)};
    margin: ${rhythm(2)};
    align-self: auto;
  }
`;

const Nav = styled.nav`
  display: flex;

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
    margin: 0 2vh ${rhythm(2)};
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
        <LogoButton onClick={this.onNavigationBound} to={'/'}>
          {logoSVG}
        </LogoButton>
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
                      color: typographyOptions.brandColorPrimaryGreen,
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

const logoSVG = (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 678.2 144.2">
    <defs>
      <path id="a" d="M0 0h678.2v144.2H0z" />
    </defs>
    <clipPath id="b">
      <use xlinkHref="#a" overflow="visible" />
    </clipPath>
    <g clipPath="url(#b)">
      <defs>
        <path id="c" d="M3.9 1.1h132.4v139H3.9z" />
      </defs>
      <clipPath id="d">
        <use xlinkHref="#c" overflow="visible" />
      </clipPath>
      <g clipPath="url(#d)">
        <defs>
          <path id="e" d="M3.9 1.1h132.4v139H3.9z" />
        </defs>
        <clipPath id="f">
          <use xlinkHref="#e" overflow="visible" />
        </clipPath>
        <path
          clipPath="url(#f)"
          fill="#ED2A2D"
          d="M134.3 7c1.3 0 2 .7 2 2 0 1.4-.7 2-2 2-1.4 0-2-.6-2-2 0-1.3.6-2 2-2"
        />
        <path
          clipPath="url(#f)"
          fill="#30A599"
          d="M130 13.9c1.4 0 2 .6 2 2 0 1.3-.6 2-2 2-1.3 0-2-.7-2-2 0-1.4.7-2 2-2M126 20.5c1.4 0 2 .6 2 2 0 1.3-.6 2-2 2-1.3 0-2-.7-2-2 0-1.4.7-2 2-2M121.9 27.3c1.3 0 2 .6 2 2 0 1.3-.7 2-2 2-1.4 0-2-.7-2-2 0-1.4.6-2 2-2M117.9 34c1.3 0 2 .7 2 2 0 1.4-.7 2-2 2-1.4 0-2-.6-2-2 0-1.3.6-2 2-2M113.7 40.9c1.3 0 2 .6 2 2 0 1.3-.7 2-2 2-1.4 0-2-.7-2-2 0-1.4.6-2 2-2M109.7 47.5c1.3 0 2 .6 2 2 0 1.3-.7 2-2 2-1.4 0-2-.7-2-2 0-1.4.6-2 2-2M105.5 54.3c1.3 0 2 .6 2 2 0 1.3-.7 2-2 2-1.4 0-2-.7-2-2 0-1.4.6-2 2-2M101.5 61c1.3 0 2 .7 2 2 0 1.4-.7 2-2 2-1.4 0-2-.6-2-2 0-1.3.6-2 2-2M97.3 67.9c1.3 0 2 .6 2 2 0 1.3-.7 2-2 2-1.4 0-2-.7-2-2 0-1.4.6-2 2-2M93.3 74.5c1.3 0 2 .6 2 2s-.7 2-2 2c-1.4 0-2-.7-2-2s.6-2 2-2M89 81.3c1.4 0 2 .6 2 2s-.6 2-2 2c-1.3 0-2-.7-2-2s.7-2 2-2M85 88c1.4 0 2 .7 2 2s-.6 2-2 2c-1.3 0-2-.6-2-2s.7-2 2-2M80.9 94.9c1.3 0 2 .6 2 2s-.7 2-2 2c-1.4 0-2-.7-2-2s.6-2 2-2M76.9 101.5c1.3 0 2 .6 2 2s-.7 2-2 2c-1.4 0-2-.7-2-2s.6-2 2-2M72.7 108.3c1.3 0 2 .6 2 2s-.7 2-2 2c-1.4 0-2-.7-2-2s.6-2 2-2"
        />
        <path
          clipPath="url(#f)"
          fill="#ED2A2D"
          d="M68.5 101.5c1.3 0 2 .6 2 2s-.7 2-2 2c-1.4 0-2-.7-2-2s.6-2 2-2"
        />
        <path
          clipPath="url(#f)"
          fill="#30A599"
          d="M64.5 94.9c1.3 0 2 .6 2 2s-.7 2-2 2c-1.4 0-2-.7-2-2s.6-2 2-2M60.3 88c1.3 0 2 .7 2 2s-.7 2-2 2c-1.4 0-2-.6-2-2s.6-2 2-2M56.3 81.3c1.3 0 2 .6 2 2s-.7 2-2 2c-1.4 0-2-.7-2-2s.6-2 2-2M52 74.5c1.4 0 2 .6 2 2s-.6 2-2 2c-1.3 0-2-.7-2-2s.7-2 2-2M48 67.9c1.4 0 2 .6 2 2 0 1.3-.6 2-2 2-1.3 0-2-.7-2-2 0-1.4.7-2 2-2M43.9 61c1.3 0 2 .7 2 2 0 1.4-.7 2-2 2-1.4 0-2-.6-2-2 0-1.3.6-2 2-2M39.9 54.3c1.3 0 2 .6 2 2 0 1.3-.7 2-2 2-1.4 0-2-.7-2-2 0-1.4.6-2 2-2M35.7 47.5c1.3 0 2 .6 2 2 0 1.3-.7 2-2 2-1.4 0-2-.7-2-2 0-1.4.6-2 2-2M31.7 40.9c1.3 0 2 .6 2 2 0 1.3-.7 2-2 2-1.4 0-2-.7-2-2 0-1.4.6-2 2-2M27.5 34c1.3 0 2 .7 2 2 0 1.4-.7 2-2 2-1.4 0-2-.6-2-2 0-1.3.6-2 2-2M23.5 27.3c1.3 0 2 .6 2 2 0 1.3-.7 2-2 2-1.4 0-2-.7-2-2 0-1.4.6-2 2-2M19.3 20.5c1.3 0 2 .6 2 2 0 1.3-.7 2-2 2-1.4 0-2-.7-2-2 0-1.4.6-2 2-2M15.3 13.9c1.3 0 2 .6 2 2 0 1.3-.7 2-2 2-1.4 0-2-.7-2-2 0-1.4.6-2 2-2M11 7c1.4 0 2 .7 2 2 0 1.4-.6 2-2 2-1.3 0-2-.6-2-2 0-1.3.7-2 2-2"
        />
        <path
          clipPath="url(#f)"
          fill="#ED2A2D"
          d="M5.9 1c1.3 0 2 .7 2 2 0 1.4-.7 2-2 2-1.4 0-2-.6-2-2 0-1.3.6-2 2-2"
        />
        <path
          clipPath="url(#f)"
          fill="#30A599"
          d="M5.9 9c1.3 0 2 .7 2 2 0 1.4-.7 2-2 2-1.4 0-2-.6-2-2 0-1.3.6-2 2-2M5.9 16.7c1.3 0 2 .6 2 2 0 1.3-.7 2-2 2-1.4 0-2-.7-2-2 0-1.4.6-2 2-2M5.9 23.9c1.3 0 2 .6 2 2 0 1.3-.7 2-2 2-1.4 0-2-.7-2-2 0-1.4.6-2 2-2M5.9 31.9c1.3 0 2 .6 2 2 0 1.3-.7 2-2 2-1.4 0-2-.7-2-2 0-1.4.6-2 2-2M5.9 39.7c1.3 0 2 .6 2 2 0 1.3-.7 2-2 2-1.4 0-2-.7-2-2 0-1.4.6-2 2-2M5.9 48.3c1.3 0 2 .6 2 2 0 1.3-.7 2-2 2-1.4 0-2-.7-2-2 0-1.4.6-2 2-2M5.9 56.3c1.3 0 2 .6 2 2 0 1.3-.7 2-2 2-1.4 0-2-.7-2-2 0-1.4.6-2 2-2M5.9 64.3c1.3 0 2 .6 2 2 0 1.3-.7 2-2 2-1.4 0-2-.7-2-2 0-1.4.6-2 2-2M5.9 71.7c1.3 0 2 .6 2 2s-.7 2-2 2c-1.4 0-2-.7-2-2s.6-2 2-2M5.9 79.7c1.3 0 2 .6 2 2s-.7 2-2 2c-1.4 0-2-.7-2-2s.6-2 2-2M5.9 87.7c1.3 0 2 .6 2 2s-.7 2-2 2c-1.4 0-2-.7-2-2s.6-2 2-2M5.9 95.5c1.3 0 2 .6 2 2s-.7 2-2 2c-1.4 0-2-.7-2-2s.6-2 2-2M5.9 103.7c1.3 0 2 .6 2 2s-.7 2-2 2c-1.4 0-2-.7-2-2s.6-2 2-2M5.9 111.9c1.3 0 2 .6 2 2s-.7 2-2 2c-1.4 0-2-.7-2-2s.6-2 2-2M5.9 120c1.3 0 2 .7 2 2s-.7 2-2 2c-1.4 0-2-.6-2-2s.6-2 2-2"
        />
        <path
          clipPath="url(#f)"
          fill="#ED2A2D"
          d="M5.9 128c1.3 0 2 .7 2 2s-.7 2-2 2c-1.4 0-2-.6-2-2s.6-2 2-2"
        />
        <path
          clipPath="url(#f)"
          fill="#30A599"
          d="M5.9 136c1.3 0 2 .7 2 2s-.7 2-2 2c-1.4 0-2-.6-2-2s.6-2 2-2"
        />
      </g>
    </g>
    <g clipPath="url(#b)">
      <defs>
        <path id="g" d="M137.5 1.4h99.4v140.8h-99.4z" />
      </defs>
      <clipPath id="h">
        <use xlinkHref="#g" overflow="visible" />
      </clipPath>
      <g clipPath="url(#h)">
        <defs>
          <path id="i" d="M137.5 1.4h99.4v140.8h-99.4z" />
        </defs>
        <clipPath id="j">
          <use xlinkHref="#i" overflow="visible" />
        </clipPath>
        <path
          clipPath="url(#j)"
          fill="#ED2A2D"
          d="M234.9 138.2c1.3 0 2 .7 2 2 0 1.4-.7 2-2 2s-2-.6-2-2c0-1.3.7-2 2-2"
        />
        <path
          clipPath="url(#j)"
          fill="#30A599"
          d="M230 3.2c1.4 0 2 .7 2 2 0 1.4-.6 2-2 2s-2-.6-2-2c0-1.3.8-2 2-2M229.9 132c1.3 0 2 .7 2 2 0 1.4-.7 2-2 2s-2-.6-2-2c0-1.3.7-2 2-2M225.3 125.8c1.3 0 2 .7 2 2 0 1.4-.7 2-2 2s-2-.6-2-2c0-1.3.7-2 2-2"
        />
        <path
          clipPath="url(#j)"
          fill="#ED2A2D"
          d="M224.5 8.6c1.3 0 2 .7 2 2 0 1.4-.7 2-2 2s-2-.6-2-2c0-1.3.7-2 2-2"
        />
        <path
          clipPath="url(#j)"
          fill="#30A599"
          d="M220.5 119.8c1.3 0 2 .7 2 2 0 1.4-.7 2-2 2s-2-.6-2-2c0-1.3.7-2 2-2M219.3 14.2c1.3 0 2 .7 2 2 0 1.4-.7 2-2 2s-2-.6-2-2c0-1.3.7-2 2-2M215.7 113.8c1.3 0 2 .7 2 2 0 1.4-.7 2-2 2s-2-.6-2-2c0-1.3.7-2 2-2M214 19.6c1.4 0 2 .7 2 2 0 1.4-.6 2-2 2s-2-.6-2-2c0-1.3.8-2 2-2M210.7 107.6c1.3 0 2 .7 2 2 0 1.4-.7 2-2 2s-2-.6-2-2c0-1.3.7-2 2-2M208.5 25c1.3 0 2 .7 2 2 0 1.4-.7 2-2 2s-2-.6-2-2c0-1.3.7-2 2-2M206 101.4c1.4 0 2 .7 2 2 0 1.4-.6 2-2 2s-2-.6-2-2c0-1.3.8-2 2-2M203.3 30.6c1.3 0 2 .7 2 2 0 1.4-.7 2-2 2s-2-.6-2-2c0-1.3.7-2 2-2M201.3 95.4c1.3 0 2 .7 2 2 0 1.4-.7 2-2 2s-2-.6-2-2c0-1.3.7-2 2-2M197.7 36c1.3 0 2 .7 2 2 0 1.4-.7 2-2 2s-2-.6-2-2c0-1.3.7-2 2-2M196.5 89.4c1.3 0 2 .7 2 2 0 1.4-.7 2-2 2s-2-.6-2-2c0-1.3.7-2 2-2M192.5 41.6c1.3 0 2 .7 2 2 0 1.4-.7 2-2 2s-2-.6-2-2c0-1.3.7-2 2-2M191.5 83c1.3 0 2 .7 2 2 0 1.4-.7 2-2 2s-2-.6-2-2c0-1.3.7-2 2-2M187.3 47c1.3 0 2 .7 2 2 0 1.4-.7 2-2 2s-2-.6-2-2c0-1.3.7-2 2-2M186.9 77c1.3 0 2 .7 2 2 0 1.4-.7 2-2 2s-2-.6-2-2c0-1.3.7-2 2-2M182 71.2c1.4 0 2 .7 2 2 0 1.4-.6 2-2 2s-2-.6-2-2c0-1.3.8-2 2-2M181.7 52.4c1.3 0 2 .7 2 2 0 1.4-.7 2-2 2s-2-.6-2-2c0-1.3.7-2 2-2M177.7 65.4c1.3 0 2 .7 2 2 0 1.4-.7 2-2 2s-2-.6-2-2c0-1.3.7-2 2-2M176.5 58c1.3 0 2 .7 2 2 0 1.4-.7 2-2 2s-2-.6-2-2c0-1.3.7-2 2-2"
        />
        <path
          clipPath="url(#j)"
          fill="#ED2A2D"
          d="M171.3 63.6c1.3 0 2 .7 2 2 0 1.4-.7 2-2 2s-2-.6-2-2c0-1.3.7-2 2-2"
        />
        <path
          clipPath="url(#j)"
          fill="#30A599"
          d="M165.7 69c1.3 0 2 .7 2 2 0 1.4-.7 2-2 2s-2-.6-2-2c0-1.3.7-2 2-2M160.5 74.6c1.3 0 2 .7 2 2 0 1.4-.7 2-2 2s-2-.6-2-2c0-1.3.7-2 2-2M155 79.8c1.4 0 2 .7 2 2 0 1.4-.6 2-2 2s-2-.6-2-2c0-1.3.8-2 2-2M149.7 85.4c1.3 0 2 .7 2 2 0 1.4-.7 2-2 2s-2-.6-2-2c0-1.3.7-2 2-2M144.5 91c1.3 0 2 .7 2 2 0 1.4-.7 2-2 2s-2-.6-2-2c0-1.3.7-2 2-2M139.5 1.4c1.3 0 2 .7 2 2 0 1.4-.7 2-2 2s-2-.6-2-2c0-1.3.7-2 2-2M139.5 8.8c1.3 0 2 .7 2 2 0 1.4-.7 2-2 2s-2-.6-2-2c0-1.3.7-2 2-2M139.5 16.4c1.3 0 2 .7 2 2 0 1.4-.7 2-2 2s-2-.6-2-2c0-1.3.7-2 2-2M139.5 23.6c1.3 0 2 .7 2 2 0 1.4-.7 2-2 2s-2-.6-2-2c0-1.3.7-2 2-2M139.5 31.6c1.3 0 2 .7 2 2 0 1.4-.7 2-2 2s-2-.6-2-2c0-1.3.7-2 2-2M139.5 39.4c1.3 0 2 .7 2 2 0 1.4-.7 2-2 2s-2-.6-2-2c0-1.3.7-2 2-2M139.5 48c1.3 0 2 .7 2 2 0 1.4-.7 2-2 2s-2-.6-2-2c0-1.3.7-2 2-2M139.5 56c1.3 0 2 .7 2 2 0 1.4-.7 2-2 2s-2-.6-2-2c0-1.3.7-2 2-2M139.5 64c1.3 0 2 .7 2 2 0 1.4-.7 2-2 2s-2-.6-2-2c0-1.3.7-2 2-2M139.5 71.4c1.3 0 2 .7 2 2 0 1.4-.7 2-2 2s-2-.6-2-2c0-1.3.7-2 2-2M139.5 79.4c1.3 0 2 .7 2 2 0 1.4-.7 2-2 2s-2-.6-2-2c0-1.3.7-2 2-2"
        />
        <path
          clipPath="url(#j)"
          fill="#ED2A2D"
          d="M139.5 87.4c1.3 0 2 .7 2 2 0 1.4-.7 2-2 2s-2-.6-2-2c0-1.3.7-2 2-2"
        />
        <path
          clipPath="url(#j)"
          fill="#30A599"
          d="M139.5 95.2c1.3 0 2 .7 2 2 0 1.4-.7 2-2 2s-2-.6-2-2c0-1.3.7-2 2-2M139.5 103.4c1.3 0 2 .7 2 2 0 1.4-.7 2-2 2s-2-.6-2-2c0-1.3.7-2 2-2M139.5 111.6c1.3 0 2 .7 2 2 0 1.4-.7 2-2 2s-2-.6-2-2c0-1.3.7-2 2-2M139.5 119.8c1.3 0 2 .7 2 2 0 1.4-.7 2-2 2s-2-.6-2-2c0-1.3.7-2 2-2M139.5 127.8c1.3 0 2 .7 2 2 0 1.4-.7 2-2 2s-2-.6-2-2c0-1.3.7-2 2-2M139.5 135.8c1.3 0 2 .7 2 2 0 1.4-.7 2-2 2s-2-.6-2-2c0-1.3.7-2 2-2"
        />
      </g>
    </g>
    <g clipPath="url(#b)">
      <defs>
        <path id="k" d="M252.6 2.8h421.7v140.4H252.6z" />
      </defs>
      <clipPath id="l">
        <use xlinkHref="#k" overflow="visible" />
      </clipPath>
      <g clipPath="url(#l)">
        <defs>
          <path id="m" d="M252.6 2.8h421.7v140.4H252.6z" />
        </defs>
        <clipPath id="n">
          <use xlinkHref="#m" overflow="visible" />
        </clipPath>
        <path
          clipPath="url(#n)"
          fill="#30A599"
          d="M673 59.5l1.3 3.5-1.2.7-2 1-3 .7c-1 .3-2.1.4-3.4.4-1.2 0-2.4-.2-3.5-.6a7.4 7.4 0 0 1-5.5-7.7V23.2h-6.4v-3.6h6.4V3.8h4.4v15.7h10.7V23H660v33.4c0 1.7.6 3 1.8 3.9 1.2.8 2.5 1.2 4 1.2a11 11 0 0 0 4.7-.9 41 41 0 0 0 2.4-1.2M641 39v26.2h-4.4V39.7c0-6-.8-10.2-2.5-13-1.6-2.6-4.3-4-8-4-1.9 0-3.8.4-5.7 1a21.8 21.8 0 0 0-9.6 7.5l-.5.8-2.5-1.6a22 22 0 0 1 19.6-11.7c5 0 8.5 1.7 10.6 5.2 2 3.5 3 8.5 3 15"
        />
        <path
          clipPath="url(#n)"
          fill="#30A599"
          d="M607.8 30.4l2.5 1.6a19 19 0 0 0-2.3 5v28.2h-4.4V19.5h4.2v10.9zM565.7 23.7a17.7 17.7 0 0 0-9.4 9.6c-1 2.2-1.6 4.7-1.8 7.3h36.1a20.8 20.8 0 0 0-5.8-13.2 17.8 17.8 0 0 0-12.3-5.1c-2.4 0-4.7.5-6.8 1.4M556.5 59a24.3 24.3 0 0 1-6.5-16.8 24 24 0 0 1 6.5-16.6 22 22 0 0 1 36.7 7.6c1 2.8 1.6 5.8 1.6 9v2h-40.2a20.3 20.3 0 0 0 11.5 17 16.4 16.4 0 0 0 11.4.7 18.8 18.8 0 0 0 7.8-4.5c1-1.1 1.8-2.3 2.4-3.6l3.9 1c-.7 1.7-1.6 3.2-2.9 4.6a19.7 19.7 0 0 1-9.9 5.9 22.7 22.7 0 0 1-15.1-1 22 22 0 0 1-7.2-5.3M542.7 116v26.2h-4.4v-25.5c0-6-.8-10.2-2.5-13-1.6-2.6-4.3-4-8-4a19.4 19.4 0 0 0-11 4c-1.7 1.4-3.1 2.9-4.3 4.6l-.5.7-2.5-1.6A21.7 21.7 0 0 1 523 96.5c2-.5 4-.8 6-.8 5 0 8.5 1.7 10.6 5.2 2 3.5 3 8.5 3 15"
        />
        <path
          clipPath="url(#n)"
          fill="#30A599"
          d="M509.5 107.4l2.5 1.6a19 19 0 0 0-2.3 4.9v28.3h-4.4V96.5h4.2v10.9zM524.6 22.7c-1.9 0-3.7.4-5.4 1a19 19 0 0 0-9 8.8l-2.1-1.4c4.3-8.3 10.3-12.4 18-12.4 5 0 8.5 1.8 10.6 5.3a29 29 0 0 1 3.2 15v26.2h-4.4V39.7c0-5.8-.9-10-2.6-12.8-1.8-2.8-4.6-4.2-8.3-4.2M495.7 119.2v1l-.1 1h-40.1a20.8 20.8 0 0 0 5.8 13.2 18 18 0 0 0 5.6 3.8 16.5 16.5 0 0 0 11.4.7c1.6-.4 3-1 4.3-1.8 1.3-.7 2.5-1.6 3.5-2.7s1.9-2.3 2.4-3.6l4 1c-.7 1.7-1.7 3.2-3 4.6-1.2 1.4-2.7 2.6-4.3 3.6s-3.6 1.7-5.5 2.3a22.7 22.7 0 0 1-15.2-1 24.5 24.5 0 0 1-13.6-22 24 24 0 0 1 6.4-16.7 21.8 21.8 0 0 1 32 0 23.4 23.4 0 0 1 6.4 16.6m-40.3-1.6h36a21 21 0 0 0-5.7-13.2 18 18 0 0 0-12.4-5.1 17 17 0 0 0-12.3 5.1 18 18 0 0 0-4 5.9c-.9 2.2-1.5 4.7-1.6 7.3"
        />
        <path
          clipPath="url(#n)"
          fill="#30A599"
          d="M483.4 26.7a20.6 20.6 0 0 0-4.2 5.1l-2.4-1.4c2-3.7 4.4-6.6 7.4-8.6s6.5-3.1 10.2-3.1c3.8 0 7 1.1 9.4 3.4 2.4 2.3 3.8 5.3 4.3 9l2.1 1.5c-.7 1.3-1.2 2.8-1.7 4.4v28.2h-4.4V39.7c0-5.8-.9-10.1-2.6-12.9-1.8-2.7-4.5-4-8.2-4a14.1 14.1 0 0 0-10 3.9"
        />
        <path
          clipPath="url(#n)"
          fill="#30A599"
          d="M479.2 31.8c-.9 1.6-1.6 3.3-2.1 5.1v28.3h-4.4V19.5h4.1v10.9l2.4 1.4zM422.7 40.6h36.1a20.8 20.8 0 0 0-5.8-13.2 17.7 17.7 0 0 0-12.3-5.1 17 17 0 0 0-12.4 5.1 18.4 18.4 0 0 0-3.9 5.9 22 22 0 0 0-1.7 7.3m40.3 1.6v2h-40.2a20.5 20.5 0 0 0 11.4 17 16.5 16.5 0 0 0 11.5.7c1.5-.4 3-1 4.3-1.8 1.3-.7 2.4-1.6 3.5-2.7 1-1.1 1.8-2.3 2.4-3.6l3.9 1c-.7 1.7-1.6 3.2-2.9 4.6a22.4 22.4 0 0 1-16 6.7 21.2 21.2 0 0 1-16.2-7 24.5 24.5 0 0 1-6.5-17 24.3 24.3 0 0 1 6.5-16.5 21.8 21.8 0 0 1 32 0 23.4 23.4 0 0 1 6.3 16.6M415.3 19.5l-19.1 45.7h-4.6l-19-45.7h4.5L394 60.8l17-41.3zM415.4 103.8a21.7 21.7 0 0 0-4.6 5.2l-2.2-1.6c2-3.6 4.5-6.4 7.8-8.5 3.3-2.2 6.9-3.2 10.7-3.2a12.3 12.3 0 0 1 11 5.5c1.3 1.7 2.1 3.8 2.7 6.3.6 2.5.8 5.3.8 8.4v26.3h-4.4v-25.5c0-11.3-3.7-17-11.3-17-1.9 0-3.7.4-5.5 1-1.8.8-3.5 1.8-5 3"
        />
        <path
          clipPath="url(#n)"
          fill="#30A599"
          d="M408.6 107.4l2.2 1.6c-1 1.5-1.6 3.2-2.2 4.9v28.3h-4.4V78h4.4v29.4zM368 33.3a24.6 24.6 0 0 1 0 18.2 24.6 24.6 0 0 1-4.8 7.6 22.2 22.2 0 0 1-15.9 7 22.2 22.2 0 0 1-20.7-14.6 25 25 0 0 1 4.8-25.8 22.2 22.2 0 0 1 15.9-7c3.2 0 6.1.6 8.8 1.9a22.7 22.7 0 0 1 11.8 12.7m-2.7 9a20.8 20.8 0 0 0-5.3-13.8 19 19 0 0 0-5.7-4.3 15.5 15.5 0 0 0-13.9 0c-2.1 1-4 2.5-5.6 4.3a21.6 21.6 0 0 0-5.3 14.1 20.5 20.5 0 0 0 5.2 13.8c1.6 1.8 3.5 3.2 5.7 4.2a16.2 16.2 0 0 0 13.9 0c2.1-1 4-2.4 5.7-4.2a20.6 20.6 0 0 0 5.3-14M359.6 136a24.6 24.6 0 0 1-6.5-16.8 25 25 0 0 1 6.3-16.6 22 22 0 0 1 16.2-7c4.2 0 7.9 1 11 2.9 3.2 1.9 5.6 4.5 7.2 7.8l-4.3 1.4a14.8 14.8 0 0 0-5.8-5.9 16.2 16.2 0 0 0-8.2-2.2c-2.6 0-5 .5-7 1.5s-4.1 2.4-5.8 4.2a20 20 0 0 0-5.2 13.9 20.8 20.8 0 0 0 5.3 14.1c1.6 1.8 3.6 3.2 5.8 4.3a15.9 15.9 0 0 0 11.7.9c1.5-.5 3-1.1 4.3-1.9a15 15 0 0 0 3.4-2.7c1-1 1.6-2 2-3.2l4.3 1.2c-.6 1.6-1.5 3.1-2.7 4.5a18.3 18.3 0 0 1-4.3 3.6 21.7 21.7 0 0 1-11.6 3.1 22.2 22.2 0 0 1-16.2-7M347.2 136.5l1.3 3.5-1.2.7-2 1-3 .7c-1 .3-2.1.4-3.4.4-1.2 0-2.3-.2-3.4-.6a7.4 7.4 0 0 1-4.8-4.1c-.5-1-.7-2.2-.7-3.5V100h-6.5v-3.6h6.5V80.8h4.4v15.7H345v3.6h-10.6v33.4c0 1.7.6 3 1.7 3.9 1.2.8 2.5 1.2 4 1.2a11 11 0 0 0 4.7-.9l2.4-1.2M313.7 2.8v62.4h-4.5v-54l-24.6 42.2h-2.9l-24.6-42.2v54h-4.5V2.8h4.5l26.1 44.7 26-44.7zM309.1 96.5h4.4v45.8h-4.4zM272.8 107.1l27.2 35.1h-5.1l-25-32.3-12.8 13.1v19.2h-4.5V79.8h4.5v37.9l36.4-37.9h5.2z"
        />
      </g>
    </g>
    <path
      clipPath="url(#b)"
      fill="#ED2A2D"
      d="M314.5 87.7a3.3 3.3 0 1 1-6.6 0 3.3 3.3 0 0 1 6.6 0"
    />
  </svg>
);

export default withRouter(Navigation);
