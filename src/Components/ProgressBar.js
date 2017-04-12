import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';


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
      <div className="progress-bar">
        This is a progress bar!
        At present, we are at {this.state.current} out of {this.state.total}.
      </div>
    );
  }
}

export default ProgressBar;
