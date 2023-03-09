import {IConstants} from '../interfaces/contants'

type VarableFunction<T = never> = (data: {theme: IConstants} & T) => {theme: IConstants} & T

export default function getVarables<T = never>(): VarableFunction<T> {
    return (data: {theme: IConstants} & T): {theme: IConstants} & T => {
        return data
    }
}