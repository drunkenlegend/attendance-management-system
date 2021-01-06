import React, { Component } from 'react';
import TopAll from './TopAll';
import './Css/Main.css';

export default class Main extends Component {
    render() {
        return (
            <div className='Main'>
                <TopAll value='Overview' />
            </div>
        )
    }
}
