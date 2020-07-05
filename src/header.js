import React, {Fragment} from "react";

export class Header extends React.Component {
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