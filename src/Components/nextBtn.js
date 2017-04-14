import React, { Component } from 'react';


class ProgressBar extends Component {
  constructor() {
    super();
    this.state = {
      current: 0,
      total: 8
    }
  }
  render() {
    return (
      <a className="btn-floating btn-large waves-effect waves-light red"><i className="material-icons">add</i></a>
    );
  }
}

export default ProgressBar;
