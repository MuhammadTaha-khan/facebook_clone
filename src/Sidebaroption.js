import { Avatar } from '@mui/material'
import React from 'react'
import "./css/Sidebaroption.css"

function Sidebaroption({src,Icon,title}) {
  return (
    <div className='Sidebaroption'>
      {src && <Avatar src={src}/>}
      {Icon && <Icon/>}
      <p>{title}</p>
    </div>
  )
}

export default Sidebaroption
