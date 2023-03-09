import styled, { keyframes } from 'styled-components'
import { getVarable } from '../utils'

const loadSpinnerAnim = keyframes`
    0% {
        opacity: 1;
    }
    100% {
        opacity: 0;
    }
`

export const Loader = styled.div`
  display: inline-block;
  position: relative;
  width: 12px;
  height: 12px;

.spinner_item{
  transform-origin: 6px 6px;
  animation: ${loadSpinnerAnim} 0.9s linear infinite;

  &:after{
    content: "";
    position: absolute;
    top: 0px;
    left: 50%;
    transform: translateX(-50%);
    width: .4px;
    height: 4px;
    border-radius: 0.2px;
    background: ${getVarable('color') || '#000'};
  }

    &:nth-child(1) {
        transform: rotate(0deg);
        animation-delay: -0.8s;
    }
    &:nth-child(2) {
        transform: rotate(40deg);
        animation-delay: -0.7s;
    }
    &:nth-child(3) {
        transform: rotate(80deg);
        animation-delay: -0.6s;
    }
    &:nth-child(4) {
        transform: rotate(120deg);
        animation-delay: -0.5s;
    }
    &:nth-child(5) {
        transform: rotate(160deg);
        animation-delay: -0.4s;
    }
    &:nth-child(6) {
        transform: rotate(200deg);
        animation-delay: -0.3s;
    }
    &:nth-child(7) {
        transform: rotate(240deg);
        animation-delay: -0.2s;
    }
    &:nth-child(8) {
        transform: rotate(280deg);
        animation-delay: -0.1s;
    }
    &:nth-child(9) {
        transform: rotate(320deg);
        animation-delay: -0s;
    }
}
`