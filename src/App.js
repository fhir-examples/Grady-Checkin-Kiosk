import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header';
import Title from './Components/Title';
import Page_Welcome from './Components/0_Page_Welcome';
import Page_Visited from './Components/1_Page_Visited';
import Page_Basic_Info from './Components/2_Page_Basic_Info';
import Page_Contact from './Components/3_Page_Contact';
import Page_Phone from './Components/4_Page_Phone';
import Page_Symptom from './Components/5_Page_Symptom';
import Page_Misc from './Components/6_Page_Misc';
import Page_Finish from './Components/7_Page_Finish';
import Page_Pregnant from './Components/8_Page_Pregnant';
import Page_Direction from './Components/9_Page_Direction';



//import mkFhir from 'fhir.js';
import injectTapEventPlugin from 'react-tap-event-plugin';


injectTapEventPlugin();

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      step: 0,
      contentAnimation: 'content-enter',
      visited: false,
      language: 'english',
      info: {}
    };
  }

  updateInfo(newInfo) {
    this.setState({
      info: newInfo
    });
  }

  handleVisited() {
    this.setState({
      visited: true
    });
  }

  handleStep(e) {
    this.setState(prevState => ({
      step: e.step,
    }));
  }

  handleLanguageChange(l) {
    this.setState({
      language: l
    });
  }
  handleBack() {
    this.setState(prevState => ({
      step: prevState.step - 1,
    }));
  }

  render() {
    return (
      <div>
        <Header handleLanguageChange={this.handleLanguageChange.bind(this)}/>
        <div className='container'>
        <Title step={this.state.step} language={this.state.language} visited={this.state.visited}/>
        <Page_Welcome language={this.state.language} animation={this.state.contentAnimation} show={this.state.step===0} clickStep={this.handleStep.bind(this)}/>
        <Page_Visited language={this.state.language} animation={this.state.contentAnimation} show={this.state.step===1} clickStep={this.handleStep.bind(this)}/>
        <Page_Basic_Info language={this.state.language} animation={this.state.contentAnimation} show={this.state.step===2} clickStep={this.handleStep.bind(this)} updateInfo={this.updateInfo.bind(this)} oldInfo={this.state.info}/>
        <Page_Contact language={this.state.language} animation={this.state.contentAnimation} show={this.state.step===3} clickStep={this.handleStep.bind(this)} updateInfo={this.updateInfo.bind(this)} oldInfo={this.state.info}/>
        <Page_Symptom language={this.state.language} animation={this.state.contentAnimation} show={this.state.step===5} clickStep={this.handleStep.bind(this)}/>
        <Page_Misc language={this.state.language} animation={this.state.contentAnimation} show={this.state.step===6} clickStep={this.handleStep.bind(this)}/>
        <Page_Finish language={this.state.language} animation={this.state.contentAnimation} show={this.state.step===7} clickStep={this.handleStep.bind(this)}/>
        <Page_Pregnant language={this.state.language} animation={this.state.contentAnimation} show={this.state.step===8} clickStep={this.handleStep.bind(this)}/>
        <Page_Phone language={this.state.language} animation={this.state.contentAnimation} show={this.state.step===4} clickStep={this.handleStep.bind(this)} updateInfo={this.updateInfo.bind(this)} oldInfo={this.state.info} handleVisited={this.handleVisited.bind(this)}/>
        <Page_Direction language={this.state.language} animation={this.state.contentAnimation} show={this.state.step===9} clickStep={this.handleStep.bind(this)} updateInfo={this.updateInfo.bind(this)} oldInfo={this.state.info} handleVisited={this.handleVisited.bind(this)}/>

        </div>
        <div id="modal1" className="modal">
          <div className="modal-content">
            <h4>Modal Header</h4>
            <p>A bunch of text</p>
          </div>
          <div className="modal-footer">
            <a href="#!" className="modal-action modal-close waves-effect waves-green btn-flat">Agree</a>
          </div>
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
