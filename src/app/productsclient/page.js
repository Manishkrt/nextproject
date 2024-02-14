"use client"
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

const page = () => {
    const [productData, setProductData] = useState([])
    const fetchData = async()=>{
        const response = await fetch('https://dummyjson.com/products') 
        const responseJson = await response.json() 
        const {products} = responseJson
        console.log("products", products);
        setProductData(products)
    }
    useEffect(()=>{
        fetchData()
    }, [])
  return (
    <div>
        <h5>product List Name</h5>
        <div className="table-responsive">
            <table className="table border">
                <tbody> 
                    {productData.map((productValue)=>{
                        return(
                            <tr key={productValue.id}>
                                <td>{productValue.title}</td>
                                <td><img src={productValue.thumbnail} alt="" style={{width:"120px"}}/></td>
                                <td><Link href={`/productsclient/${productValue.title}/${productValue.id}`}>Open</Link></td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default page