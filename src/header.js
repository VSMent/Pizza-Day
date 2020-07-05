import React, {Fragment, useState} from "react";

export const Header = ({children, onAdd}) => {
    const [inputValue, setInputValue] = useState('');
    const onChange = event => setInputValue(event.target.value);
    const onClick = () => {
        onAdd(inputValue);
        setInputValue('');
    };

    return (
        <Fragment>
            <h1 className="header">{children}</h1>
            <div>
                <input type="text" value={inputValue} onChange={onChange}/>
                <button onClick={onClick}>Add</button>
            </div>
        </Fragment>
    );
};