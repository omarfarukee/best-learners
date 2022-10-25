import React from 'react';
import {useLoaderData} from 'react-router-dom'

const MoreDetails = () => {
    const details = useLoaderData()
        
    return (
        <div>
            <h1>welcome more</h1>
        </div>
    );
};

export default MoreDetails;