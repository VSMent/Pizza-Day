import React, {Fragment, useEffect, useState} from "react";

export const Clock = () => {
    const [time, setTime] = useState(new Date());
    const tick = () => {
        setTime(new Date());
        // console.log('Tick');
    }

    useEffect(() => {
        const timer = setInterval(() => tick(), 1000);

        return () => clearInterval(timer);
    }, []);

    return (
        <Fragment>
            <div>Time: {time.toLocaleTimeString()}</div>
        </Fragment>
    );
};