import { useRef } from 'react'
import { NavLink } from 'react-router-dom'

import { ElContainer } from '../../../../core-ui/container.styles'
import { ElNavWrapper } from '../styles/navbar.middle.styles'
import { Badge } from '@mui/material'
import Dropdown from './dropdown'

import Brand from '../../../../assets/icons/brand'
import SearchIcon from '../../../../assets/icons/search'
import HeartIcon from '../../../../assets/icons/heart'
import SaleBag from '../../../../assets/icons/sale-bag'
import MenuIcon from '../../../../assets/icons/menu'
import ArrowDown from '../../../../assets/icons/arrowDown'

import { useAppDispatch } from '../../../../features/hooks'
import { switchNavOpen } from '../../../../features/modalsSlice/modalsSlice'

interface Props{
  scrolled?: boolean
}

export default function NavbarMiddle({scrolled}: Props) {

  const dispatch = useAppDispatch()
  const navRef = useRef<HTMLDivElement | null>(null)

  const toggleNav = () => {
    if(!scrolled && window.scrollY)
      window.scrollTo({top: 0, left: 0})
      
    const navbarHeight = navRef.current ? navRef.current.offsetHeight: 101
    dispatch(switchNavOpen({top: navbarHeight.toString()}))
  }

  return (
    <>
    <ElNavWrapper data-header-middle ref={navRef}>
      <ElContainer noTopSpace>
        <div className="header-middle__row">
          <div className="brand">
            <MenuIcon onClick={toggleNav} className='burger__menu'/>
            <NavLink to='/'>
              <Brand className='brand__icon'/>
            </NavLink>
            <Dropdown
                buttonContent={(
                  <>
                    <div className='dropdown__text'>EN</div>
                    <ArrowDown className='arrow-down' />
                  </>
                )}>
                <ul className='dropdown__menu'>
                    <li>RU</li>
                    <li>UZ</li>
                </ul>
              </Dropdown>
          </div>
          <div className="header__search">
            <form>
              <input type="text" placeholder='Search On ZoodMall' />
              <div className='header-search__icon'>
                <SearchIcon />
              </div>
            </form>
          </div>
          <div className="header__icons">
            <div className="header-icon__item">
              <Badge 
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }} 
                badgeContent={1} 
                className='custom__badge'>
                  <HeartIcon />
              </Badge>
            </div>
            <div className="header-icon__item">
              <Badge 
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }} 
                badgeContent={1} 
                className='custom__badge'>
                  <SaleBag />
              </Badge>
              <span className="header-icon__item__content">Cart</span>
            </div>
          </div>
        </div>
      </ElContainer>
    </ElNavWrapper>
    </>
  )
}
