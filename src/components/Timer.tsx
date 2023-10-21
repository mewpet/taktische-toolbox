import { useEffect, useState } from "react"


interface TimeObject {
    days: {
      display: string,
      time: number
    },
    hours: {
      display: string,
      time: number
    },
    minutes: {
      display: string,
      time: number
    },
    seconds: {
      display: string,
      time: number
    }
}

interface TimerProps {
    timestamp: number
}

const Timer = (props: TimerProps) => {
    const [timeLeft, setTimeLeft] = useState<TimeObject>(calculateTimeLeft())
    
    function calculateTimeLeft(): TimeObject {
        let target = new Date(props.timestamp * 1000)
        let rightNow = new Date()
        let difference = target.getTime() - rightNow.getTime()

        let timeleftTmp = {
            days: {
            display: "Days",
            time: 0
            },
            hours: {
            display: "Hours",
            time: 0
            },
            minutes: {
            display: "Minutes",
            time: 0
            },
            seconds: {
            display: "Seconds",
            time: 0
            }
        }

        if (difference > 0) {
            timeleftTmp = {
            days: {
                display: "Days",
                time: Math.floor((difference / 1000 / 60 / 60) / 24)
            },
            hours: {
                display: "Hours",
                time: Math.floor((difference / 1000 / 60 / 60) % 24)
            },
            minutes: {
                display: "Minutes",
                time: Math.floor((difference / 1000 / 60) % 60)
            },
            seconds: {
                display: "Seconds",
                time: Math.floor((difference / 1000) % 60)
            }
            }
        }

        return timeleftTmp
    }

    useEffect(() => {
        const timer = setTimeout(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000)

        return () => clearTimeout(timer)
    })
    return (
        <div className="timer">
            {
                Object.values(timeLeft).map((value, key) => {
                return(
                    <div key={key}>{value.time} {value.time === 1 ? value.display.substring(0, value.display.length-1) : value.display} {Object.values(timeLeft).length-1 === key ? "" : "|"} </div>
                    )
                })
            }
        </div>
    )
}

export {
    Timer
}