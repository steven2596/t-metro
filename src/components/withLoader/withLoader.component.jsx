import React from 'react';

import Loader from '../loader/loader.component';

const WithLoader = (WrappedComponent) => {
    const LoaderComponent = ({ isDataFetched, ...otherProps }) => {
        return isDataFetched ?
            (
                <WrappedComponent {...otherProps} />
            )
            :
            (
                <Loader />
            )
    };
    return LoaderComponent;
}

export default WithLoader;