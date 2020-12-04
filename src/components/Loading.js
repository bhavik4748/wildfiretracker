import React from 'react';
import spinner from './giphy.gif';



const Loading = () => {
    return (
        <div className="loading">
            <img src={spinner} alt="loading" className="loadingImage"  />
            <h3>Loading data...</h3>
        </div>
    )
}

export default Loading
