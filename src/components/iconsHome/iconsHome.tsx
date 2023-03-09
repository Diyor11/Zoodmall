import {useEffect, useState} from 'react'
import { ElContainer } from '../../core-ui/container.styles'
import {ElWrapper} from './icons.home.styles'
import {Grid} from '@mui/material'
import {SectionTitle} from '../../core-ui/globalStyles'
import { getCollection } from '../../services/firebase'

type ServiceType = {
  src: string,
  label: string
}

type BreakPointsType = {
  xs: number, 
  sm?: number, 
  md?: number
}

interface MainProps{
  spacing: number;
  breakpoints: BreakPointsType;
  itemClassName: string;
  getDataUrl: string;
  title?: string;
  // ElWrapper: React.FC<{children: React.ReactNode}>
}

export default function IconsHome(
  {
    getDataUrl, 
    spacing, 
    breakpoints, 
    itemClassName,
    title,
  }: MainProps
) {
  const [services, setServices] = useState<ServiceType[]>([])

  useEffect(() => {
    getCollection<ServiceType>(getDataUrl)
            .then(data => {
                setServices(data)
            })
  }, [getDataUrl])

  return (
      <ElWrapper>
        <ElContainer>
          {title && (<SectionTitle>{title}</SectionTitle>)}
          <Grid spacing={spacing} container justifyContent={'space-around'}>
            {services.map(({src, label} ,index) => (
              <Grid item {...breakpoints} key={index}>
                <a href='/#' className={itemClassName}>
                  <img src={src} alt={label} height="100" width="100" className={`${itemClassName}_image`} />
                  <span className={`${itemClassName}_label`}>{label}</span>
                </a>
              </Grid>
            ))}
          </Grid>
        </ElContainer>
      </ElWrapper>
  )
}
