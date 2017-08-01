import React from "react"

import { rhythm } from "../utils/typography"

class Instagram extends React.Component {
  render() {
    return (
      <div
        style={{
          marginBottom: rhythm(2.5),
        }}
      >
        For (more or less) daily inspiration, check out my feed on <a href="https://www.instagram.com/ivana_demmel/">Instagram</a>.
      </div>
    )
  }
}

export default Instagram
