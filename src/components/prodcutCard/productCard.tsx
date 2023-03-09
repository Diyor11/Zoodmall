import { ElProductCard } from './productCard.style';
import {getCommas} from '../../utils'

import {ProductType} from '../../interfaces/product'
// default images
import zoodmallMini from '../../assets/icons/zoodpay_logo_mini.png'
import flag from '../../assets/icons/flag.png'


export default function ProductCard({img, title, price, oldPrice, instalment, rating}: ProductType) {

    const calculateDiscount = (current: number, old: number) => {
        return Math.ceil((old -current) / (old / 100))
    }

    const getEmoje = (rating: number) => {
        if(rating > 4.5) return '🤩'
        else if(rating > 3.5) return '😊'
        else if(rating > 3.5) return '😐'
        else if(rating > 2.5) return '🙁'
        return '😞'
    }

  return (
    <ElProductCard to='/product/s5a8d1s2d8sd28s2ds6'>
        <img className='product_img' src={img} width="225" height="222" alt={title} />
        <div className="body">
            <div className="title">{title}</div>
            <div className="price">
                <b>UZS {getCommas(price)}</b>
            </div>
            {oldPrice && (
                <div className="old-price">
                    <p>UZS {getCommas(oldPrice)}</p>
                    <div className="discount">-{calculateDiscount(price, oldPrice)}%</div>
                </div>
            )}
            {instalment !== false && (
                <div className="mini-payment">
                    <p className="price">
                        <img src={zoodmallMini} alt="zoodmall" width="15" height="15" />
                        <span>UZS {instalment.perMonth}</span>
                    </p>
                    <span className='period'>X {instalment.period}</span>
                </div>
            )}
            <div className="rating">
                {rating && (<>
                    <i>{getEmoje(rating)}</i>
                    <span>{rating}</span>
                </>)}
                <img src={flag} alt="flag" width="19" height="10"/>
            </div>
        </div>
    </ElProductCard>
  )
}
