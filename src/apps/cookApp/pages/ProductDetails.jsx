import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import ShowProductInfo from "../components/ShowProductInfo";

function ProductDetails() {
  const params = useParams();
  const [productDetails, setProductDetails] = useState({});

  const getProductDetails = async () => {
    // const check = localStorage.getItem('productDetails');
    // if (check) {
    //   setProductDetails(JSON.parse(check));
    // } else {
      const api = await fetch(`https://api.spoonacular.com/recipes/${params.id}/information?apiKey=f2b1f714e0964c57ad5c62db5f6a2455`)
      const data = await api.json();
      setProductDetails(data);
      // localStorage.setItem('productDetails', JSON.stringify(data));
    // }
  }
  useEffect(()=>{
    getProductDetails();
  }, [])

  return (
    <div className="container mx-auto py-20 px-10 flex flex-wrap justify-center items-start gap-4">
      {Object.keys(productDetails).length !== 0 ? <>
        <img className="rounded-md sm:max-w-sm" src={productDetails.image} alt="" />
        <div className="flex-1">
          <ShowProductInfo productDetails={productDetails}/>
        </div>
      </> : ''}
    </div>



  )
}

export default ProductDetails