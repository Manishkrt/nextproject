import React from 'react'

const page = ({params}) => { 
    const {product} = params
  return (
    <div> 
        <p>{product[0]}</p>
        <p>{product[1]}</p>
    </div>
  )
}

export default page