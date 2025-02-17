type IndicatorProps = {
    style?: string;
    width: string;
}

const Indicator = ({style = '', width}: IndicatorProps) => {
    return <div className={`${width} h-1 rounded-xl bg-cyan-400/80 transition-all duration-300 ease-in-out ${style}`}></div>
}

export default Indicator