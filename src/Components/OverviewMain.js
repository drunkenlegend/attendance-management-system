import React, { Component } from 'react';
import RightTile from "./RightTile";
import { Editor } from "@tinymce/tinymce-react";
import './Css/OverviewMain.css';

export default class OverviewMain extends Component {
    render() {
        return (
            <div className='OverviewMain'>
                <div className='left'>
                    <h2>Today's Agenda</h2>
                    <p>as of 25 Jan 2021, 09:41 PM</p>
                    <Editor 
                        apiKey="qt7kamdrjwgqaf0l4fqa045g7foev3slf5p19tecvqxlip7x"
                        value='List yout tasks here..'
                        init={{
                        height: '70%',
                        
                        menubar: false
                        }}
                        onEditorChange=''
                    />
                </div>
                <div className='right'>
                    <RightTile title='Completed Course' value='69%'/>
                    <RightTile title='Course Average' value='89'/>
                    <RightTile title='Class Duration' value='50min'/>
                    <RightTile title='Lectures' value='30/42'/>



                </div>
                
            </div>
        )
    }
}
