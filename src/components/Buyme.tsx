import Image from 'next/image'
import React from 'react'

interface props{
  width : number ;
  height : number ;
  id : string ;
}


function BuyMeCoffee({width = 200 , height = 50 , id }:props  ) {

  return (
    <div id={id}>
        <a href="https://www.buymeacoffee.com/vishal_rai" target="_blank">
        <Image src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" alt="Buy Me A Coffee" width={width} height={height} /></a>
    </div>
  )
}

export default BuyMeCoffee