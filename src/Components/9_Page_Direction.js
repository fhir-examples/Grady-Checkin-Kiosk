import React, { Component } from 'react';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';


//This page will give the user directions to the Walk-In Clinic.
//From the welcome page, if the user selects 'YES', they will be directed to this page.
class Page_Direction extends Component {

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
          <p className="main center-text"> Exit out of the Emergency Department. Walk towards the Steiner Building. Once past the Steiner Building, you will see the clinic on the right.</p>
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
          <p className="main center-text">
Salga del Departamento de Emergencias. Camine hacia el edificio Steiner. Una vez pasado el edificio Steiner, verá la clínica a la derecha.</p>
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

export default Page_Direction;
