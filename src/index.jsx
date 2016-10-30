import React from "react";
import {render} from "react-dom";
import MessageBox from "~/src/elements/MessageBox.jsx";

class App extends React.Component {

    constructor(props) {
        super(props)
        this.state = {message: 'something'}
    }

    onChange(e) {
        this.setState({message: e.target.value})
    }

    render() {
        return (
            <div>
                <h1>Test</h1>
                <input type="text" onChange={ this.onChange.bind(this) }/>
                <MessageBox message={this.state.message}/>
            </div>
        )
    }
}

render(<App/>, document.getElementById('app'))
