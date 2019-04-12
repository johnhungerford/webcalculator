import React, { Component } from 'react';

import addCommas from '../logic/addCommas.js';

export default class Display extends Component {
    render() {
        return (
            <div className='component-display'>
                <div className='operation-view'>
                    {this.props.operation}
                </div>
                <div className='number-view'>
                    <span className='component-display-span'>
                        {addCommas(this.props.value)}
                    </span>
                </div>
            </div>
        );
    }
}