import {Grid, Divider} from '@mui/material/'
import {ElContainer} from '../../../core-ui/container.styles'
import {ElFooter} from './footer.style'

import Brand from '../../../assets/icons/brand'
import YoutubeIcon from '../../../assets/icons/youtube'
import FacebookIcon from '../../../assets/icons/facebook'
import InstagramIcon from '../../../assets/icons/instgaram'
import TiktokIcon from '../../../assets/icons/tiktok'
import TelegramIcon from '../../../assets/icons/telegram'
import MessageIcon from '../../../assets/icons/message'

import HumoImg from '../../../assets/images/icon-images/humo.png'
import UZcardImg from '../../../assets/images/icon-images/uzcard.png'

const socialLinks = [
  {href: '/', Icon: YoutubeIcon},
  {href: '/', Icon: FacebookIcon},
  {href: '/', Icon: InstagramIcon},
  {href: '/', Icon: TiktokIcon},
  {href: '/', Icon: TelegramIcon},
]

const footerLinks = [
  {label: 'ZoodMall haqida', href: '/'},
  {label: 'Foydalanish shartlari', href: '/'},
  {label: 'Maxfiylik va xavfsizlik siyosati', href: '/'},
  {label: 'Mahsulotlarni va toʻlovlarni qaytarish siyosati', href: '/'},
  {label: 'ZOODMALLDA SOTISH', href: '/'},
  {label: 'Careers', href: '/'},
]

export default function Footer() {
  return (
    <ElFooter>
      <ElContainer>
        <Grid alignItems={'center'} justifyContent='space-between' container className='footer-top'>
          <Grid item md={5} sm={7} xs={12}>
            <a href="/" className='footer-brand'>
              <Brand className='footer-brand_svg'/>
            </a>
            <div className="socialblock">
              <b>Biz ijtimoiy tarmoqlarda</b>
              <div className="socialblock__container">
                {socialLinks.map(({href, Icon}, index) => (
                  <span key={index}>
                    <a href={href} className='socialblock-icon'><Icon /></a>
                  </span>
                ))}
              </div>
            </div>
            <div className="footer_mobile-apps">
              <b>Mobil ilovamizni yuklab oling</b>
              <a href="https://app.adjust.com/n4vf16z" rel="noreferrer" target="_blank"> <img src="https://static.zoodmall.uz/_nuxt/img/appStore_uz.4f9c0e1.svg" alt="apple.svg" width="120" height="70" /></a>
              <a href="https://app.adjust.com/18pzhx4" rel="noreferrer" target="_blank"><img src="https://static.zoodmall.uz/_nuxt/img/playStore_uz.46b748a.svg" alt="playmarket.svg" width="120" height="70" /></a>
            </div>
          </Grid>
          <Grid item md={3} sm={5} xs={12}> 
            <div className="footer-links">
                {footerLinks.map(({label, href}, index) => (
                  <a href={href} key={index}>{label}</a>
                ))}
            </div>
          </Grid>
          <Grid item md={2} xs={12}>
            <div className="footer-contacts">
              <p>Aloqa</p>
              <div className="footer-contacts_chat">
                <button>
                  <MessageIcon />
                </button>
                <span>Savolingiz bormi</span>
              </div>
              <button className="footer-contacts_btn">Savol bering.</button>
            </div>
          </Grid>
        </Grid>
        <Divider className='footer-divider' />
        <div className="footer-bottom">
          <p className="coyp">© 2020 ZoodMall quvonchli xaridlar</p>
          <div className="footer-bottom_payment">
            <div className="footer-bottom_payment-item">
              <Brand className='zoodmall-brand' />
            </div>
            <div className="footer-bottom_payment-item">
              <img src={UZcardImg} width="70" alt="uzcard" />
            </div>
            <div className="footer-bottom_payment-item">
              <img src={HumoImg} alt="humo" width="70" />
            </div>
          </div>
        </div>
      </ElContainer>
    </ElFooter>
  )
}
