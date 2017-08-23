import React from "react"
import styled from "styled-components"
import Link from "gatsby-link"
import get from "lodash/get"
import { withRouter } from 'react-router'

import { options as typographyOptions, rhythm, scale } from "../utils/typography"
import Hero from "./Hero"

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
`

const Nav = styled.nav`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(255,255,255,0.9);
  z-index: 10;
`

const NavList = styled.ul`
  list-style-type: none;
  width: 100%;
  height: 100%;
  margin-left: 0;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`

const NavItem = styled.li`
  font-family: ${typographyOptions.headerFontFamily.join(`,`)};
  text-align: center;
  margin: 3vh 0;
`

const HeadingStyleLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  ${scale(4 / 5)};
`

const Logo = styled.h1`
  position: absolute;
  top: ${rhythm(1.5)};
  left: ${rhythm(1 / 2)};
  color: white;
  text-shadow: 0px 0px 2px black, 0px 2px 1px black;
`

const HeadingStyleExternalLink = HeadingStyleLink.withComponent('a')

class Navigation extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      menuOpen: false
    }
    
    this.toggleMenuBound = this.toggleMenu.bind(this);
    this.onNavigationBound = this.onNavigation.bind(this);
  }
  
  toggleMenu() {
    this.setState({menuOpen: !this.state.menuOpen });
  }

  onNavigation() {
    this.setState({menuOpen: false });
  }
  
  render() {
    // TODO: find out how to make the GraphQL query with this component
    // const navItems = get(this, "props.data.site.siteMetadata.navigation");
    const navItems = [
      {
        uri: "/",
        label: "Home",
        hero: "/walking_on_a_branch.jpg"
      },
      {
        uri: "/about/",
        label: "About"
      },
      {
        uri: "/movement-coaching/",
        label: "Movement coaching"
      },
      {
        uri: "/courses-workshops/",
        label: "Courses and workshops"
      },
      {
        uri: "https://medium.com/@zzuuu",
        label: "Blog"
      },
      // {
      //   uri: "/resources/",
      //   label: "Resources"
      // },
    ];
    const nav = (
      <Nav>
        <NavList>
          {
            navItems.map(navItem => (
              <NavItem key={navItem.uri}>
                {
                  navItem.uri.indexOf('http') === 0 ?
                  <HeadingStyleExternalLink
                    href={navItem.uri}
                  >
                    {navItem.label}
                  </HeadingStyleExternalLink>
                  :
                  <HeadingStyleLink
                    onClick={this.onNavigationBound}
                    to={navItem.uri}
                    activeStyle={{
                      textDecoration: 'dashed underline'
                    }}
                    exact
                  >
                    {navItem.label}
                  </HeadingStyleLink>
                }
                
              </NavItem>
            ))
          }
        </NavList>
      </Nav>
    );
    const currentNavItem = navItems.find(el => el.uri === this.props.location.pathname) || navItems[0];
    const heroImage = currentNavItem.hero;
    
    return (
      <div
        style={{
          marginBottom: rhythm(1.5),
          position: 'relative'
        }}
      >
        <Hero imageURI={heroImage} />
        <Logo>
          <HeadingStyleLink to={"/"}>Movement Kitchen</HeadingStyleLink>
        </Logo>
        <MenuToggleButton onClick={this.toggleMenuBound}>
          <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 100 100">
            <filter id="shade">
              <feOffset result="offOut" in="SourceAlpha" dx="0" dy="2"/>
              <feGaussianBlur result="blurOut" in="offOut" stdDeviation="2"/>
              <feBlend in="SourceGraphic" in2="blurOut" mode="normal"/>
            </filter>
            <filter id="dropshadow">
              <feGaussianBlur in="SourceAlpha" stdDeviation="1" result="blur"/> 
              <feOffset dx="0" dy="2" result="offsetblur"/>
              <feOffset dx="0" dy="0" result="offsetblur2" in="blur"/>
              <feComponentTransfer result="shadow1" in="offsetblur"/>
              <feComponentTransfer result="shadow2" in="offsetblur2"/>
              <feMerge> 
                <feMergeNode in="shadow1"/>
                <feMergeNode in="shadow2"/>
                <feMergeNode in="SourceGraphic"/> 
              </feMerge>
             </filter>
            <g filter="url(#dropshadow)">
              <circle style={{fill:"none",stroke:"#ffffff",strokeWidth:"2.0865",strokeMiterlimit:"10"}} cx="50" cy="50" r="30.2"/>
              <path style={{fill:"none",stroke:"#ffffff",strokeWidth:"1.8488",strokeMiterlimit:"10"}} d="M34.7 41.9h31m-31 8h31m-31 7.8h31"/>
            </g>
          </svg>
        </MenuToggleButton>
        {this.state.menuOpen && nav}
      </div>
    )
  }
}

export default withRouter(Navigation)

export const pageQuery = graphql`
  query NavigationQuery {
    site {
      siteMetadata {
        navigation {
          uri
          label
        }
      }
    }
  }
`