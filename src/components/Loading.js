import React from 'react';
import spinner from './giphy.gif';



const Loading = () => {
    return (
        <div className="loading">
            <img src={spinner} alt="loading" />
            <h1>Loading data...</h1>
        </div>
    )
}

export default Loading
