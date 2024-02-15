import Link from "next/link";  

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
                                <td><img src={productValue.thumbnail} alt="hello" style={{width: "120px"}}/></td>
                                <td><Link href={`/productsserver/${productValue.id}`}>Open</Link></td>
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



export  function generateMetadata(props){ 
    return{
        title:"home", 
        description: "this is description",
        openGraph: {
            title: 'this is open graph title for testing',
            description: 'Some description', 
            images: ['https://images.unsplash.com/photo-1682695795557-17447f921f79?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'],
          }
    }
  }
   