import React, { Component } from 'react';
import './App.css';
import ProgressBar from './Components/ProgressBar';
import Header from './Components/Header';
import Page_Welcome from './Components/0_Page_Welcome';
import Page_Visited from './Components/1_Page_Visited';
import Page_Basic_Info from './Components/2_Page_Basic_Info';

//import mkFhir from 'fhir.js';
import injectTapEventPlugin from 'react-tap-event-plugin';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';


injectTapEventPlugin();

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      step: 0,
      toggle: true
    };
  }

  handleClick() {
    this.setState(prevState => ({
      step: prevState.step + 1,
      toggle: !prevState.toggle
    }));
    console.log('in parent, changing step to');
    console.log(this.state.step);
  }

  handleBack() {
    this.setState(prevState => ({
      step: prevState.step - 1,
      toggle: !prevState.toggle
    }));
    console.log('in parent, changing step to');
    console.log(this.state.step);
  }

  render() {
    console.log('parent re-rendering. show should be')
    console.log(this.state.step===0);
    return (
      <div>
        <Header/>
         <ProgressBar show={this.state.step>2} step={this.state.step}/>
        <Page_Welcome show={this.state.step===0} clickNext={this.handleClick.bind(this)}/>
        <Page_Visited show={this.state.step===1} clickNext={this.handleClick.bind(this)} clickBack={this.handleBack.bind(this)}/>
        <Page_Basic_Info show={this.state.step===2} clickNext={this.handleClick.bind(this)} clickBack={this.handleBack.bind(this)}/>
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
