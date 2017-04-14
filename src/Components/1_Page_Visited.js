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
      this.setState(prevState => ({
        show: nextProps.show
      }));
  }

  clickNext() {
    this.setState({
      enter: false
    });
    this.props.clickNext();
  }

  clickBack() {
    this.setState({
      enter: true
    });
    this.props.clickBack();
  }

  render() {
    console.log("enter is");
    console.log(this.state.enter);
    return (
      <div>
      <CSSTransitionGroup
      transitionName={"example"+this.state.enter}
      transitionEnterTimeout={1000}
      transitionLeave={false}>
      {this.state.show  &&
        <div key='1' className='container content-welcome'>
          <h1 className='center-text'>1 Welcome to Grady Hospital!</h1>
          <p className="main center-text"> Have you visited us before?</p>

          <div className='row'>
            <div className='col s6'>
              <a className="waves-effect waves-light btn secondary left" onClick={this.clickNext.bind(this)}>NO</a>
            </div>
            <div className='col s6'>
              <a className="waves-effect waves-light btn primary right" onClick={this.clickBack.bind(this)}>YES</a>
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
