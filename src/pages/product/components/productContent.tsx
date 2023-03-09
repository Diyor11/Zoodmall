import {ChangeEvent, useState} from 'react'
import { ElProductContent, RadioButton } from '../product.style'
// import local brand svg icon
import ZoodpayIcon from '../../../assets/icons/brand'
// import mui componennts
import {Stack, Alert, Typography} from '@mui/material'
// Import icons
import {QueryBuilder} from '@mui/icons-material';
import {AiOutlineCodeSandbox} from 'react-icons/ai'
import {MdOutlineLocalShipping} from 'react-icons/md'
import {BsInfoCircleFill} from 'react-icons/bs'
// import payment images
import code from '../../../assets/images/icon-images/cod_uz.png'
import installment from '../../../assets/images/icon-images/installment_uz.png'
import pad from '../../../assets/images/icon-images/pad_uz.png'

import guarrentee from '../../../assets/icons/guarentee.svg'
import qrCode from '../../../assets/icons/uz_qrcode.svg'

type OptionsType = {
  color: string | null, 
  size: string | null
}

const data = {
  colors: ['black', 'white', 'green'],
  sizes: ['m', 'l', 'xl', 'xxl'],
}

export default function ProductContent() {
  const [options, setOptions] = useState<OptionsType>({color: null, size: null})
  const [count, setCount] = useState<number>(1)

  const maxCount = 9
  const minCount = 1


  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.target
    
    setOptions(prev => ({...prev, [name]: value}))
  } 

  const increaseCount = () => {
    if(count !== maxCount)
      setCount(p => ++p)
  }
  const decreaseCount = () => {
    if(count !== minCount)
      setCount(p => --p)
  }

  return (
    <ElProductContent>
        <h2 className="title">
            Terra pro uzun yengli ko'ylak, erkaklar uchun
        </h2>
        <Stack direction='row' alignItems='center' className="price">
            <div className="price-un_sale">UZS 143,000</div>
            <div className="price-sale">UZS 253,000</div>
            <div className="price-percentage">-43%</div>
        </Stack>
        <div className="product-detail price">
            <div className="price-actual_zoodpay">
              <ZoodpayIcon width='160' className='zoodpay icon' />
              <span>Muddatli to'lov</span>
              <BsInfoCircleFill className='info icon' />
            </div>
            <div className="price-actual">
              <span>UZS 35,750.00</span>x 4 to'lov
            </div>
            <div className="price-not">MOSLASHUVCHAN MUDDATLI TO'LOV REJASI</div>
        </div>  
        <div className="product-detail-options">
          <Stack direction='row' className='ranking'>
            <div className="product-detail-options-title">
              Baholar va fikrlar:
            </div>
            <div className="rank-mini">
              <div className="rank-mini_emoji">😊</div>
              <div className="rank-mini_count">&nbsp;4</div>
              <div className="rank-mini_all">
                /5 (
                <div className="rank-mini_reviews">
                  <span>1</span>&nbsp;<span>Mulohazalar</span>
                </div>
                )
              </div>
            </div>
          </Stack>
          <div className="shopping-mini">
            <div className="shopping-mini_data">
              <p className="delivery">
                <span>Tezkor yetkazib berish da O'zbekiston</span>
              </p>
              <p className="delivery-price">
                <MdOutlineLocalShipping />
                <span>... dan yetkazish UZS 26,450</span>
              </p>
              <p className="delivery-time">
                <QueryBuilder />
                <span>Taxminiy yetkazib berish Fev 22 - Fev 24</span>
              </p>
              <p className="fargo">
                <AiOutlineCodeSandbox />
                <span>Eshikkacha - orqali - Fargo</span>
              </p>
            </div>
          </div>
          <Stack mb='16px'>
            <Alert className='product-detail-options_alert' icon={<BsInfoCircleFill />} severity='info'>Sizning manzilingiz asosida hisoblangan yetkazib berish narxi va sanasi</Alert>
          </Stack>
          <Stack mb='16px'>
            <Typography>Color</Typography>
            <Stack direction='row'>
              {data.colors.map((val, index) => (
                <RadioButton key={index} checked={val === options.color} htmlFor={'color-input-' + val}>
                  <span className="el-radio__input">
                    <input onChange={onChange} className='radio-input' type="radio" name="color" id={'color-input-' + val} value={val} aria-hidden />
                    <span className="el-radio__inner"></span>
                  </span>
                  <span className="el-radio__label">{val}</span>
                </RadioButton>
              ))}
            </Stack>
          </Stack>
          <Stack mb='16px'>
            <Typography>Size</Typography>
            <Stack direction='row'>
              {data.sizes.map((val, index) => (
                <RadioButton key={index} checked={val === options.size} htmlFor={'size-input-' + val}>
                  <span className="el-radio__input">
                    <input onChange={onChange} className='radio-input' type="radio" name="size" id={'size-input-' + val} value={val} aria-hidden />
                    <span className="el-radio__inner"></span>
                  </span>
                  <span className="el-radio__label">{val}</span>
                </RadioButton>
              ))}
            </Stack>
          </Stack>
          <Stack direction='row' alignItems='center' className='product-detail-options_count'>
            <div className='row-title'>Miqdor:</div>
            <div className='buttons-group'>
              <span data-disable={count === minCount} className='product-count mines buttons-group_btn' onClick={decreaseCount}>-</span>
              <span data-disable={count === maxCount} className='product-count plus buttons-group_btn' onClick={increaseCount}>+</span>
              <input 
                type="text" 
                autoComplete="off" 
                max="9" 
                min="1" 
                role="spinbutton" 
                aria-disabled="false" 
                value={count}
                onChange={() => {}}
                className="el-input__inner"
              />            
            </div>
            <div className='stock-in'>Omborda mavjud</div>
          </Stack>
          <Stack direction='row' className='product-detail-options_buttons'>
            <div className="add-to_cart button">
              <span>Savatga qo'shish</span>
            </div>
            <div className="bay stick-block button">
              <span>Hoziroq xarid qilish uzs 0</span>
            </div>
          </Stack>
          <Stack direction='row' className='product-detail_payment'>
            <div>
              <img src={code} alt="" width='70' />
            </div>
            <div>
              <img src={installment} alt="" width='70' />
            </div>
            <div>
              <img src={pad} alt="" width='70' />
            </div>
          </Stack>
          <Stack className='product-detail_button'>
            <button className='guarantee'>
              <img src={guarrentee} alt="zoodmall guarentee" width='30' />
              <span>ZoodMall kafolati</span>
            </button>
          </Stack>
          <Stack className='product-detail-options_cashback'>
            <div className="promo-code">
              <div className='promo-code_text'>
                <p className='promo-code_title'>Ilovada 10% gacha cashback-ga ega bo‘ling</p>
                <p className='promo-code_desc'>Yuklash uchun skanerlang</p>
              </div>
              <div className='promo-code_qrcode'>
                <img src={qrCode} alt="zoodmall qrcode" width='100' />
              </div>
            </div>
          </Stack>
        </div>
    </ElProductContent>
  )
}
