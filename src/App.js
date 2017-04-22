import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header';
import Title from './Components/Title';
import Page_Welcome from './Components/0_Page_Welcome';
import Page_Visited from './Components/1_Page_Visited';
import Page_Basic_Info from './Components/2_Page_Basic_Info';
import Page_Contact from './Components/3_Page_Contact';
import Page_Phone from './Components/4_Page_Phone';


//import mkFhir from 'fhir.js';
import injectTapEventPlugin from 'react-tap-event-plugin';


injectTapEventPlugin();

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      step: 0,
      contentAnimation: 'content-enter',
    };
  }

  handleStep(e) {
    this.setState(prevState => ({
      step: e.step,
    }));
    console.log('in parent, changing step to');
    console.log(this.state.step);
  }

  handleBack() {
    this.setState(prevState => ({
      step: prevState.step - 1,
    }));
    console.log('in parent, changing step to');
    console.log(this.state.step);
  }

  render() {
    console.log('parent re-rendering. step should be')
    console.log(this.state.step > 1);
    return (
      <div>
        <Header/>
        <div className='container'>
        <Title step={this.state.step}/>
        <Page_Welcome animation={this.state.contentAnimation} show={this.state.step===0} clickStep={this.handleStep.bind(this)}/>
        <Page_Visited animation={this.state.contentAnimation} show={this.state.step===1} clickStep={this.handleStep.bind(this)}/>
        <Page_Basic_Info animation={this.state.contentAnimation} show={this.state.step===2} clickStep={this.handleStep.bind(this)}/>
        <Page_Contact animation={this.state.contentAnimation} show={this.state.step===3} clickStep={this.handleStep.bind(this)}/>
        <Page_Phone animation={this.state.contentAnimation} show={this.state.step===4} clickStep={this.handleStep.bind(this)}/>

        </div>
        </div>
    );
  }
}

export default App;


//var mkFhir = require('fhir.js');


/*var client = mkFhir({
    baseUrl: 'http://try-fhirplace.hospital-systems.com'
});

client
    .search( {type: 'Condition', query: {dateRecorded: '2014-05-01'}})
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
