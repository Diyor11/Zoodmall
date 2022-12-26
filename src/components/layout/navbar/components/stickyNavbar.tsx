import {useEffect, useState} from 'react'

import NavbarMiddle from "./navbarMiddle"

import { StickyWrapper } from '../styles/sticky.navbar.styles'

export default function StickyNavbar() {

  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', (e) => {
      if(window.scrollY > 170)
        setScrolled(true)
      else 
        setScrolled(false)
    })
  }, [])

  return (
    <StickyWrapper scrolled={scrolled}>
        <NavbarMiddle scrolled={scrolled} />
    </StickyWrapper>
  )
}
