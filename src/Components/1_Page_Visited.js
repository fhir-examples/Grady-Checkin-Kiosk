import React, { Component } from 'react';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';


//This is the first part of the the check-in process - the system will ask the user if they are a repeat patient
class Page_Visited extends Component {

  constructor() {
    super();
    this.state = {
      show: false,
      enter: true
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.show !== this.state.show) {
      this.setState({
        show: nextProps.show
      });
    }
  }

  //NEW PATIENT -> the user will then be brought to the basic information page to fill out
  clickNo() {
    this.setState({
      enter: false
    });
    this.props.clickStep({
      step: 2
    });
  }

  //OLD PATIENT -> the user will have to enter their number so the system can search for them
  clickYes() {
    this.setState({
      enter: false
    });
    this.props.clickStep({
      step: 4
    });
  }

  render() {
    return (
      <div>
      <CSSTransitionGroup
      transitionName={this.props.animation + '-' + this.state.enter}
      transitionEnterTimeout={500}
      transitionLeave={false}>
    {/* ENGLISH VERSION */}
      {this.state.show  && this.props.language==='english' &&
        <div key='1' className='content-welcome'>
          <p className="main center-text"> Have you visited us before?</p>

          <div className='row'>
            <div className='col s6'>
              <a className="waves-effect waves-light btn secondary my-left left" onClick={this.clickNo.bind(this)}>NO</a>
            </div>
            <div className='col s6'>
              <a className="waves-effect waves-light btn primary my-right right" onClick={this.clickYes.bind(this)}>YES</a>
            </div>
          </div>
        </div>
      }

    {/*SPANISH VERSION*/}
      {this.state.show  && this.props.language==='spanish' &&
        <div key='1' className='content-welcome'>
          <p className="main center-text"> ¿Nos has visitado antes?</p>

          <div className='row'>
            <div className='col s6'>
              <a className="waves-effect waves-light btn secondary my-left left" onClick={this.clickNo.bind(this)}>NO</a>
            </div>
            <div className='col s6'>
              <a className="waves-effect waves-light btn primary my-right right" onClick={this.clickYes.bind(this)}>SÍ</a>
            </div>
          </div>
        </div>
      }
      </CSSTransitionGroup>
    </div>
    );
  }
}



export default Page_Visited;
