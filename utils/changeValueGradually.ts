const changeValueGradually = ({startValue, endValue, startTime, duration, callback}:{startValue: number, endValue: number, startTime: number, duration: number, callback: (value: number) => void}) => {

    requestAnimationFrame(() => {
        const now = Date.now()
        const timePassed = now - startTime
        let percent = timePassed / duration

        if (percent > 1) {
            percent = 1
        }

        const difference = endValue - startValue

        const value = Math.round(difference * percent)

        callback(value)

        if (percent < 1) {
            changeValueGradually({startValue, endValue, startTime, duration, callback})
        }
    })
 
    
}

export default changeValueGradually