import React from 'react'
import { imageBag } from '../../Const'

const BannerPizza = () => {
  return (
    <div style={{width: '100%', backgroundColor: '#414142'}}>
        <img src={imageBag.banner_pizza} alt='banner' style={{maxHeight: '100vh',
    objectFit: 'cover', height: '23rem', width: '100%'}} />
    </div>
  )
}

const BannerPizza02 = () => {
  return (
    <div style={{width: '100%', backgroundColor: '#414142'}}>
        <img src={imageBag.banner_pizza_02} alt='banner' style={{maxHeight: '100vh',
    objectFit: 'cover', height: '23rem', width: '100%'}} />
    </div>
  )
}

export default {BannerPizza, BannerPizza02}