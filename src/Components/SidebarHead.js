import React, { Component } from 'react';
import './Css/SidebarHead.css';
import 'boxicons';


export default class SidebarHead extends Component {
    render() {
        return (
            <div className='SidebarHead'>
                <h2>
                    
                    <span className='space' style={{paddingLeft: '5px'}}>{'    '}</span>
                    Dashboard
                </h2>
            </div>
        )
    }
}
