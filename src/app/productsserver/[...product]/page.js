import React from 'react'; 

const Page = ({ params }) => {
  const { product } = params;
  return (
    <>
      
      <p>{product[0]}</p>
      <p>{product[1]}</p>
    </>
  );
};

export default Page;
