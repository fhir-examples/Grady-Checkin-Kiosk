import React, { Component } from 'react';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';



class Page_Basic_Info extends Component {

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
      step: 1
    });
  }

  clickNext() {
    this.setState({
      enter: false
    });
    this.props.clickStep({
      step: 3
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
            <div className='col s12 m5'>
              <div className='row'>
                <div className="input-field col s12">
                  <input id="first_name" type="text" className="validate"/>
                  <label htmlFor="first_name">First Name</label>
                </div>

                <div className="input-field col s12">
                  <input id="last_name" type="text" className="validate"/>
                  <label htmlFor="last_name">Last Name</label>
                </div>
              </div>
            </div>
            <div className='col s2'> </div>
            <div className='col s12 m5'>
              <div className='row'>
                <div className="input-field col s12">
                  <input id="date_of_birth" type="text" className="validate"/>
                  <label htmlFor="date_of_birth">Date of Birth</label>
                </div>
              </div>
            </div>
          </div>

          <div className='row'>
            <div className='col s12 m5'>
              <div className='row'>
                <div className='col s12'>
                    Biological Gender
                </div>
                  <div className='col s12 m4'>
                    <input className="with-gap" name="biological_gender" type="radio" id="test1" />
                    <label htmlFor="test1">Male</label>
                  </div>
                  <div className='col s12 m4'>
                    <input className="with-gap" name="biological_gender" type="radio" id="test2" />
                  <label htmlFor="test2">Female</label>
                  </div>
                  <div className='col s12 m4'>
                    <input className="with-gap" name="biological_gender" type="radio" id="test3"  />
                    <label htmlFor="test3">Unspecified</label>
                  </div>
              </div>
            </div>
            <div className='col s2'></div>
            <div className='col s12 m5'>
              <div className='row'>
                <div className='col s12'>
                    Preferred Gender
                </div>
                  <div className='col s12 m4'>
                    <input className="with-gap" name="preferred_gender" type="radio" id="male" onChange={this.onGenderChange.bind(this)} />
                    <label htmlFor="male">Male</label>
                  </div>
                  <div className='col s12 m4'>
                    <input className="with-gap" name="preferred_gender" type="radio" id="female" onChange={this.onGenderChange.bind(this)} />
                  <label htmlFor="female">Female</label>
                  </div>
                  <div className='col s12 m4'>
                    <input className="with-gap" name="preferred_gender" type="radio" id="unspecified"  onChange={this.onGenderChange.bind(this)}/>
                    <label htmlFor="unspecified">Unspecified</label>
                  </div>
              </div>

              { this.state.pregnant_question &&
              <div className='row'>
                <div className='col s12'>
                    Are you pregnant?
                </div>
                  <div className='col s12 m4'>
                    <input className="with-gap" name="pregnant" type="radio" id="test7" />
                    <label htmlFor="test7">Yes</label>
                  </div>
                  <div className='col s12 m4'>
                    <input className="with-gap" name="pregnant" type="radio" id="test8" />
                  <label htmlFor="test8">No</label>
                </div>
              </div>
            }
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

export default Page_Basic_Info;
