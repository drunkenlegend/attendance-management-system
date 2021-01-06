import React, { Component } from 'react'
import OverviewBarTile from "./OverviewBarTile";
import './Css/OverviewBar.css';
export default class OverviewBar extends Component {
    render() {
        return (
            <div className='OverviewBar'>
                <OverviewBarTile title='Present' value='60'/>
                <OverviewBarTile title='Absent' value='16'/>
                <OverviewBarTile title='Current Class' value='DSA'/>
                <OverviewBarTile title='Total Classes' value='6'/>

            </div>
        )
    }
}
