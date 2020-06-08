import React from 'react';

const showList = props => (
    <ul>                                
        {props.propertyArray.map(type => 
            <li key={type}>{type}</li>
        )}
    </ul>
)

export default showList;