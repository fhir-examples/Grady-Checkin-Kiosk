import React, { Component } from 'react';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';



class Page_Finish extends Component {

  constructor() {
    super();
    this.state = {
      show: false,
      enter: true
    }
  }

  clickNo() {
    this.setState({
      enter: false
    });
    this.props.clickStep({
      step: 0
    });
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.show !== this.state.show) {
      this.setState({
        show: nextProps.show
      });
    }
  }

  render() {
    return (
      <CSSTransitionGroup
      transitionName={this.props.animation + '-' + this.state.enter}
      transitionEnterTimeout={500}
      transitionLeave={false}>
      {this.state.show && this.props.language==='english' &&
      <div key='1'>
        <div className='content-welcome'>
          <p className="main center-text"> Done!</p>
          <div className='center'>
            <a className="waves-effect waves-light btn secondary primary" onClick={this.clickNo.bind(this)}>Done</a>
          </div>
        </div>
     </div>
      }
      {this.state.show && this.props.language==='spanish' &&
      <div key='1'>
        <div className='content-welcome'>
          <p className="main center-text"> Hecho!</p>
          <div className='center'>
            <a className="waves-effect waves-light btn secondary primary" onClick={this.clickNo.bind(this)}>Hecho</a>
          </div>
        </div>
     </div>
      }
     </CSSTransitionGroup>
    );
  }
}

export default Page_Finish;
