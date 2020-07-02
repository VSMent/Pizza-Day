import React, {Fragment} from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Header extends React.Component {
    render() {
        return (
            <h1 className="header">{this.props.title}</h1>
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
Body.displayName="TODO LIST";

class App extends React.Component {
    state = {todos: ['1-st', '2-nd', '3-rd']};

    render() {
        return (
            <div className="app">
                <Header title="This is  TODO list"/>
                <Body todoList={this.state.todos}/>
            </div>
        )
    }
}

ReactDOM.render(
    <App/>,
    document.getElementById('root')
);
