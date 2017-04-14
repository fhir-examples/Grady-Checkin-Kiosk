import React, { Component } from 'react';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';



class Page_Basic_Info extends Component {

  constructor() {
    super();
    this.state = {
      show: false
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      show: nextProps.show
    })
  }

  render() {
    return (
      <CSSTransitionGroup
      transitionName="example"
      transitionEnterTimeout={1000}
      transitionLeave={false}>
      {this.state.show &&
      <div key='1'>
        <div className='container content-welcome'>
          <h1 className='center-text'>2 We just need some information...</h1>

          <div className='row'>
            <div className='col s6'>
              <a className="waves-effect waves-light btn secondary left">NO</a>
            </div>
            <div className='col s6'>
              <a className="waves-effect waves-light btn primary right" onClick={this.props.clickBack}>YES</a>
            </div>
          </div>
        </div>
     </div>
      }
     </CSSTransitionGroup>
    );
  }
}

export default Page_Basic_Info;
