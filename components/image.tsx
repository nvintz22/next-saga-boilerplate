import React from 'react'
import Image from 'next/image'

interface Props {
    src: string,
    alt?: string
}

const ImageComponent: React.FC<Props> = ({ src, alt='image component' }) => (
    <Image 
        src={src}
        height={400}
        width={400}
        alt={alt}
    />
)

export default ImageComponent;