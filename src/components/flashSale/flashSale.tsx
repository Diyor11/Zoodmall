import { ElContainer } from '../../core-ui/container.styles'
import {ElWrapper, Content} from './flash.sale.styles'
import CountDown from './components/CountDown'
import {NavLink} from 'react-router-dom'

export default function FlashSale() {
  return (
    <ElWrapper>
      <ElContainer>
        <Content>
          <div className="text-content">
            <h2 className="text-content__title">Smartfonlar x12 -gacha muddatli to'lovga</h2>
            <CountDown />
            <NavLink to='/' className='text-content__btn show-more'>Boshqalarga ko'rsatish</NavLink>
          </div>
          <div className="corousel-container">
            {/* <Swiper */}
          </div>
        </Content>
      </ElContainer>
    </ElWrapper>
  )
}
