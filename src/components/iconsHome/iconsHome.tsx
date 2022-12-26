import cashback from '../../assets/images/icon-images/cashback.png'
import chine from '../../assets/images/icon-images/chine.png'
import installment from '../../assets/images/icon-images/installment.png'
import promotions from '../../assets/images/icon-images/promotions.png'

import { ElContainer } from '../../core-ui/container.styles'
import {ElWrapper} from './icons.home.styles'

const imageIcons = [
  {src: cashback, label: 'Cashback 10%'},
  {src: installment, label: 'Installment'},
  {src: chine, label: 'Best From China'},
  {src: promotions, label: 'Promotions🔥'},
] 

export default function IconsHome() {
  return (
      <ElContainer>
        <ElWrapper>
          {imageIcons.map(({src, label}) => (
            <a href='/#' key={label} className="icons-home_item">
              <img src={src} alt={label} />
              <span className="label">{label}</span>
            </a>
          ))}
        </ElWrapper>
      </ElContainer>
  )
}
