import React, { Component } from 'react';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';

import mkFhir from 'fhir.js';
import $ from 'jquery';

//This page is where the user will enter their phone number and the system will search for their information.
//For the purposes of our prototype, we used phone number. This is where Grady's EPIC database needs to be
//linked to this page. Rather than using phone number, SSN will be used to search.
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

  //This function uses the returned JSON format to populate the fields of the patient information
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

        //this is our test phone number
        var userPass = '608-271-9000';

    //This is our test EPIC URL to search from. This should be changed once EPIC is updated.
    var baseUrl = "https://open-ic.epic.com/FHIR/api/FHIR/DSTU2/";

    //Here we are currently searching by telephone number. However, once the EPIC system is connected,
    //this should be searching by SSN (or whichever variable is desired)
    var patientSearchString = "/Patient?telecom=" + $("#icon_telephone")[0].value;

    $.getJSON(baseUrl + patientSearchString, this.handleResult.bind(this));
  }


  render() {
    return (
      <CSSTransitionGroup
      transitionName={this.props.animation + '-' + this.state.enter}
      transitionEnterTimeout={500}
      transitionLeave={false}>
    {/*English version*/}
      {this.state.show && this.props.language==='english' &&
      <div key='1'>
      <form onSubmit={this.handleSubmit.bind(this)}>
        <div className='row phone-input'>
          <div className="input-field col s12">
            <i className="material-icons prefix scale-transition">phone</i>
            <input id="icon_telephone" type="tel" className="validate tel"  onChange={this.handleChange.bind(this)} />
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

    {/*Spanish version*/}
      {this.state.show && this.props.language==='spanish' &&
      <div key='1'>
      <form onSubmit={this.handleSubmit.bind(this)}>
        <div className='row phone-input'>
          <div className="input-field col s12">
            <i className="material-icons prefix scale-transition">phone</i>
            <input id="icon_telephone" type="tel" className="validate tel" onChange={this.handleChange.bind(this)} />
            <label htmlFor="icon_telephone"></label>
          </div>
        </div>
        { !this.state.submitted &&
        <div className='row phone-input center'>
          <div className='col s6 '>
            <button className="btn waves-effect waves-light secondary my-left left" onClick={this.handleBack.bind(this)}>Anterior
            </button>
          </div>
        <div className='col s6 '>
          <button className="btn waves-effect waves-light primary my-right right" type="submit" name="action">Enviar
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
