import React from "react"

const Navbar = () => (
  <nav className="navbar">
    <div className="container">
      <div className="navbar-brand">
        <a className="navbar-item" href="../">
          <img src="http://bulma.io/images/bulma-type-white.png" alt="Logo" />
        </a>
        <span className="navbar-burger burger" data-target="navbarMenu">
          <span />
          <span />
          <span />
        </span>
      </div>
      <div id="navbarMenu" className="navbar-menu">
        <div className="navbar-end">
          <div className="tabs is-right">
            <ul>
              <li className="is-active">
                <a>Home</a>
              </li>
              <li>
                <a href>Examples</a>
              </li>
              <li>
                <a href>Features</a>
              </li>
              <li>
                <a href>Team</a>
              </li>
              <li>
                <a href>Help</a>
              </li>
            </ul>
            <span className="navbar-item">
              <a
                className="button is-white is-outlined"
                href="https://github.com/BulmaTemplates/bulma-templates/blob/master/templates/hero.html"
              >
                <span className="icon">
                  <i className="fa fa-github" />
                </span>
                <span title="Hello from the other side">View Source</span>
              </a>
            </span>
          </div>
        </div>
      </div>
    </div>
  </nav>
)
export default Navbar
