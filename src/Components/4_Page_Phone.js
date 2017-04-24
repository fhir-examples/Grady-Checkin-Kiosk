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
      value: null,
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

  handleBack() {
    this.setState({
      enter: true
    });
    this.props.clickStep({
      step: 1
    });
  }

  handleChange(e) {
    this.setState({
      value: e.target.value
    });
  }

  handleResult(data, error) {
    if (data.entry.length > 1) {
      console.log(this);
      console.log(data.entry[1].resource);
      var patient = data.entry[1].resource;
      var newInfo = this.props.oldInfo;
      newInfo.birth_date = patient.birthDate;
      newInfo.biological_gender = patient.gender;
      newInfo.preferred_gender = patient.gender;
      newInfo.first_name = patient.name[0].given[0];
      newInfo.last_name = patient.name[0].family[0];
      newInfo.phone_number = patient.telecom[0].value;
      newInfo.street_address = patient.address[0].line[0];
      newInfo.zip_code = patient.address[0].postalCode;
      newInfo.city = patient.address[0].city;
      newInfo.state = patient.address[0].state;
      newInfo.phone_num = $("#icon_telephone")[0].value;
      this.props.updateInfo(newInfo);
      this.props.handleVisited();
      this.props.clickStep({
        step: 2
      });
    }
    else {
      console.log(error);
    }
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
        console.log($('#icon_telephone'));
        var userPass = '608-271-9000';

  var baseUrl = "https://open-ic.epic.com/FHIR/api/FHIR/DSTU2/";

  var patientSearchString = "/Patient?telecom=" + $("#icon_telephone")[0].value;

  $.getJSON(baseUrl + patientSearchString, this.handleResult.bind(this));
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
            <input id="icon_telephone" type="tel" className="validate tel" defaultValue={'6082719000'} onChange={this.handleChange.bind(this)} />
            <label htmlFor="icon_telephone"></label>
          </div>
        </div>
        { !this.state.submitted &&
        <div className='row phone-input center'>
          <div className='col s6 '>
            <button className="btn waves-effect waves-light secondary my-left left" onClick={this.handleBack.bind(this)}>Back
            </button>
          </div>
        <div className='col s6 '>
          <button className="btn waves-effect waves-light primary my-right right" type="submit" name="action">Submit
            <i className="material-icons right">send</i>
          </button>
        </div>
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
