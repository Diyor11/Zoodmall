import {useEffect, useState} from 'react'
import { NavLink } from 'react-router-dom';
import { Grid } from '@mui/material';
import { ElWrapper } from './suggest.styles'
import { ElContainer } from '../../core-ui/container.styles';
import ArrowRight from '../../assets/icons/arrowRight'

import ProductCard from '../prodcutCard/productCard'
// import {topProducts} from '../../data/topProducts'
import {ProductsType} from '../../interfaces/product' // import local products
import { getCollection } from '../../services/firebase';

interface MainProps{
    title: string;
    seeAllUrl: string;
    getDataUrl: string,
}

export default function Suggest({getDataUrl, seeAllUrl, title}: MainProps) {
    const [products, setProducts] = useState<ProductsType>([])

    useEffect(() => {
        getCollection<ProductsType>(getDataUrl)
        .then(data => {
            setProducts(data)
        })
    }, [getDataUrl])

  return (
    <ElWrapper>
        <ElContainer>
            <div className="header">
                <h2 className="header-title">{title}</h2>
                <NavLink to={seeAllUrl} className='header-see_all'>
                    <p>Hammasini ko'rsatish</p>
                    <ArrowRight width={7} height={10} color={'#2d3092'} />
                </NavLink>
            </div>
            <div className="products">
                <Grid container spacing={2}>
                    {products?.map((data, index) => (
                        <Grid item xs={6} sm={4} md={3} key={index}>
                            <ProductCard key={index} {...data} />
                        </Grid>
                    ))}
                </Grid>
            </div>
        </ElContainer>
        
    </ElWrapper>
  )
}
