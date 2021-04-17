import React from 'react';

export const MenuItem = (props) => (
    <div 
        className={`${props.size} menu-item` }
    >
        <div 
            className='background-image' 
            style={{
                backgroundImage: `url(${props.imageUrl})`
            }} 
        />
        <div className='content'>
            <h1 className='title'>{ props.title }</h1>
            <span>BROWSE INVENTORY</span>
        </div>
    </div>
);