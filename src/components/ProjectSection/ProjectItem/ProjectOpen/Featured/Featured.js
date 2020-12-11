import React from 'react';

const Featured = ({featuredImage, closeImage}) => {
    return (
            <div className={`featuredImage ${closeImage ? 'closeImage' : ''} selectDisable`}>
                <img alt='featured' draggable={false}
                     srcSet={`${featuredImage[0]} 300w, ${featuredImage[1]} 768w, ${featuredImage[1]} 1280w`}
                />
            </div>
    )
}

export default Featured;