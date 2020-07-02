import React, {Fragment} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Clock} from "./clock";

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {inputValue: ""};
    }

    onChange = event => this.setState({inputValue: event.target.value})

    onClick = () => {
        this.props.onAdd(this.state.inputValue);
        this.setState({inputValue: ""});
    }

    render() {
        return (
            <Fragment>
                <h1 className="header">{this.props.title}</h1>
                <div>
                    <input type="text" value={this.state.inputValue} onChange={this.onChange}/>
                    <button onClick={this.onClick}>Add</button>
                </div>
            </Fragment>
        );
    }
}

class Body extends React.Component {
    render() {
        return (
            <Fragment>
                {this.props.todoList.map(todo => <div key={todo}>{todo}</div>)}
            </Fragment>
        );
    }
}

Body.defaultProps = {todoList: []};
Body.displayName = "TODO LIST";

class App extends React.Component {
    state = {todos: ['1-st', '2-nd', '3-rd']};

    onAdd = todo => this.setState({todos: [...this.state.todos, todo]});

    render() {
        return (
            <div className="app">
                <Clock/>
                <Header onAdd={this.onAdd} title="This is  TODO list"/>
                <Body todoList={this.state.todos}/>
            </div>
        )
    }
}

ReactDOM.render(
    <App/>,
    document.getElementById('root')
);
