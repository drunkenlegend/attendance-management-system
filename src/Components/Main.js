import React, { Component } from 'react';
import TopAll from './TopAll';
import OverviewBar from "./OverviewBar";
import OverviewMain from "./OverviewMain";
import './Css/Main.css';

export default class Main extends Component {
    render() {
        return (
            <div className='Main'>
                <TopAll value='Overview' />
                <OverviewBar />
                <OverviewMain />
            </div>
        )
    }
}
