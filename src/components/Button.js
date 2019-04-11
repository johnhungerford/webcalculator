import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Button extends Component {
    handleClick = () => {
        this.props.clickHandler(this.props.name);
    }

    render() {
        return (
            <div className='component-button' onClick={this.props.name ? this.handleClick : ()=>{}}>
                <span>{this.props.name || '   '}</span>
            </div>
        );
    }
}

Button.propTypes = {
    clickHandler: PropTypes.func,
    name: PropTypes.string,
}