import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Button extends Component {
    handleClick = () => {
        this.props.handleClick(this.props.name);
    }

    render() {
        return (
            <div className='component-button'>
                <button onClick={this.handleClick}>{this.props.name}</button>
            </div>
        );
    }
}

Button.propTypes = {
    clickHandler: PropTypes.func,
    name: PropTypes.string,
}