import React from 'react'
import PropTypes from 'prop-types'
import {useState} from 'react'
export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
    <div className="container-fluid">
      <a className="navbar-brand" href="/" style={{color:props.theme}}>{props.title}</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link active" style={{color:props.theme}} aria-current="page" href="/">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" style={{color:props.theme}} href="/">{props.abouttext}</a>
          </li>
          
        </ul>
        <div className="form-check">
  <input className="form-check-input" type="radio"  onClick={() => props.changeTheme('red')} name="flexRadioDefault" id="flexRadioDefault1"  style={{backgroundColor:"red", borderColor:"red"}}/>
</div>
<div className="form-check">
  <input className="form-check-input" type="radio"onClick={() => props.changeTheme('yellow')} name="flexRadioDefault" id="flexRadioDefault1"style={{backgroundColor:"yellow", borderColor:"yellow"}}/>
</div>
<div className="form-check">
  <input className="form-check-input" type="radio" onClick={() => props.changeTheme('blue')}name="flexRadioDefault" id="flexRadioDefault1"style={{backgroundColor:"blue", borderColor:"blue"}}/>
</div>
<div className="form-check">
  <input className="form-check-input" type="radio"onClick={() => props.changeTheme('green')} name="flexRadioDefault" id="flexRadioDefault1"style={{backgroundColor:"green", borderColor:"green"}}/>
</div>
        <div className={`form-check form-switch  text-${props.mode==='light'?'dark':'light'}`}>
  <input className="form-check-input width-2em" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable {props.mode==='light'?'dark':'light'} mode</label>
</div>
      </div>
    </div>
  </nav>
  )
}
Navbar.propTypes={title:PropTypes.string,
                  abouttext:PropTypes.string}
Navbar.defaultProps={
  title:'Set title here',
  abouttext:"set about text"
};