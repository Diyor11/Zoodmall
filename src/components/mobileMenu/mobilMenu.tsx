import {useEffect} from 'react'

import { NavLink } from 'react-router-dom'

import { MenuWrapper } from './mobilemenu.style'
import { useAppSelector } from '../../features/hooks'
import {useScroll} from '../../hooks'

const categories = [
  {name: 'Women\'s Clothing', path: '/'},
  {name: 'Women\'s Clothing', path: '/'},
  {name: 'Women\'s Clothing', path: '/'},
  {name: 'Women\'s Clothing', path: '/'},
  {name: 'Women\'s Clothing', path: '/'},
  {name: 'Women\'s Clothing', path: '/'},
  {name: 'Women\'s Clothing', path: '/'},
  {name: 'Women\'s Clothing', path: '/'},
  {name: 'Women\'s Clothing', path: '/'},
  {name: 'Women\'s Clothing', path: '/'},
  {name: 'Women\'s Clothing', path: '/'},
  {name: 'Women\'s Clothing', path: '/'},
  {name: 'Women\'s Clothing', path: '/'},
  {name: 'Women\'s Clothing', path: '/'},
]

export default function MobilMenu() {

  const {navOpen, navPosition} = useAppSelector(state => state.modals)
  const {setScroll} = useScroll()

  console.log(navPosition)

  useEffect(() => {
    setScroll(!navOpen)
  }, [navOpen, setScroll])

  return (
    <MenuWrapper open={navOpen} positions={navPosition}>
      <div className="content">
        <ul>
          {categories?.map((category, i) => (
            <li key={i}>
              <NavLink to={category.path}>{category.name}</NavLink>
            </li>
          ))}
        </ul>
      </div>
    </MenuWrapper>
  )
}
