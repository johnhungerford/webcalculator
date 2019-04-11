import React, { Component } from 'react';

export default class Display extends Component {
    render() {
        return (
            <div>
                {this.props.value}
            </div>
        );
    }
}