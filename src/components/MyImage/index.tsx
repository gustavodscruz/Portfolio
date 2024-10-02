// MyImageComponent.jsx
import Image from 'astro/components/Image.astro';
import React from 'react';

type MyImageType = {
    src:string, 
    alt:string, 
    height?: number, 
    width?: number
}

const MyImage = ({ src, alt, height, width }: MyImageType) => {
    
    return (<Image src={src} alt={alt} width={width ?? 500} height={height ?? 300} />)

};

export default MyImage;
