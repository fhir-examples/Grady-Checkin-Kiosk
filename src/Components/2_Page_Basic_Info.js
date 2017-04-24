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

  handleChange(e) {
    var newInfo = this.props.oldInfo;
    newInfo[e.target.name] = e.target.value;
    this.props.updateInfo(newInfo);
    if(e.target.name === 'preferred_gender') {
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
    console.log("now state haha");
    console.log(this.state);
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
                  <input name="first_name" type="text" className="validate" defaultValue={this.props.oldInfo.first_name?this.props.oldInfo.first_name:""} onChange={this.handleChange.bind(this)}/>
                  <label htmlFor="first_name" className={this.props.oldInfo.first_name?"active":""}>First Name</label>
                </div>
                <div className="input-field col s12">
                  <input name="last_name" type="text" className="validate" defaultValue={this.props.oldInfo.last_name?this.props.oldInfo.last_name:""} onChange={this.handleChange.bind(this)}/>
                  <label htmlFor="last_name" className={this.props.oldInfo.last_name?"active":""}>Last Name</label>
                </div>
              </div>
            </div>
            <div className='col s2'> </div>
            <div className='col s12 m5'>
              <div className='row'>
                <div className="input-field col s12">
                  <input name="birth_date" type="text" className="validate" defaultValue={this.props.oldInfo.birth_date?this.props.oldInfo.birth_date:""} onChange={this.handleChange.bind(this)}/>
                  <label htmlFor="birth_date" className={this.props.oldInfo.birth_date?"active":""}>Date of Birth</label>
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
                    <input className="with-gap" name="biological_gender" value="male" type="radio" id="test1" defaultChecked={this.props.oldInfo.biological_gender==="male"?true:false} onChange={this.handleChange.bind(this)}/>
                    <label htmlFor="test1">Male</label>
                  </div>
                  <div className='col s12 m4'>
                    <input className="with-gap" name="biological_gender" value="female" type="radio" id="test2" defaultChecked={this.props.oldInfo.biological_gender==="female"?true:false} onChange={this.handleChange.bind(this)}/>
                  <label htmlFor="test2">Female</label>
                  </div>
                  <div className='col s12 m4'>
                    <input className="with-gap" name="biological_gender" value="unspecified" type="radio" id="test3"  defaultChecked={this.props.oldInfo.biological_gender==="unspecified"?true:false} onChange={this.handleChange.bind(this)}/>
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
                    <input className="with-gap" name="preferred_gender" value="male" type="radio" id="male" onChange={this.handleChange.bind(this)} defaultChecked={this.props.oldInfo.preferred_gender==="male"?true:false} />
                    <label htmlFor="male">Male</label>
                  </div>
                  <div className='col s12 m4'>
                    <input className="with-gap" name="preferred_gender" value="female" type="radio" id="female" onChange={this.handleChange.bind(this)} defaultChecked={this.props.oldInfo.preferred_gender==="female"?true:false} />
                  <label htmlFor="female">Female</label>
                  </div>
                  <div className='col s12 m4'>
                    <input className="with-gap" name="preferred_gender" value="unspecified" type="radio" id="unspecified"  onChange={this.handleChange.bind(this)} defaultChecked={this.props.oldInfo.preferred_gender==="unspecified"?true:false}/>
                    <label htmlFor="unspecified">Unspecified</label>
                  </div>
              </div>

              { this.state.pregnant_question &&
              <div className='row'>
                <div className='col s12'>
                    Are you pregnant?
                </div>
                  <div className='col s12 m4'>
                    <input className="with-gap" name="pregnant" value="true" type="radio" id="test7" onChange={this.handleChange.bind(this)} defaultChecked={this.props.oldInfo.pregnant==="true"?true:false}/>
                    <label htmlFor="test7">Yes</label>
                  </div>
                  <div className='col s12 m4'>
                    <input className="with-gap" name="pregnant" value="false" type="radio" id="test8" onChange={this.handleChange.bind(this)} defaultChecked={this.props.oldInfo.pregnant==="false"?true:false}/>
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
