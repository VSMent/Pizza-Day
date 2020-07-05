import React, {Fragment} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Clock} from "./clock";
import {Header} from "./header";
import {Body} from "./body.js";


class App extends React.Component {
    state = {todos: ['1-st', '2-nd', '3-rd'], showClock: true};

    onAdd = todo => this.setState({todos: [...this.state.todos, todo]});

    onSwitch = () => this.setState({showClock: !this.state.showClock});

    render() {
        const {todos, showClock} = this.state;

        return (
            <div className="app">
                <button onClick={this.onSwitch}>
                    Turn Clock {showClock ? 'Off' : 'On'}
                </button>
                {showClock && <Clock/>}
                <Header onAdd={this.onAdd} title="This is  TODO list"/>
                <Body todoList={todos}/>
            </div>
        )
    }
}

ReactDOM.render(
    <App/>,
    document.getElementById('root')
);
