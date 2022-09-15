import {useState, useEffect} from 'react'

export default function useScroll() {

    const [scroll, setScroll] = useState<boolean>(true)

    useEffect(() => {
        if(scroll) {
            document.body.removeAttribute('no-scroll')
        } else 
            document.body.setAttribute('no-scroll', '')
    }, [scroll])


  return {scroll, setScroll}
}
