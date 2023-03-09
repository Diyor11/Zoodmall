import bowl from '../assets/products/bowl.jpeg'
import lamp from '../assets/products/lamp.jpeg'
import spade from '../assets/products/spade.avif'
import soft from '../assets/products/textTile.avif'


import accumlator1 from '../assets/products/accumulator.jpeg'
import accumlator2 from '../assets/products/accumulator2.avif'
import accumlator3 from '../assets/products/accumulator3.avif'
import accumlator4 from '../assets/products/accumulator4.avif'

import basket from '../assets/images/icon-images/basket.png'
import comb from '../assets/images/icon-images/comb.png'
import menClothes from '../assets/images/icon-images/men-clothing.png'
import womanClothes from '../assets/images/icon-images/woman-clothing.png'
import watches from '../assets/images/icon-images/watchs.png'
import perfume from '../assets/images/icon-images/perfume.png'

import { ProductsType } from '../interfaces/product'

export const accumlators = [
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

export const topProducts: ProductsType = [
    {
      img: accumlator1, 
      title: 'Dekorativ idish', 
      price: 313500,
      oldPrice: 329500,
      badge: false,
      url: '/',
      instalment: {perMonth: 78375, period: 4},
      rating: false,
    },
    {
      img: accumlator2, 
      title: 'Namlagich diffusor chiroq bilan D-023B', 
      price: 360000,
      oldPrice: 400000,
      badge: false,
      url: '/',
      instalment: {perMonth: 90000, period: 4},
      rating: false,
    },
    {
      img: accumlator3, 
      title: 'Ko\'p funktsiyali yig\'iluvchi belkurak', 
      price: 340000,
      oldPrice: 370000,
      badge: false,
      url: '/',
      instalment: {perMonth: 85000, period: 4},
      rating: 5,
    },
    {
      img: accumlator4, 
      title: 'Matras yoping\'ich Emir textile', 
      price: 160000,
      oldPrice: 320000,
      badge: false,
      url: '/',
      instalment: {perMonth: 40000, period: 4},
      rating: 4,
    }
]

export const newProducts = [
  {img: basket, title: 'Uy uchun', url: '/#'},
  {img: comb, title: 'Go\'zallik', url: '/#'},
  {img: menClothes, title: 'Erkaklar kiyimi', url: '/#'},
  {img: womanClothes, title: 'Ayollar kiyimi', url: '/#'},
  {img: watches, title: 'Soatlar', url: '/#'},
  {img: perfume, title: 'Xushbo\'y hidlar', url: '/#'},
]