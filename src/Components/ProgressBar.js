import React, { Component } from 'react';

//This is the progress bar component that you see at the top of each page.
//As the user is filling in more information, the progress bar will continue to fill up.
class ProgressBar extends Component {
  constructor() {
    super();
    this.state = {
      current: 0,
      total: 8,
      show: false
    }
  }


  render() {
    return (
      <div className='row'>
        <div className='col s12'>
        <i className="material-icons progress-icon" style={{color: '#EF5350',transition: 'left .3s linear',position: 'relative', left: 'calc(' + this.props.step/this.state.total * 100 + '% - 15px)'}}>location_on</i>
        <div className="progress progress-background">
          <div className="progress-solid determinate" style={{width: this.props.step/this.state.total * 100 + '%'}}></div>
        </div>
        </div>
      </div>
    );
  }
}

export default ProgressBar;
