import Link from "next/link"; 
import Image from 'next/image';

async function productList(){
    const response = await fetch('https://dummyjson.com/products') 
        const responseJson = await response.json() 
        const {products} = responseJson 
        return products;
}

const page = async() => {
    const productData = await productList() 
  return (
    <>
        
        <h1 className="container">products server</h1>
        <div className="table-responsive">
            <table className="table border">
                <tbody> 
                    {productData.map((productValue)=>{
                        return(
                            <tr key={productValue.id}>
                                <td>{productValue.title}</td>
                                <td><Image src={productValue.thumbnail} alt="" style={{width:"120px"}}/></td>
                                <td><Link href={`/productsserver/${productValue.title}/${productValue.id}`}>Open</Link></td>
                            </tr>
                        )
                    })}
                </tbody> 
            </table>
        </div>
    </>
  )
}

export default page

// export function generateMetadata(){
//     return{
//         title:"new title",
//         description: "this is description",
//         openGraph: {
//             title: 'this is open graph title for testing',
//             description: 'Some description',
//           }
//     }
// }

// export const metadata = {
//     title:"hello",
//     openGraph: {
//       title: 'this is open graph title for testing',
//       description: 'Some description',
//     }
//   };