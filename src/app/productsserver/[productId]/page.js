import React from 'react'; 

async function productList(productId){
  const response = await fetch(`https://dummyjson.com/products/${productId}`)  
  const responseJson = await response.json()   
  return responseJson;
}


export async  function generateMetadata({ params }){ 
  console.log("params params", params);
  const { productId } = await params;
  const response = await fetch(`https://dummyjson.com/products/${productId}`)  
  const responseJson = await response.json()  
  return{
      title:`product | ${responseJson.title}`, 
      description: "this is description",
      openGraph: {
          title: responseJson.title,
          description: responseJson.description, 
          images: [responseJson.thumbnail],
        }
  }
}

const Page = async({ params }) => {
  const { productId } = await params; 
  const productData = await productList(productId)
  return (
    <>  
      <div className="container">
        <div>
          <img src={productData.thumbnail} alt="hello" style={{width:"150px"}} />
        </div>
        <p>{productData.title}</p>
      </div>
    </>
  );
};

export default Page;
