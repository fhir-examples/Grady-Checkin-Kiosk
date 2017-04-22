import React, { Component } from 'react';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';

import mkFhir from 'fhir.js';

class Page_Phone extends Component {

  constructor() {
    super();
    this.state = {
      show: false,
      enter: true,
      value:null
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

  handleChange(e) {
    this.setState({
      value: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    var mkFhir = require('fhir.js');


    var client = mkFhir({
        baseUrl: 'http://try-fhirplace.hospital-systems.com'
    });

    client
        .search( {type: 'Patient', query: { 'first': 'john' }})
        .then(function(res){
            //var bundle = res.data;
            //var count = (bundle.entry && bundle.entry.length) || 0;
            console.log("Response: ", res);
        })
        .catch(function(res){
            //Error responses
            if (res.status){
                console.log('Error', res.status);
            }

            //Errors
            if (res.message){
                console.log('Error', res.message);
            }
        });

  }


  render() {
    return (
      <CSSTransitionGroup
      transitionName={this.props.animation + '-' + this.state.enter}
      transitionEnterTimeout={500}
      transitionLeave={false}>
      {this.state.show &&
      <div key='1'>
      <form onSubmit={this.clickNo.bind(this)}>
        <div className='row phone-input'>
          <div className="input-field col s12">
            <i className="material-icons prefix scale-transition">phone</i>
            <input id="icon_telephone" type="tel" className="validate" value={this.state.value} onChange={this.handleChange.bind(this)} />
            <label htmlFor="icon_telephone"></label>
          </div>
        </div>
        <div className='row phone-input center'>
          <div className='col s12'>
            <a className="waves-effect waves-light btn-large primary"><input type="submit" value="Submit"/></a>
          </div>
        </div>
      </form>
     </div>
      }
     </CSSTransitionGroup>
    );
  }
}

export default Page_Phone;
