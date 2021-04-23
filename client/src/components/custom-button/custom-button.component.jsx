import React from 'react';

export const CustomButton = ({ children, ...otherProps }) => {
    return (
        <button className="custom-button" {...otherProps}>
            { children }
        </button>
    );
}