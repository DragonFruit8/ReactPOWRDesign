import React, { Components } from 'react';
import '../src/index.css';

const PolygonEven = (props) => {
    return (
        <polygon id='polygonEven' points="0,10 0,190 160,100" >
            <div className='container d-flex text-start'>
                <h1 className="text-start text-white my-auto">{props.name}</h1>
            </div>
        </polygon>
    )
}

export default PolygonEven;
