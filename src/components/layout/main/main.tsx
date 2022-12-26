import {MobilMenu} from '../../'

interface Props{
    children: React.ReactNode
}

export default function Main({children}: Props) {
  return (
    <main>
        {children}
      <MobilMenu />
    </main>
  )
}
