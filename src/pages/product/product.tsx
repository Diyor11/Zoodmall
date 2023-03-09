import React from 'react'
import { ElContainer } from '../../core-ui/container.styles'
import {ElProduct} from './product.style'
import { Grid } from '@mui/material'
import ImageGalery from './components/imageGalery'
import ProductContent from './components/productContent'
import { Suggest } from '../../components'

function Product() {
  return (
    <ElProduct>
      <ElContainer>
        <Grid container columnSpacing={5}>
          <Grid item xs={12} md={4}>
            <ImageGalery />
          </Grid>
          <Grid item xs={12} md={8}>
            <ProductContent />
          </Grid>
        </Grid>
      </ElContainer>
      <Suggest 
        getDataUrl="products-accumlaters" 
        seeAllUrl='/'
        title="O'xshash mahsulotlar" 
      />
    </ElProduct>
  )
}

export default Product