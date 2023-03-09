import {IConstants} from '../interfaces/contants'

type VarableFunction<T> = ({theme}: {theme: IConstants & T}) => string

export default function getVarable<T>(...args: string[]): VarableFunction<T> {
    return (data) => {
        let output: any = data
        for(let property of args) {
            output = output[property]
        }
        return output
    } 
}