import React from "react"
import Navbar from "./navbar"

const Hero = () => (
  <section className="hero is-info is-medium is-bold">
    <div className="hero-head">
      <Navbar />
    </div>
    <div className="hero-body">
      <div className="container has-text-centered">
        <h1 className="title">
          The new standard in &lt;insert industry here&gt;
        </h1>
        <h2 className="subtitle">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </h2>
      </div>
    </div>
  </section>
)
export default Hero
