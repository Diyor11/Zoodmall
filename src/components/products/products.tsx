import {useCallback, useEffect, useState} from 'react'
import {Grid, Stack} from "@mui/material/";
import { Loader } from "../../core-ui/loader";
import ProductCard from '../../components/prodcutCard/productCard';
import { ElWrapper, LoadButton } from "./products.styles";
import {ProductsType} from '../../interfaces/product'

import bowl from '../../assets/products/bowl.jpeg'
import lamp from '../../assets/products/lamp.jpeg'
import spade from '../../assets/products/spade.avif'
import soft from '../../assets/products/textTile.avif'

const data: ProductsType = [
  {
    img: bowl, 
    title: 'Simsiz portativ akkumulyator Magsafe Green GNMAGPB10KBK 10000mAh', 
    price: 395000,
    oldPrice: 450000,
    badge: false,
    url: '/',
    instalment: {perMonth: 98750, period: 4},
    rating: false,
  },
  {
    img: lamp, 
    title: 'Portativ akkumulyator raqamli displeyli Baseus Bipow 20000mah 15W', 
    price: 370000,
    oldPrice: false,
    badge: false,
    url: '/',
    instalment: {perMonth: 92500, period: 4},
    rating: 5,
  },
  {
    img: spade, 
    title: 'Portativ akkumulyator Baseus Bipow Digital Display  30000mAh 20W', 
    price: 473000,
    oldPrice: false,
    badge: false,
    url: '/',
    instalment: {perMonth: 118250, period: 4},
    rating: false,
  },
  {
    img: soft, 
    title: 'Portativ akkumulyator Hoco J62 universal 30000 mA / soat chiroq bilan + sovg\'a sifatida telefon stendi', 
    price: 379000,
    oldPrice: 415000,
    badge: false,
    url: '/',
    instalment: {perMonth: 94750, period: 4},
    rating: 4.8,
  },
]

type MainProps = {
  fetchUrl: string,
  breakPoints: {
    md: number,
    sm: number,
    xs: number
  },
}

export default function Products({fetchUrl, breakPoints}: MainProps) {

  const [products, setProducts] = useState<ProductsType>([])

  const getProducts = useCallback(async(skip: number, limit: number) => {

    // fetch(`${fetchUrl}?skip=${skip}&limit=${limit}`)
    //   .then(res => res.json())
    //   .then(data => {
        const responseData = [...data, ...data]
        setProducts(responseData)
      // })

  }, [])

  useEffect(() => {
    getProducts(0, 8)
  }, [getProducts])

  return (
    <>
    <ElWrapper>
        <Grid container spacing={2}>
          {products?.map((productData, index) => (
            <Grid {...breakPoints} item key={index}>
              <ProductCard {...productData} />
            </Grid>
          ))}
        </Grid>
        <Stack sx={{display: 'flex'}} mt='1rem'>
          <LoadButton disabled={true}>
            <Loader color='#fff'>
              {Array(9).fill('').map((_, idx) => (
                <div key={idx} className="spinner_item"></div>
              ))}
            </Loader>
            <span>Ko'proq yuklash</span>
          </LoadButton>
        </Stack>
    </ElWrapper>
    </>
  )
}
