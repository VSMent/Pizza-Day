import React, {Fragment} from "react";
import T from 'prop-types';

export const Body = ({todoList}) => (
    <Fragment>
        {todoList.map(todo => <div key={todo}>{todo}</div>)}
    </Fragment>
);

Body.defaultProps = {todoList: []};
Body.displayName = "TODO LIST";
Body.propTypes = {todoList: T.arrayOf(T.string)};