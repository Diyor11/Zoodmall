import React from 'react'

interface MainProps{
    space: number;
    width: number;
    img: string;
    status: string;
    skit: number;
    price: number;
    desc: string;
}

export default function PhoneCard({desc, img, price, skit, space, status, width}: MainProps) {
  
  return (
    <div>PhoneCard</div>
  )
}
