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

  clickNext() {
    this.setState({
      enter: false
    });
    this.props.clickNext();
  }

  componentWillReceiveProps(nextProps) {
      this.setState(prevState => ({
        show: nextProps.show
      }));
  }

  render() {
    console.log("now the state.show is");
    console.log(this.state.show);
    return (
      <CSSTransitionGroup
      transitionName={"example" + this.state.enter}
      transitionEnterTimeout={1000}
      transitionLeave={false}>
      {this.state.show &&
      <div key='1'>
        <div className='container content-welcome'>
          <h1 className='center-text'>0 Welcome to Grady Hospital!</h1>
          <p className="info center-text"> Our Grady Walk-In Clinic provides care for non-life threatening conditions.</p>
          <p className="main center-text"> Would you like to be seen at the Grady Walk-In Clinic?</p>

          <div className='row'>
            <div className='col s6'>
              <a className="waves-effect waves-light btn secondary left" onClick={this.clickNext.bind(this)}>NO</a>
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
