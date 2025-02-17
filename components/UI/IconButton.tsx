import { IconType } from "react-icons"

export type IconButtonProps = {
    Icon: IconType;
    size?: string;
    color?: string;
    callback: () => void;
    style?: string;
}

const IconButton = ({ Icon, size = 'text-xl', color = 'text-sky-200 stroke-sky-200 group-hover/ButtonGroup:text-sky-50 group-hover/ButtonGroup:stroke-sky-50', style = '', callback }: IconButtonProps) => {
    return (
        <button onClick={callback} className={`group/ButtonGroup flex justify-center items-center justify-self-center self-center h-fit aspect-square ${style}`}>
            <Icon className={`${size} ${color}`} />
        </button>
    )
}

export default IconButton