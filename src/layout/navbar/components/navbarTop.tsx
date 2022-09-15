import { ElContainer } from '../../../core-ui/container.styles'
import { ElNavbarTop, TopNavLink } from '../styles/navbar.top.styles'
import {Grid, Stack} from '@mui/material'

import EyeIcon from '../../../assets/icons/eye'
import Dropdown from './dropdown'
import StarIcon from '../../../assets/icons/star'
import SaleBagIcon from '../../../assets/icons/sale-bag'
import PersonIcon from "../../../assets/icons/person"
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

export default function NavbarTop() {

  return (
    <ElNavbarTop>
      <ElContainer>
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
                buttonContent={(
                  <>
                    <div className='dropdown__text'>EN</div>
                    <ExpandMoreIcon className='arrow-down' />
                  </>
                )}>
                <ul className='dropdown__menu'>
                    <li>RU</li>
                    <li>UZ</li>
                </ul>
              </Dropdown>
              <Dropdown buttonContent={(
                <>
                  <div className='dropdown__text'>Diyor</div>
                  <PersonIcon />
                  <ExpandMoreIcon className='arrow-down' />
                </>
              )}>
                
                <ul className='dropdown__menu'>
                    <li>
                        My Account
                    </li>
                    <li>
                        Sign Out
                    </li>
                </ul>
              </Dropdown>
            </Stack>
          </Grid>
        </Grid>
      </ElContainer>
    </ElNavbarTop>
  )
}
