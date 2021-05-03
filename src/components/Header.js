import PropTypes from 'prop-types'
import React from 'react'
import logo from '../images/logo.png'

const Header = props => (
  <header id="header" style={props.timeout ? { display: 'none' } : {}}>
    <div className="logo">
      <img src={logo}/>
    </div>
    <div className="content">
      <div className="inner">
        <h1>Kompas</h1>
        <p>
          Centrum Wyszkolenia Żeglarskiego
          <br />
          Szymon Bilski
        </p>
      </div>
    </div>
    <nav>
      <ul>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('intro')
            }}
          >
            O nas
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('work')
            }}
          >
            Cennik
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('about')
            }}
          >
            Info
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('contact')
            }}
          >
            Kontakt
          </button>
        </li>
      </ul>
    </nav>
  </header>
)

Header.propTypes = {
  onOpenArticle: PropTypes.func,
  timeout: PropTypes.bool,
}

export default Header
