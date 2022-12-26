import {createContext, useContext} from 'react'

type Value = {
    width: number
}

type SwiperContextProviderProps = {
    children: React.ReactNode,
    value: Value
}
  
export const SwiperContext = createContext<Value | null>(null)

export const SwiperProvider = ({children, value}: SwiperContextProviderProps) => {

    return <SwiperContext.Provider value={value}>{children}</SwiperContext.Provider>
}

export const useSwipe = (): Value | null => useContext(SwiperContext)