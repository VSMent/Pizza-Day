import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Clock} from "./clock";
import {Header} from "./header";
import {Body} from "./body.js";


const App = () => {
    const [app, setApp] = useState({
        todos: ['1-st', '2-nd', '3-rd'],
        showClock: true
    });

    const onAdd = todo => setApp({...app, todos: [...app.todos, todo]});
    const onSwitch = () => setApp({...app, showClock: !app.showClock});

    const {todos, showClock} = app;

    return (
        <div className="app">
            <button onClick={onSwitch}>
                Turn Clock {showClock ? 'Off' : 'On'}
            </button>
            {showClock && <Clock/>}
            <Header onAdd={onAdd} title="This is  TODO list"/>
            <Body todoList={todos}/>
        </div>
    );
};

ReactDOM.render(
    <App/>,
    document.getElementById('root')
);
