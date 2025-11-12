import Image from "next/image";

export type ImageButtonProps = {
    src: string;
    alt: string
    size?: number;
    callback: () => void;
    style?: string;
}

const ImageButton = ({ src, alt, size = 20, style = '', callback }: ImageButtonProps) => {
    return (
        <button onClick={callback} className={`group/ButtonGroup flex justify-center items-center justify-self-center self-end h-fit aspect-square ${style}`}>
           <Image
            src={src}
            alt={alt}
            width={size}
            height={size}
           />  
        </button>
    )
}

export default ImageButton