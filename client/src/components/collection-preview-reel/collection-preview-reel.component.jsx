import React from 'react';

import { CollectionItem } from '../collection-item/collection-item.component.jsx';

export const CollectionPreviewReel = (props) => {
    return (
        <div className='collection-preview'>
            <h1 className='title'>{props.title.toUpperCase()}</h1>

            <div className='preview-reel'>
                {
                    props.items
                    .filter((item, idx) => idx < 4)
                    .map(({ itemId, ...otherItemProps }) => 
                        <CollectionItem key={itemId} {...otherItemProps} />
                    )
                }
            </div>
        </div>
    )
};