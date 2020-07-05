import React, {useEffect} from "react";

export const logProps = WrappedComponent => props => {
    useEffect(() => console.log(props));

    return <WrappedComponent {...props} />
};