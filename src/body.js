import React, {Fragment} from "react";
import T from 'prop-types';
import {logProps} from "./hoc";

const BodyComponent = ({todoList}) => (
    <Fragment>
        {todoList.map(todo => <div key={todo}>{todo}</div>)}
    </Fragment>
);

BodyComponent.defaultProps = {todoList: []};
BodyComponent.displayName = "TODO LIST";
BodyComponent.propTypes = {todoList: T.arrayOf(T.string)};

export const Body = logProps(BodyComponent);