"use client"
import React from 'react'

const page = ({params}) => {
  console.log(params);
  return (
    <div>
      <h5>{params.news} {params.Id}</h5>
    </div>
  )
}

export default page