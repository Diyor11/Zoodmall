import { ElContainer } from '../../core-ui/container.styles'

import {MobilMenu} from '../../components/'

interface Props{
    children: React.ReactNode
}

export default function Main({children}: Props) {
  return (
    <main>
      <ElContainer>
        {children}
      </ElContainer>
      <MobilMenu />
    </main>
  )
}
