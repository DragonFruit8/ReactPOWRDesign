import React, { Components } from 'react';
import '../src/index.css';

const PolygonOdd = (props) => {
    return (
        <polygon id='polygonOdd' points="0,10 0,190 160,100" >
            <div className='container  d-flex text-end'>
                <h1 className="text-end text-white my-auto">{props.name}</h1>
            </div>
        </polygon>
    )
}

export default PolygonOdd;