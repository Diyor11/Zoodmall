import {useEffect} from 'react'

import { NavLink } from 'react-router-dom'

import { MenuWrapper } from './mobilemenu.style'
import { useAppSelector, useAppDispatch } from '../../features/hooks'
import {useScroll} from '../../hooks'
import { switchNavOpen } from '../../features/modalsSlice/modalsSlice'

const categories = [
  {name: 'Ayollar kiyimlari', path: '/category/womens-clothing'},
  {name: 'Erkaklar kiyimlari', path: '/'},
  {name: 'Telefonlar va aksessuarlar', path: '/'},
  {name: 'Kompyuter va ofis', path: '/'},
  {name: 'Maishiy elektronika', path: '/'},
  {name: 'Zargarlik buyumlari va aksessuarlar', path: '/'},
  {name: 'Uy va bogʻ', path: '/'},
  {name: 'Сhamadonlar va sumkalar', path: '/'},
  {name: "O'yinchoqlar", path: '/'},
  {name: 'Sport va faol dam olish', path: '/'},
  {name: "Go'zallik va sog'liq", path: '/'},
  {name: 'Avto va Moto mahsulotlar', path: '/'},
  {name: 'Uy Jihozlari', path: '/'},
  {name: 'Soch oʻstirish va pariklar', path: '/'},
]

export default function MobilMenu() {

  const {open: navOpen, top: navFromTop} = useAppSelector(state => state.modals.navbar)
  const {setScroll} = useScroll()
  const dispatch = useAppDispatch()

  useEffect(() => {
    setScroll(!navOpen)
  }, [navOpen, setScroll])

  const closeMenu = () => {
    dispatch(
      switchNavOpen(false)
    )
  }

  return (
    <MenuWrapper open={navOpen} positions={{top: navFromTop}}>
      <div className="content">
        <ul>
          {categories?.map((category, i) => (
            <li key={i} onClick={closeMenu}>
              <NavLink to={category.path}>{category.name}</NavLink>
            </li>
          ))}
        </ul>
      </div>
    </MenuWrapper>
  )
}
