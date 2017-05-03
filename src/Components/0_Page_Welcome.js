import React, { Component } from 'react';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';

//this is the first page that the user sees when they approach the kiosk.
//this page will direct them to the Check-In Clinic if needed.
class Page_Welcome extends Component {

  //'enter' -> if the check-in process has started
  //'show' -> display the process
  constructor() {
    super();
    this.state = {
      show: true,
      enter: false
    }
  }

  //User DOES NOT want to go to the check-in clinic
  clickNo() {
    this.setState({
      enter: false
    });
    this.props.clickStep({
      step: 1
    });
  }

  //User wants to go to the check-in clinic -> bring them to last page
  clickYes() {
    this.setState({
      enter: true
    });
    this.props.clickStep({
      step: 9
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

      {/*English section*/}
      {this.state.show && this.props.language==='english' &&
      <div key='1'>
        <div className='content-welcome'>
          <p className="info center-text"> Our Grady Walk-In Clinic provides care for non-life threatening conditions.</p>
          <p className="main center-text"> Would you like to be seen at the Grady Walk-In Clinic?</p>
          <div className='row'>
            <div className='col s6'>
              <a className="waves-effect waves-light btn secondary  my-left left" onClick={this.clickNo.bind(this)}>NO</a>
            </div>
            <div className='col s6'>
              <a className="waves-effect waves-light btn primary my-right right" onClick={this.clickYes.bind(this)}>YES</a>
            </div>
          </div>
        </div>
     </div>
      }

      {/*Spanish version*/}
      {this.state.show &&  this.props.language==='spanish' &&
      <div key='1'>
        <div className='content-welcome'>
          <p className="info center-text"> Nuestra Clínica Grady Walk-In provee cuidado para condiciones que no amenazan la vida.</p>
          <p className="main center-text"> ¿Te gustaría ser vista en la Clínica Grady Walk-In?</p>
          <div className='row'>
            <div className='col s6'>
              <a className="waves-effect waves-light btn secondary  my-left left" onClick={this.clickNo.bind(this)}>NO</a>
            </div>
            <div className='col s6'>
              <a className="waves-effect waves-light btn primary my-right right" onClick={this.clickYes.bind(this)}>SÍ</a>
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
