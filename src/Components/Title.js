import React, { Component } from 'react';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';
import ProgressBar from './ProgressBar';



class Title extends Component {

  constructor() {
    super();
    this.state = {
      step: 0
    }
  }

  componentWillReceiveProps(nextProps) {
      this.setState({
        step: nextProps.step
      });
  }

  render() {
    return (
      <CSSTransitionGroup
      transitionName="example"
      transitionEnterTimeout={500}
      transitionLeave={false}>
      {(this.state.step===0 || this.state.step===1) &&
      <div key='1'>
        <h1 className='center-text page-title-1'>Welcome to Grady Hospital!</h1>
     </div>
      }
      {(this.state.step>1 && this.state.step!==4) &&
      <div key='2'>
        <h1 className='center-text page-title-2'>We just need some information... </h1>
        <ProgressBar step={this.state.step}/>
     </div>
      }
      {(this.state.step===4) &&
      <div key='3'>
        <h1 className='center-text page-title-1'>Please enter your phone number: </h1>
      </div>
      }

     </CSSTransitionGroup>
    );
  }
}

export default Title;
