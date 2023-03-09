import {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import {ElMenubox, Accordion, AccordionButton} from '../products.style'
import {AccordionSummary, Typography, AccordionDetails} from '@mui/material'
import {menuData} from '../../../data/menuData'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { NavLink } from 'react-router-dom';
// import {} from '../../../hooks'

export default function MenuBox() {

  const {name: pathName} = useParams()
  const [isOpenMenu, setIsOpenMenu] = useState<boolean>(true)

  useEffect(() => {
    const handler = () => {
      const windowWith = window.innerWidth
      const mdBreakpoint = 900

      if(windowWith < mdBreakpoint) {
        setIsOpenMenu(false)
      }
    }
    handler()

    window.addEventListener('resize', handler)
    return () => window.removeEventListener('resize', handler)
  }, [])
    
  return (
    <ElMenubox>
      <Accordion  className='mini-accordion' expanded={isOpenMenu}>
        <AccordionSummary
          aria-controls="panel1a-content"
          id="panel1a-header"
          onClick={() => setIsOpenMenu(p => !p)}
        >
          <div className='trigger-title accordion-text'>
            <span>{pathName}</span>
          </div>
        </AccordionSummary>
        <AccordionDetails>
          {menuData.map(({link, text, submenu}, index) => (
            submenu ? (
              <Accordion key={index}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls={"panela-content" + index}
                  id={"panela-header" + index}
                >
                  <div className='accordion-text'>
                    <span>{text}</span>
                  </div>
                </AccordionSummary>
                <AccordionDetails>
                  <ul>
                    {submenu.map(({text, link}, i) => (
                      <li key={i}>
                        <AccordionButton>
                          <NavLink to={link}> 
                            {text}
                          </NavLink>
                        </AccordionButton>
                      </li>
                    ))}
                  </ul>
                </AccordionDetails>
              </Accordion>
            ): (
              <Accordion key={index}>
                <NavLink to={link}>
                  <AccordionSummary>
                    <Typography>{text}</Typography>
                  </AccordionSummary>
                </NavLink>
              </Accordion>
            )
          ))}
        </AccordionDetails>
      </Accordion>
    </ElMenubox>
  )
}
