import { useEffect, useState } from "react"
import { Days } from "../utils/types"
import dayjs from "dayjs"


const MaterialTimer = () => {
    const [ activeDay, setActiveDay ] = useState<Days>()
    
    // Calculate genshin reset
    useEffect(() => {
        const now = dayjs()
        const daylightSavingsCheck = now.format('Z') === '+01:00' ? 4 : 5
        now.hour() >= daylightSavingsCheck ? setActiveDay(now.format('dddd') as Days) : setActiveDay(now.subtract(1, 'day').format('dddd') as Days)
    }, [setActiveDay])

    useEffect(()=> {
        if(activeDay) document.getElementById(activeDay)?.classList.add('active')
    }, [activeDay])

    return (
        <div className="material-timer">
            <div id="Monday" className="day-container">
                <div className="day-label">Monday</div>
                <div className="day-content">Test</div>
            </div>
            <div id="Tuesday" className="day-container">
                <div className="day-label">Tuesday</div>
                <div className="day-content"></div>
            </div>
            <div id="Wednesday" className="day-container">
                <div className="day-label">Wednesday</div>
                <div className="day-content"></div>
            </div>
            <div id="Thursday" className="day-container">
                <div className="day-label">Thursday</div>
                <div className="day-content"></div>
            </div>
            <div id="Friday" className="day-container">
                <div className="day-label">Friday</div>
                <div className="day-content"></div>
            </div>
            <div id="Saturday" className="day-container">
                <div className="day-label">Saturday</div>
                <div className="day-content"></div>
            </div>
            <div id="Sunday" className="day-container">
                <div className="day-label">Sunday</div>
                <div className="day-content"></div>
            </div>
        </div>
    )
}

export {
    MaterialTimer
}