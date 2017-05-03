import React, { Component } from 'react';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';

//This is the last page once the user has finished entering in all their information.
//It will instruct them to go wait in the waiting area.
//Once the user clicks "Done", the screen will go back to the welcome page.
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
    {/*ENGLISH version*/}
      {this.state.show && this.props.language==='english' &&
      <div key='1'>
        <div className='content-welcome'>
          <p className="main center-text"> You have been added into the queue. Please wait at the waiting area.</p>
          <div className='center'>
            <a className="waves-effect waves-light btn secondary primary" onClick={this.clickNo.bind(this)}>Done</a>
          </div>
        </div>
     </div>
      }
    {/*SPANISH version*/}
      {this.state.show && this.props.language==='spanish' &&
      <div key='1'>
        <div className='content-welcome'>
          <p className="main center-text"> Se ha agregado a la cola. Espere por favor en la sala de espera.</p>
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
