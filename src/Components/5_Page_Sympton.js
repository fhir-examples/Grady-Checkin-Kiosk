import React, { Component } from 'react';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';



class Page_Sympton extends Component {

  constructor() {
    super();
    this.state = {
      show: false,
      enter: true,
      pregnant_question: false
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.show !== this.state.show) {
      this.setState({
        show: nextProps.show
      });
    }
  }

  clickBack() {
    this.setState({
      enter: true
    });
    this.props.clickStep({
      step: 3
    });
  }

  clickNext() {
    this.setState({
      enter: false
    });
    this.props.clickStep({
      step: 6
    });
  }

  onGenderChange(e) {
    console.log(e.target.id);
    if (e.target.id === 'female') {
      this.setState(prevState => ({
        pregnant_question: true
      }));
    }
    else {
      this.setState(prevState => ({
        pregnant_question: false
      }));
    }
  }


  render() {
    return (
      <div>
      <CSSTransitionGroup
      transitionName={this.props.animation + '-' + this.state.enter}
      transitionEnterTimeout={500}
      transitionLeave={false}>
      {this.state.show &&
      <form key='1'>
        <div className='content-basic-info'>
          <div className='row'>
            <div className="input-field col s6 m9">
              <input id="street_address" type="text" className="validate"/>
              <label htmlFor="street_address">Street Address</label>
            </div>
            <div className="input-field col s6 m3">
              <input id="apt_num" type="text" className="validate"/>
              <label htmlFor="apt_num">Apt #</label>
            </div>
          </div>

          <div className='row'>
            <div className="input-field col s4 m3">
              <input id="zip_code" type="text" className="validate"/>
              <label htmlFor="zip_code">Zip Code</label>
            </div>
            <div className="input-field col s4 m6">
              <input id="city" type="text" className="validate"/>
              <label htmlFor="city">City</label>
            </div>
            <div className="input-field col s4 m3">
              <input id="state" type="text" className="validate"/>
              <label htmlFor="state">State</label>
            </div>
          </div>

          <div className='row'>
            <div className="input-field col s6">
              <input id="phone_num" type="tel" className="validate"/>
              <label htmlFor="phone_num">Phone Number</label>
            </div>
            <div className='col s6'>
              <a className="waves-effect waves-light btn primary phone-button">Confirm</a>
            </div>
          </div>

          <div className='row'>
            <div className="input-field col s6">
              <input id="email" type="email" className="validate"/>
              <label htmlFor="email">Email Address</label>
            </div>
          </div>

          <div className='row'>
            <div className='col s6'>
              <a className="waves-effect waves-light btn secondary left" onClick={this.clickBack.bind(this)}>Back</a>
            </div>
            <div className='col s6'>
              <a className="waves-effect waves-light btn primary right" onClick={this.clickNext.bind(this)}>Next</a>
            </div>
          </div>
        </div>
     </form>
      }
     </CSSTransitionGroup>
     <CSSTransitionGroup
     transitionName='button'
     transitionEnterTimeout={500}
     transitionLeave={false}>
     {this.state.show && false &&
       <a id="scale-demo" href="#!" className="btn-floating btn-large">
         <i className="material-icons">add</i>
       </a>
     }
     </CSSTransitionGroup>
     </div>
    );
  }
}

export default Page_Sympton;
