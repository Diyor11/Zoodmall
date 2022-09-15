import {useState} from 'react'
import { NavLink } from 'react-router-dom'

import { MeinMenu, AllCategoryButton, MenuWrapper } from '../styles/navbar.menu.styles'
import { ElContainer } from '../../../core-ui/container.styles'

import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import MenuIcon from '../../../assets/icons/menuIcon'
import MenuModal from './menuModal'


export default function NavbarMenu() {

  const [openModal, setOpenModal] = useState<boolean>(false)

  const getOpenModal = () => setOpenModal(true)

  return (
    <MenuWrapper className='header__menu'>
      <ElContainer>
        <div className="main-menu">
          <MeinMenu>
            <li className='menu__item' onMouseOver={getOpenModal}>
              <AllCategoryButton active={openModal}>
                <MenuIcon />
                <span>All Categories</span>
                <ExpandMoreIcon className='arrow-down' />
              </AllCategoryButton>
            </li>
            <li className='menu__item'>
              <NavLink to='/'>Women's Clothing</NavLink>
            </li>
            <li className='menu__item'>
              <NavLink to='/'>Men's Clothing</NavLink>
            </li>
            <li className='menu__item'>
              <NavLink to='/'>Phones & Accessories</NavLink>
            </li>
            <li className='menu__item'>
              <NavLink to='/'>Compyuter & Office</NavLink>
            </li>
            <li className='menu__item'>
              <NavLink to='/'>Consumer & Electroncs</NavLink>
            </li>
          </MeinMenu>
        </div>
      </ElContainer>
      <MenuModal closeModal={() => setOpenModal(false)} active={openModal}/>
    </MenuWrapper>
  )
}
