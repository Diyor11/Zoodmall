import { ElContainer } from '../../../../core-ui/container.styles'
import { ElNavbarTop, TopNavLink } from '../styles/navbar.top.styles'
import {Grid, Stack} from '@mui/material'
import {useNavigate} from 'react-router-dom'

import {languageMenuData} from '../../../../data/constants'

import EyeIcon from '../../../../assets/icons/eye'
import Dropdown, {DropdownItem as DropdownItemType} from './dropdown'
import StarIcon from '../../../../assets/icons/star'
import SaleBagIcon from '../../../../assets/icons/sale-bag'
import PersonIcon from "../../../../assets/icons/person"
import ExpandMoreIcon from '../../../../assets/icons/arrowDown'

const profileMenuData: DropdownItemType[] = [
  {id: 1, text: 'My Account', url: 'account/profile'},
  {id: 2, text: 'Dashboard', url: 'account/dashboard'},
]

export default function NavbarTop() {

  const navigate = useNavigate()

  return (
    <ElNavbarTop>
      <ElContainer noTopSpace>
        <Grid container>
          <Grid item md={8}>
            <Stack direction='row'>
              <TopNavLink href='/'>
                <div className="svg_icon">
                  <EyeIcon />
                </div>
                Hot Deals
              </TopNavLink>
              <TopNavLink href='/'>
                <div className="svg_icon">
                  <StarIcon />
                  Top Categories
                </div>
              </TopNavLink>
              <TopNavLink href='/'>
                <div className="svg_icon">
                  <SaleBagIcon width={10} height={12} />
                </div>
                Sell On ZoodMall
              </TopNavLink>
            </Stack>
          </Grid>
          <Grid item md={4}>
            <Stack direction='row' justifyContent='flex-end' sx={{gap: '0 7px'}}>
              <Dropdown
                icons={[<ExpandMoreIcon className='arrow-down' />]}
                label={languageMenuData[0].text}
                items={languageMenuData}
                selectable={true}
              >
                {(itemData, itemClick) => {
                  const {id, text} = itemData
                  const onClick = () => {
                    itemClick(id, text)
                    // language change function
                  }

                  return(
                    <li 
                      key={id} 
                      className='dropdown__item'
                      onClick={onClick}
                    >
                      {text}
                    </li>
                  )
                }}
              </Dropdown>
              <Dropdown 
                label="Name"
                icons={[<PersonIcon />, <ExpandMoreIcon className='arrow-down' />]}
                items={profileMenuData}
              >
                {(itemData, itemClick) => {
                  const {id, text} = itemData
                  const onClick = () => {
                    itemClick(id, text)
                    
                    if(itemData.url) 
                      navigate(itemData.url)
                  }

                  return(
                    <li 
                      key={id} 
                      className='dropdown__item'
                      onClick={onClick}
                    >
                      {text}
                    </li>
                  )
                }}
              </Dropdown>
            </Stack>
          </Grid>
        </Grid>
      </ElContainer>
    </ElNavbarTop>
  )
}
