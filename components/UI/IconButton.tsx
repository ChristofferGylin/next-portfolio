import { ReactElement } from "react";

export type IconButtonProps = {
    Icon: ReactElement;
    callback: () => void;
    style?: string;
}

const IconButton = ({ Icon, style = '', callback }: IconButtonProps) => {
    return (
        <button onClick={callback} className={`group/ButtonGroup flex justify-center items-center justify-self-center self-center h-fit aspect-square ${style}`}>
            {Icon}
        </button>
    )
}

export default IconButton