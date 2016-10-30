import React from "react";

export default class MessageBox extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        if (!this.props.message) {
            return null
        }
        return (
            <p>{ this.props.message }</p>
        )
    }
}