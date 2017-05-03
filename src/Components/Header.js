import React, { Component } from 'react';

//This is the header component that you see on each page.
//This contains the Grady hospital logo as well as the language change.
class Header extends Component {

  constructor() {
    super();
    this.state = {
      showFlags: true
    }
  }

  componentWillReceiveProps() {
    this.setState({
      showFlags:this.props.showFlags
    })
  }

  handleLanguageChange(e) {
    this.props.handleLanguageChange(e.target.name);
  }

  render() {
    return (




      <nav className='header header-position'>
      <div className='nav-wrapper'>
        <div className='row'>
          <div className='col s6'>
            <img className = 'logo' src={require('../img/logo.png')}></img>
          </div>

          <div className='col s6 rigt'>
            <a className='dropdown-button btn red lighten-1 right my-right' href='#' data-activates='dropdown1'>Language</a>
          </div>
        </div>

      </div>

        <ul id='dropdown1' className='dropdown-content'>
          <li><a href="#!" className='red-text text-lighten-1' name="english" onClick={this.handleLanguageChange.bind(this)}>English</a></li>
          <li className="divider"></li>
          <li><a href="#!" className='red-text text-lighten-1' name="spanish" onClick={this.handleLanguageChange.bind(this)}>Spanish</a></li>
          <li className="divider"></li>
          <li><a href="#!" className='red-text text-lighten-1' >Arabic</a></li>
        </ul>

      </nav>


      );
  }
}

export default Header;
