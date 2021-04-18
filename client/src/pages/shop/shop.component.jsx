import React, { useState } from 'react';

import { CollectionPreviewReel } from '../../components/collection-preview-reel/collection-preview-reel.component.jsx';
import { SHOP_DATA } from './shop.data.js';

export const ShopPage = (props) => {
    const [collections, setCollections] = useState(SHOP_DATA);

    return (
        <div className='shop-page'>
            SHOP PAGE

            {
                collections.map(({ id, ...otherCollectionProps }) => 
                    <CollectionPreviewReel key={id} {...otherCollectionProps} />
                )
            }
        </div>
    );
};