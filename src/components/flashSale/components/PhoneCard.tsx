import { Card } from '../flash.sale.styles';
import phoneImg from '../../../assets/products/phone1.jfif'

interface MainProps{
    // space: number;
    // width: number;
    // img: string;
    // status: string;
    // skit: number;
    // price: number;
    // desc: string;
}

export default function PhoneCard(
  // {desc, img, price, skit, space, status, width}: MainProps
) {
  
  return (
    <Card to='/#'>
      <div className='flash'>
        <img className='flash-img' src={phoneImg} alt="phone" width="50" height="50" />
        <div className="flash-data">
          <h3 className="flash-data__title">
            Smartfon Honor 70 8/128Gb, Global, Qora 1
          </h3>
          <div className="flash-data__credentials">
            <div className="flash-data__credentials-price">
              <div className="new-price">UZS 3,894,000</div>
              <div className="old-price">UZS 5,799,000</div>
            </div>
            <div className="discount">-8%</div>
          </div>
          <div className="progressbar"></div>
        </div>
        <div className="flash-badge">Eng zo'r narxda</div>
      </div>
    </Card>
  )
}
