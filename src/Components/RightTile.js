import React, { Component } from 'react';
import './Css/RightTile.css';

export default class RightTile extends Component {
    render() {
        return (
            <div className='RightTile'>
                <p>{this.props.title}</p>
                <h2>{this.props.value}</h2>
            </div>
        )
    }
}
