import React from 'react';

export const CollectionPreviewReel = (props) => {
    return (
        <div className='collection-preview'>
            <h1 className='title'>{props.title.toUpperCase()}</h1>

            <div className='preview-reel'>
                {
                    props.items
                    .filter((item, idx) => idx < 4)
                    .map((item) => 
                        <div key={item.id}>{ item.name }</div>
                    )
                }
            </div>
        </div>
    )
};