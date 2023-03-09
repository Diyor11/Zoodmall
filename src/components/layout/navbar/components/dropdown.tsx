import {useState, ReactNode, useEffect, useRef} from 'react'

import {DropDown} from '../styles/navbar.top.styles'

export type DropdownItem = {
    id: number | string,
    text: string,
    url?: string, 
}

type ItemClick = (
    id: number | string, text: string
) => void

type ChildrenType = (
    itemData: DropdownItem, 
    itemClick: ItemClick
) => ReactNode;

interface DropdownProps{
    children: ChildrenType;
    icons?: JSX.Element | JSX.Element[];
    selectable?: boolean,
    items: DropdownItem[];
    label: string;
}

export default function Dropdown({
    children, 
    label ='', 
    icons, 
    selectable = false,
    items
}: DropdownProps) {

    const [dropdown, setDropwdown] = useState<boolean>(false)
    const [toggleText, setToggleText] = useState<string>(label)
    const dropdownToggle = useRef<HTMLDivElement | null>(null)

    const handleClick = () => setDropwdown(p => !p)

    useEffect(() => {
        const lisner = (e: any) => {
            const dropdownInside =  dropdownToggle?.current?.contains(e.target)
            if(!dropdownInside)
                setDropwdown(false)
        }
        document.addEventListener('click', lisner)
        return () => document.removeEventListener('click', lisner)
    }, [])

    const itemClick: ItemClick = (_, newLable) => {
        setDropwdown(false)

        if(selectable)
            setToggleText(newLable)
    }

  return (
    <DropDown data-dropdown active={dropdown} ref={dropdownToggle}>
        <div className='dropdown__button' data-dropdown-button onClick={handleClick}>
            <div className='dropdown__text'>{toggleText}</div>
            {icons && icons}
        </div>
        <ul className='dropdown__menu'>
            {items && items.map((itemData) => children(itemData, itemClick))}
        </ul>  
    </DropDown>
  )
}
