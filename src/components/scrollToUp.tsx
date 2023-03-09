import {useEffect} from 'react'
import {useLocation} from 'react-router-dom'

export default function ScrollToUp() {

  const location = useLocation()

  useEffect(() => {
    window.scrollTo({behavior: 'smooth', left: 0, top: 0})
  }, [location])

  return null;
}
