import React from "react"

import profilePic from "./profile-pic.jpg"
import { rhythm } from "../utils/typography"

class Bio extends React.Component {
  render() {
    return (
      <p
        style={{
          marginBottom: rhythm(2.5),
        }}
      >
        <img
          src={profilePic}
          alt={`Kyle Mathews`}
          style={{
            float: "left",
            marginRight: rhythm(1 / 4),
            marginBottom: 0,
            marginTop: '0.15rem',
            width: rhythm(2.7),
            height: rhythm(2.7),
          }}
        />
        I’m a movement teacher, biomechanics geek and a mum to two energetic little people. My background brings together yoga as therapy, somatics and movement science. I am currently in the final weeks of my RES Certification with Nutritious Movement, focused on working with injuries and restoring functional strength. I am passionate about working with new mums and mums to be and people with chronic pain.
      </p>
    )
  }
}

export default Bio
