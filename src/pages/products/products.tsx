import { Breadcrumbs } from './products.style'
import {useParams, useSearchParams} from 'react-router-dom'
import { ElContainer } from '../../core-ui/container.styles'
import { Button, Grid, Stack } from '@mui/material'
import MenuBox from './components/MenuBox'
import FilterBox from './components/FilterBox'
import { useEffect } from 'react'
import { SectionTitle } from '../../core-ui/globalStyles'
import SortBox from './components/SortBox'
import AllProducts from '../../components/products/products'
import { useAppDispatch } from '../../features/hooks'
import {switchFilterOpen} from '../../features/modalsSlice/modalsSlice'

function Products() {

  const {name: pathName} = useParams()
  const [serarchParams] = useSearchParams()
  const dispatch = useAppDispatch()

  useEffect(() => {
    // fetch data and filter products
    window.scrollTo({behavior: 'smooth', left: 0, top: 0})
  }, [pathName, serarchParams])

  const openFilterbox = () => {
    dispatch(switchFilterOpen(true))
  }

  return (
    <>
      <ElContainer>
        <Breadcrumbs>
          <div className='breadcrumbs'>
            <span className='breadcrumbs-item'>
              Zoodmall
            </span>
            /
            <span className='breadcrumbs-item'>{pathName?.replace('-', ' ')}</span>
          </div>
        </Breadcrumbs>
      </ElContainer>
      <ElContainer>
        <Grid container columnSpacing={4}>
          <Grid container item xs={12} md={3}>
              <Grid item xs={12}>
                <MenuBox />
              </Grid>
              <Grid item xs={12} mt={2} display={{md: 'block', xs: 'hidden'}}>
                <FilterBox />
              </Grid>
          </Grid>
          <Grid item xs={12} md={9}>
            <Stack direction={{md: 'row'}} justifyContent={'space-between'} >
              <SectionTitle>{pathName?.replace('-', ' ')}</SectionTitle>
              <Stack my={2} direction='row' justifyContent={'space-between'} >
                <Button onClick={openFilterbox} variant='contained' sx={{display: {md: 'none', xs: 'block', }}}>Filter</Button>
                <SortBox />
              </Stack>
            </Stack>
            <AllProducts fetchUrl='/' breakPoints={{xs: 6, sm: 6, md: 4}}/>
          </Grid>
        </Grid>
      </ElContainer>
    </>
  )
}

export default Products