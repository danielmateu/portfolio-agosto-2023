import Image from 'next/image'
import triangle from '../public/assets/triangle.webp'

export const TriangleDesign = ({ width, height, alt }) => {
    return (
        <Image width={width} height={height} alt={alt} src={triangle} className={'max-h-[30px] relative bottom-[-6px] left-[10px]'} />
    )
}
