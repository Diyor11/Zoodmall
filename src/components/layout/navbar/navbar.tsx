import NavbarTop from './components/navbarTop'
import NavbarMiddle from './components/navbarMiddle'
import NavbarMenu from './components/navbarMenu'
import StickyNavbar from './components/stickyNavbar'

export default function Navbar() {

  return (
    <>
        <StickyNavbar />
        <NavbarTop />
        <NavbarMiddle />
        <NavbarMenu />
    </>
  )
}
