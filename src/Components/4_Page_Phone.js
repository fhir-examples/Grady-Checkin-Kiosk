import React, { Component } from 'react';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';

import mkFhir from 'fhir.js';
import $ from 'jquery';

class Page_Phone extends Component {

  constructor() {
    super();
    this.state = {
      show: false,
      enter: true,
      value:null,
      submitted: false
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
    this.setState({
      submitted: true
    })
    /*
    var mkFhir = require('fhir.js');


    var client = mkFhir({
        //baseUrl: 'http://try-fhirplace.hospital-systems.com'
        baseUrl: 'https://open-ic.epic.com/FHIR/api/FHIR/DSTU2/'
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
        });*/

        var userPass = '608-271-9000';

  var baseUrl = "https://open-ic.epic.com/FHIR/api/FHIR/DSTU2/";

  var patientSearchString = "/Patient?telecom=" + '6082719000';

  $.getJSON(baseUrl + patientSearchString, function(data,error) {
      console.log(data);


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
      <form onSubmit={this.handleSubmit.bind(this)}>
        <div className='row phone-input'>
          <div className="input-field col s12">
            <i className="material-icons prefix scale-transition">phone</i>
            <input id="icon_telephone" type="tel" className="validate tel" value={this.state.value} onChange={this.handleChange.bind(this)} />
            <label htmlFor="icon_telephone"></label>
          </div>
        </div>
        { !this.state.submitted &&
        <div className='row phone-input center'>
        <button className="btn-large waves-effect waves-light primary" type="submit" name="action">Submit
          <i className="material-icons right">send</i>
        </button>
        </div>
        }
        { this.state.submitted &&
          <div className='center'>
        <div className="preloader-wrapper active phone-input">
          <div className="spinner-layer spinner-red-only">
            <div className="circle-clipper left">
              <div className="circle"></div>
            </div><div className="gap-patch">
              <div className="circle"></div>
            </div><div className="circle-clipper right">
              <div className="circle"></div>
            </div>
          </div>
        </div>
        </div>
        }
      </form>
     </div>
      }
     </CSSTransitionGroup>
    );
  }
}

export default Page_Phone;
