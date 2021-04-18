import React from 'react';
import { useHistory, useRouteMatch } from 'react-router-dom';

export const MenuItem = (props) => {

    const history = useHistory();
    const match = useRouteMatch();

    return (<div 
        className={`${props.size} menu-item`}
        onClick={() => history.push(`${match.url}${props.linkUrl}`)}
    >
        <div 
            className='background-image' 
            style={{
                backgroundImage: `url(${props.imageUrl})`
            }} 
        />
        <div className='content'>
            <h1 className='title'>{ props.title.toUpperCase() }</h1>
            <span>BROWSE INVENTORY</span>
        </div>
    </div>)
};