import React from 'react';

const Thumbnails = ({images, handleClickImage, activeIndex}) => {
    return images.map((image, index) => {
        if (index > 0)
            return (
                <div
                    key={index}
                    onClick={() => handleClickImage(index)}
                    className={`thumbnailContainer ${activeIndex === index ? 'active' : ''}`}
                >
                    <div
                        className={`thumbnail`}
                        style={{backgroundImage: `url(${image[0]})`, backgroundSize: 'cover'}}
                    />
                 </div>
            )
        return null
    })
}

export default Thumbnails;