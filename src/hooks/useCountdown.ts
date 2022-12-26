import { useState, useEffect } from 'react';

interface MainProps{
    endTime: number
}

type TimeType = {
    hours: string,
    minutes: string,
    seconds: string,
}

const initialValue = {hours: '00', minutes: '00', seconds: '00'}
export default function useCountdown({ endTime }: MainProps): TimeType {

    const [time, setTime]=  useState<TimeType>(initialValue)

    useEffect(() => {

        const addZero = (num: number): string => {
            return num?.toString().length === 1 ? '0' + num.toFixed(0): num.toFixed(0)
        }

        const getTime = () => {
            const remindTime = endTime - Date.now()

            if(remindTime <= 0)
                return setTime(initialValue)
            else {
                let hours = Math.floor(
                    (remindTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
                );
                const minutes = Math.floor((remindTime % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((remindTime % (1000 * 60)) / 1000);

                setTime({
                    hours: addZero(hours), 
                    minutes: addZero(minutes), 
                    seconds: addZero(seconds)
                })
            }
            
        }

        const interval = setInterval(getTime, 1000)

        return () => clearInterval(interval)
    }, [endTime])

    return time
} 