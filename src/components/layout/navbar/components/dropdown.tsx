import {useState, ReactNode, useEffect, useRef, ReactElement} from 'react'

import {DropDown} from '../styles/navbar.top.styles'

interface DropdownProps{
    children: ReactNode;
    buttonContent: string | ReactElement
}

export default function Dropdown({children, buttonContent}: DropdownProps) {

    const [dropdown, setDropwdown] = useState(false)
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

  return (
    <DropDown data-dropdown active={dropdown} ref={dropdownToggle}>
        <div className='dropdown__button' data-dropdown-button onClick={handleClick}>
            {buttonContent}
        </div>
        <>
            {children}
        </>  
    </DropDown>
  )
}
