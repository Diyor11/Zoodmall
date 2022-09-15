import { MenuModal } from '../styles/navbar.menu.styles'

import {ICategory} from '../../../interfaces/category'
import { NavLink } from "react-router-dom"

const categories: ICategory[] = [
    {
        name: 'Women\'s Clothing',
        path: '/'
    },
    {
        name: 'Women\'s Clothing',
        path: '/'
    },
    {
        name: 'Men\'s Clothing',
        path: '/'
    },
    {
        name: 'Phones & Accessories',
        path: '/'
    },
    {
        name: 'Compyuter & Office',
        path: '/'
    },
    {
        name: 'Consumer Electronics',
        path: '/'
    },
    {
        name: 'Home & Garden',
        path: '/'
    },
    {
        name: 'Luggage',
        path: '/'
    },
    {
        name: 'toys',
        path: '/'
    },
    {
        name: 'Phones & Accessories',
        path: '/'
    },
    {
        name: 'Compyuter & Office',
        path: '/'
    },
    {
        name: 'Consumer Electronics',
        path: '/'
    },
    {
        name: 'Home & Garden',
        path: '/'
    },
    {
        name: 'Luggage',
        path: '/'
    },
    {
        name: 'toys',
        path: '/'
    },
]

interface Props{
    closeModal: () => void,
    active: boolean
}

export default function MeneModal({closeModal, active}: Props) {

  return (
    <MenuModal active={active} onMouseLeave={closeModal}>
        <ul>
            {categories.map(({name, path}, i) => (
                <li key={i}>
                    <NavLink to={path}>{name}</NavLink>
                </li>
            ))}
        </ul>
    </MenuModal>
  )
}
