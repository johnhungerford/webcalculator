import React, { Component } from 'react';

import Display from './Display.js';
import ButtonPanel from './ButtonPanel.js';
import calculate from '../logic/calculate.js';

export default class App extends Component{
   constructor(props) {
      super(props);
      this.state = {
         total: null,
         next: null,
         operation: null,
      };
   }

   handleClick = buttonName => {
      console.log(calculate(this.state, buttonName));
      this.setState(currentState => calculate(currentState, buttonName));
   }

   render() {
      let displayVal = this.state.next;
      if (displayVal === null) displayVal = this.state.total;
      if (displayVal === null) displayVal = '0';
      return(
         <div className='component-webcalc-app'>
            <div className='webcalc-container'>
               <Display operation={this.state.operation} value={displayVal}/>
               <ButtonPanel clickHandler={this.handleClick}/>
            </div>
         </div>
      );
   }
}
