import React, { Component } from 'react';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';



class Page_Misc extends Component {

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
      step: 5
    });
  }

  clickNext() {
    this.setState({
      enter: false
    });
    this.props.clickStep({
      step: 7
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
        <div className='row'>
          <div className='col s12'>
            <div className='row'>
              <div className='col s12'>
                Have yout traveled outside of the country in the last 30 days?
              </div>
            </div>
            <div className='row'>
              <div className='col s12 m5'>
                <div className='col s4 m4'>
                  <input className="with-gap" name="traveled" type="radio" id="1" />
                  <label htmlFor="1">Yes</label>
                </div>
                <div className='col s4 m4'>
                  <input className="with-gap" name="traveled" type="radio" id="2" />
                  <label htmlFor="2">No</label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col s12 m5'>
            <div className='row'>
              <div className='col s12'>
                Would you like a HIV test today?
              </div>
            </div>
            <div className='row'>
              <div className='col s12'>
                <div className='col s4 m4'>
                  <input className="with-gap" name="hiv" type="radio" id="3" />
                  <label htmlFor="3">Yes</label>
                </div>
                <div className='col s4 m4'>
                  <input className="with-gap" name="hiv" type="radio" id="4" />
                  <label htmlFor="4">No</label>
                </div>
              </div>
            </div>
          </div>
          <div className='col s2'> </div>
          <div className='col s12 m5'>
            <div className='row'>
              <div className='col s12'>
                Are you up-to-date on your vaccinations?
              </div>
            </div>
            <div className='row'>
              <div className='col s12'>
                <div className='col s4 m4'>
                  <input className="with-gap" name="vaccinations" type="radio" id="5" />
                  <label htmlFor="5">Yes</label>
                </div>
                <div className='col s4 m4'>
                  <input className="with-gap" name="vaccinations" type="radio" id="6" />
                  <label htmlFor="6">No</label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col s12 m5'>
            <div className='row'>
              <div className='col s12'>
                Have you been abused?
              </div>
            </div>
            <div className='row'>
              <div className='col s12'>
                <div className='col s4 m4'>
                  <input className="with-gap" name="abused" type="radio" id="7" />
                  <label htmlFor="7">Yes</label>
                </div>
                <div className='col s4 m4'>
                  <input className="with-gap" name="abused" type="radio" id="8" />
                  <label htmlFor="8">No</label>
                </div>
              </div>
            </div>
          </div>
          <div className='col s2'> </div>
          <div className='col s12 m5'>
            <div className='row'>
              <div className='col s12'>
                Do you have a primary care doctor?
              </div>
            </div>
            <div className='row'>
              <div className='col s12'>
                <div className='col s4 m4'>
                  <input className="with-gap" name="pcd" type="radio" id="9" />
                  <label htmlFor="9">Yes</label>
                </div>
                <div className='col s4 m4'>
                  <input className="with-gap" name="pcd" type="radio" id="10" />
                  <label htmlFor="10">No</label>
                </div>
              </div>
            </div>
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

export default Page_Misc;
