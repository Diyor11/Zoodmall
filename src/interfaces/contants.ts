export type IConstants = {
    bg: {
        gray: string,
        mainBg: string,
        blue: string,
    }
    color: {
        mainColor: string,
        inputColor: string,
    }
}

export type VarableType<T = never> = IConstants & T