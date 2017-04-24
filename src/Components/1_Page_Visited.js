import React, { Component } from 'react';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';



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

  clickNo() {
    this.setState({
      enter: false
    });
    this.props.clickStep({
      step: 2
    });
  }

  clickYes() {
    this.setState({
      enter: false
    });
    this.props.clickStep({
      step: 4
    });
  }

  render() {
    console.log("enter is");
    console.log(this.state.enter);
    return (
      <div>
      <CSSTransitionGroup
      transitionName={this.props.animation + '-' + this.state.enter}
      transitionEnterTimeout={500}
      transitionLeave={false}>
      {this.state.show  &&
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
      </CSSTransitionGroup>
    </div>
    );
  }
}



export default Page_Visited;
