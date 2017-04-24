import React, { Component } from 'react';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';



class Page_Contact extends Component {

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
      step: 2
    });
  }

  clickNext() {
    this.setState({
      enter: false
    });
    this.props.clickStep({
      step: 5
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

  handleChange(e) {
    var newInfo = this.props.oldInfo;
    newInfo[e.target.name] = e.target.value;
    this.props.updateInfo(newInfo);
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
              <input name="street_address" type="text" className="validate" defaultValue={this.props.oldInfo.street_address?this.props.oldInfo.street_address:""} onChange={this.handleChange.bind(this)}/>
              <label htmlFor="street_address" className={this.props.oldInfo.street_address?"active":""}>Street Address</label>
            </div>
            <div className="input-field col s6 m3">
              <input name="apt_num" type="text" className="validate" defaultValue={this.props.oldInfo.apt_num?this.props.oldInfo.apt_num:""} onChange={this.handleChange.bind(this)}/>
              <label htmlFor="apt_num" className={this.props.oldInfo.apt_num?"active":""}>Apt #</label>
            </div>
          </div>

          <div className='row'>
            <div className="input-field col s4 m3">
              <input name="zip_code" type="text" className="validate" defaultValue={this.props.oldInfo.zip_code?this.props.oldInfo.zip_code:""} onChange={this.handleChange.bind(this)}/>
              <label htmlFor="zip_code" className={this.props.oldInfo.zip_code?"active":""}>Zip Code</label>
            </div>
            <div className="input-field col s4 m6">
              <input name="city" type="text" className="validate" defaultValue={this.props.oldInfo.city?this.props.oldInfo.city:""} onChange={this.handleChange.bind(this)}/>
              <label htmlFor="city" className={this.props.oldInfo.city?"active":""}>City</label>
            </div>
            <div className="input-field col s4 m3">
              <input name="state" type="text" className="validate" defaultValue={this.props.oldInfo.state?this.props.oldInfo.state:""} onChange={this.handleChange.bind(this)}/>
              <label htmlFor="state" className={this.props.oldInfo.state?"active":""}>State</label>
            </div>
          </div>

          <div className='row'>
            <div className="input-field col s6">
              <input name="phone_num" type="tel" className="validate" defaultValue={this.props.oldInfo.phone_num?this.props.oldInfo.phone_num:""} onChange={this.handleChange.bind(this)}/>
              <label htmlFor="phone_num" className={this.props.oldInfo.phone_num?"active":""}>Phone Number</label>
            </div>
            <div className='col s6'>
              <a className="waves-effect waves-light btn primary phone-button">Confirm</a>
            </div>
          </div>

          <div className='row'>
            <div className="input-field col s6">
              <input name="email" type="email" className="validate" defaultValue={this.props.oldInfo.email?this.props.city.email:""} onChange={this.handleChange.bind(this)}/>
              <label htmlFor="email" className={this.props.oldInfo.email?"active":""}>Email Address</label>
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

export default Page_Contact;
