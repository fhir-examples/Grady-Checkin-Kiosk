import React, { Component } from 'react';


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

  render() {
    return (
      // <div className='container'>
      // <div className='header valign-wrapper'>


      // <img className = 'logo' src={require('../img/logo.png')}></img>
      // <h5>&emsp;Check-In Kiosk</h5>



      // 


      // <ul id='dropdown1' className='dropdown-content'>
      //   <li><a href="#!" className='red-text text-lighten-1'>English</a></li>
      //   <li className="divider"></li>
      //   <li><a href="#!" className='red-text text-lighten-1'>Spanish</a></li>
      //   <li className="divider"></li>
      //   <li><a href="#!" className='red-text text-lighten-1'>Arabic</a></li>
      // </ul>


      // </div>
      // </div>



      <nav className='header'>
      <div className='container nav-wrapper'>
        <img className = 'logo' src={require('../img/logo.png')}></img>

        <ul className='right'>
          <li><a className='dropdown-button btn red lighten-1' href='#' data-activates='dropdown1'>Language</a></li>
        </ul>

      </div>

        <ul id='dropdown1' className='dropdown-content'>
          <li><a href="#!" className='red-text text-lighten-1'>English</a></li>
          <li className="divider"></li>
          <li><a href="#!" className='red-text text-lighten-1'>Spanish</a></li>
          <li className="divider"></li>
          <li><a href="#!" className='red-text text-lighten-1'>Arabic</a></li>
        </ul>

      </nav>


      );
  }
}

export default Header;
