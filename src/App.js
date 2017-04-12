import React, { Component } from 'react';
import './App.css';
import ProgressBar from './Components/ProgressBar';
import mkFhir from 'fhir.js';
import injectTapEventPlugin from 'react-tap-event-plugin';


injectTapEventPlugin();

class App extends Component {
  render() {
    //var mkFhir = require('fhir.js');


    var client = mkFhir({
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
        });
    return (
      <div>
        <h1 id="main-title">Grady Check-in Kiosk</h1>
         <a className="btn-floating btn-large waves-effect waves-light red"><i className="material-icons">add</i></a>
         <ProgressBar/>
         <div className="input-field col s6">
          <input placeholder="Placeholder" id="first_name" type="text" className="validate"/>
          <label for="first_name">First Name</label>
        </div>
        <div className="input-field col s6">
          <input id="last_name" type="text" className="validate"/>
          <label >Last Name</label>
        </div>
       </div>
    );
  }
}

export default App;
