import React from "react"

import { rhythm } from "../utils/typography"

class HomeBlurb extends React.Component {
  render() {
    return (
      <p
        style={{
          marginBottom: rhythm(2.5),
        }}
      >
        My approach is to bring together the science of biomechanics with the joy of movement.
      </p>
    )
  }
}

export default HomeBlurb
