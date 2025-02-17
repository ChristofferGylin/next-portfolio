export type SvgButtonProps = {
    
    size?: string;
    color?: string;
    callback?: () => void;
    href?: string;
    style?: string;
    path: string
}

const SvgButton = ({size = '24', color = 'fill-sky-200 hover:fill-sky-50', style = '', href, callback, path }: SvgButtonProps) => {

    const svgElement = (
        <svg
            className={`${color} ${style}`}
            xmlns="http://www.w3.org/2000/svg"
            width={size} 
            height={size} 
            viewBox={`0 0 ${size} ${size}`}
        >
            <path d={path} />
        </svg>
    )
    
    if (href) {
        return (
            <a href={href} target="_blank">
                {svgElement}
            </a>
        )
    }

    return (
        <button onClick={callback}>
            {svgElement}
        </button>
    )
    
    
}

export default SvgButton