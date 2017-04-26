import React, { Component } from 'react';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';



class Page_Pregnant extends Component {

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
          <p className="main center-text"> Patients who are pregnant should be seen at <b> Obstetrics and Gynecology </b>. Please report to the registration desk to be transferred.</p>
          <div className='center'>
            <a className="waves-effect waves-light btn secondary primary" onClick={this.clickNo.bind(this)}>Done</a>
          </div>
        </div>
     </div>
      }
      {this.state.show && this.props.language==='spanish' &&
      <div key='1'>
        <div className='content-welcome'>
          <p className="main center-text"> Los pacientes que están embarazadas deben ser vistos en <p> Obstetrics and Gynecology </p>. Por favor, informe a la mesa de registro para ser transferido.</p>
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

export default Page_Pregnant;
