import React from 'react'
import { Route } from 'react-router-dom'
import NavigationBar from "../NavigationBar/NavigationBar";

const BaseLayout = ({ component: Component, ...rest }) => {
    return (
        <Route {...rest} render={matchProps => (
            <div>
                <NavigationBar />
                <Component {...matchProps} />
            </div>
        )} />
    )
};

export default BaseLayout;