import React from 'react';
import { Galleria } from 'primereact/galleria';
import product1Img from '../assets/images/image-product-1.jpg';
import product2Img from '../assets/images/image-product-2.jpg';
import product3Img from '../assets/images/image-product-3.jpg';
import product4Img from '../assets/images/image-product-4.jpg';
import producto1thumbnailImg from '../assets/images/image-product-1-thumbnail.jpg'
import producto2thumbnailImg from '../assets/images/image-product-2-thumbnail.jpg'
import producto3thumbnailImg from '../assets/images/image-product-3-thumbnail.jpg'
import producto4thumbnailImg from '../assets/images/image-product-4-thumbnail.jpg'

export const ProductGallery = () => {
    const images = [
        { itemImageSrc: product1Img, thumbnailImageSrc: producto1thumbnailImg, alt: '' },
        { itemImageSrc: product2Img, thumbnailImageSrc: producto2thumbnailImg, alt: '' },
        { itemImageSrc: product3Img, thumbnailImageSrc: producto3thumbnailImg, alt: '' },
        { itemImageSrc: product4Img, thumbnailImageSrc: producto4thumbnailImg, alt: '' },
    ];

    const itemTemplate = (item) => {
        return <img src={item.itemImageSrc} alt={item.alt} 
        className="h-96 shadow-lg rounded-2xl mb-5" />;
    };

    const thumbnailTemplate = (item) => {
        return <img src={item.thumbnailImageSrc} alt={item.alt}
        className='h-16 w-16 rounded-xl' />;
    };

    return (
        <div className='w-96 mx-auto mt-3'>
            <Galleria 
                value={images} 
                item={itemTemplate} 
                thumbnail={thumbnailTemplate} 
                showThumbnails={true} 
                className="max-w-screen-lg mx-auto"/>
        </div>
    );
};
