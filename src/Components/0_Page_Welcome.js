import React, { Component } from 'react';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';



class Page_Welcome extends Component {

  constructor() {
    super();
    this.state = {
      show: true,
      enter: false
    }
  }

  clickNo() {
    this.setState({
      enter: false
    });
    this.props.clickStep({
      step: 1
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
    console.log("now the state.show is");
    console.log(this.props.animation);
    return (
      <CSSTransitionGroup
      transitionName={this.props.animation + '-' + this.state.enter}
      transitionEnterTimeout={500}
      transitionLeave={false}>
      {this.state.show &&
      <div key='1'>
        <div className='content-welcome'>
          <p className="info center-text"> Our Grady Walk-In Clinic provides care for non-life threatening conditions.</p>
          <p className="main center-text"> Would you like to be seen at the Grady Walk-In Clinic?</p>
          <div className='row'>
            <div className='col s6'>
              <a className="waves-effect waves-light btn secondary left" onClick={this.clickNo.bind(this)}>NO</a>
            </div>
            <div className='col s6'>
              <a className="waves-effect waves-light btn primary right">YES</a>
            </div>
          </div>
        </div>
     </div>
      }
     </CSSTransitionGroup>
    );
  }
}

export default Page_Welcome;
