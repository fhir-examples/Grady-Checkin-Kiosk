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
      <div className='header'></div>
    );
  }
}

export default Header;
