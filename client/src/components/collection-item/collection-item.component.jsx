import React from 'react';

export const CollectionItem = (props) => {

    return (
        <div className='collection-item'>
            <div 
                className='item-image'
                style={{
                    backgroundImage: `url(${props.imageUrl})`
                }}
            />

            <div className='collection-footer'>
                <span className='item-name'>{ props.name }</span>
                <span className='item-price'>${ props.price }</span>
            </div>
        </div>
    )
}