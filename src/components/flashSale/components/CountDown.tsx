import {useState, useEffect} from 'react'
import {useCountdown} from '../../../hooks'
import {CountBoxes} from '../flash.sale.styles'


export default function CountDown() {

  const [endTime, setEndTime] = useState<number>(0)
  const {hours, minutes, seconds} = useCountdown({endTime: endTime})

  useEffect(() => {
    // fetch data
    setEndTime(Date.now() + 9999999)
  }, [])

  return (
    <CountBoxes >
        <li>{hours} <span>soatlar</span></li>
        <li>{minutes} <span>minutlar</span></li>
        <li>{seconds} <span>soniyalar</span></li>
    </CountBoxes>
  )
}
