import React, { Component } from 'react';


class ProgressBar extends Component {
  constructor() {
    super();
    this.state = {
      current: 0,
      total: 8,
      show: false
    }
  }

  componentWillReceiveProps() {
    this.setState({
      show:this.props.show
    })
  }

  render() {
    return (

        this.state.show &&
        <div className="progress">
          <div className="determinate" style={{width: this.props.step/this.state.total * 100 + '%'}}></div>
        </div>
      
    );
  }
}

export default ProgressBar;
