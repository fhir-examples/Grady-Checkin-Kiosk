import React, { Component } from 'react';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';
import ProgressBar from './ProgressBar';



class Title extends Component {

  constructor() {
    super();
    this.state = {
      step: 0
    }
  }

  componentWillReceiveProps(nextProps) {
      this.setState({
        step: nextProps.step
      });
  }

  render() {
    return (
      <CSSTransitionGroup
      transitionName="example"
      transitionEnterTimeout={500}
      transitionLeave={false}>
      {(this.state.step===0 || this.state.step===1) &&
      ((this.props.language==='english' && <div key='1'>
        <h1 className='center-text page-title-1'>Welcome to Grady Hospital!</h1>
     </div>) ||
     (this.props.language==='spanish' && <div key='1'>
       <h1 className='center-text page-title-1'>¡Bienvenido al Hospital Grady!</h1>
     </div>))
      }
      {(this.state.step>4 && this.state.step!==7 && this.state.step!==8 && this.state.step!==9) &&
      ((this.props.language==='english' && <div key='2'>
        <h1 className='center-text page-title-2'>We just need some information... </h1>
        <ProgressBar step={this.state.step}/>
     </div>) ||
      (this.props.language==='spanish' && <div key='2'>
        <h1 className='center-text page-title-2'>Sólo necesitamos información... </h1>
        <ProgressBar step={this.state.step}/>
     </div>))
      }
      {(this.state.step===2 || this.state.step===3) && !this.props.visited &&
        ((this.props.language==='english' && <div key='5'>
          <h1 className='center-text page-title-2'>We just need some information... </h1>
          <ProgressBar step={this.state.step}/>
       </div>) ||
       (this.props.language==='spanish' && <div key='5'>
         <h1 className='center-text page-title-2'>Sólo necesitamos información... </h1>
         <ProgressBar step={this.state.step}/>
      </div>))
      }
      {(this.state.step===2 || this.state.step===3) && this.props.visited &&
        ((this.props.language==='english' && <div key='5'>
          <h1 className='center-text page-title-2'>Make any updates you may have... </h1>
          <ProgressBar step={this.state.step}/>
       </div>) ||
       (this.props.language==='spanish' && <div key='5'>
         <h1 className='center-text page-title-2'>Haz las actualizaciones que tengas... </h1>
         <ProgressBar step={this.state.step}/>
      </div>)
      )

      }
      {(this.state.step===4) &&
      ((this.props.language==='english' && <div key='3'>
        <h1 className='center-text page-title-1'>Please enter your phone number: </h1>
      </div>) ||
      (this.props.language==='spanish' && <div key='3'>
        <h1 className='center-text page-title-1'>Por favor, introduzca su número de teléfono: </h1>
      </div>))
      }
      {(this.state.step===7) &&
      ((this.props.language==='english' && <div key='4'>
        <h1 className='center-text page-title-1'>You have successfully checked in! </h1>
      </div>) ||
      (this.props.language==='spanish' && <div key='4'>
        <h1 className='center-text page-title-1'>You have successfully checked in! </h1>
      </div>))
      }
      {(this.state.step===8) &&
      ((this.props.language==='english' && <div key='6'>
        <h1 className='center-text page-title-1'>Notice </h1>
      </div>) ||
      (this.props.language==='spanish' && <div key='6'>
        <h1 className='center-text page-title-1'>darse cuenta </h1>
      </div>))
      }
      {(this.state.step===9) &&
      ((this.props.language==='english' && <div key='7'>
        <h1 className='center-text page-title-1'>Instructions to Grady Walk-In Clinic </h1>
      </div>) ||
      (this.props.language==='spanish' && <div key='7'>
        <h1 className='center-text page-title-1'>Instrucciones para Grady Walk-In Clinic </h1>
      </div>))
      }

     </CSSTransitionGroup>
    );
  }
}

export default Title;
