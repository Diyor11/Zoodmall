import {IConstants} from '../interfaces/contants'

type VarableFunction = ({theme}: {theme: IConstants}) => string

export default function getVarable(...args: string[]): VarableFunction {
    return (data) => {
        let output: any = data
        for(let property of args) {
            output = output[property]
        }
        return output
    } 
}