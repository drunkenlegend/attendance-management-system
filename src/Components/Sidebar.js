import React, { Component } from 'react';
import SidebarTile from './SidebarTile';
import SidebarHead from './SidebarHead';

import './Css/Sidebar.css';

export default class Sidebar extends Component {
    render() {
        return (
            <div className='Sidebar'>
                <SidebarHead />
                <SidebarTile menu="Overview" name='pie-chart-alt-2'/>
                <SidebarTile menu="My Profile" name='user'/>
                <SidebarTile menu="Classes" name='notepad'/>
                <SidebarTile menu="To-Do" name='list-ul'/>
                <SidebarTile menu="Account" name='user-account'/>
                <SidebarTile menu="Article" name='note'/>
                <h5 style={line}> </h5>
                <SidebarTile menu="Settings" name='pencil'/>



            </div>
        )
    }
}
const line={
    margin:'8px',
    border: 'solid 1px #A4A6B3'
}