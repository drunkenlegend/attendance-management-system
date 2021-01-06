import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default class TopAll extends Component {
    render() {
        return (
            <div>
                <h3>{this.props.value}</h3>
                <FontAwesomeIcon icon="coffee" />
            </div>
        )
    }
}
