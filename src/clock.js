import React, {Fragment} from "react";

export class Clock extends React.Component {
    state = {time: new Date()};

    tick = () => this.setState({time: new Date()});

    componentDidMount() {
        this.timer = setInterval(() => this.tick(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timer);
    }

    render() {
        return (
            <Fragment>
                <div>It is clock</div>
                <div>Time: {this.state.time.toLocaleTimeString()}</div>
            </Fragment>
        );
    }
}