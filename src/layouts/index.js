import React from "react"
import Link from "gatsby-link"

import Navigation from "../components/Navigation"
import Footer from "../components/Footer"
import { rhythm, scale } from "../utils/typography"

class Template extends React.Component {
  render() {
    const { location, children } = this.props
    
    return (
      <div>
        <Navigation />
        {children()}
        <Footer />
      </div>
    )
  }
}

Template.propTypes = {
  children: React.PropTypes.function,
  location: React.PropTypes.object,
  route: React.PropTypes.object,
}

export default Template
