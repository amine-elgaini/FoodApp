import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom"
import ShowProductInfo from "../components/ShowProductInfo";

function ProductDetails() {
  const navigate = useNavigate();
  const params = useParams();
  const [productDetails, setProductDetails] = useState({});

  const getProductDetails = async () => {
    // const check = localStorage.getItem('productDetails');
    // if (check) {
    //   setProductDetails(JSON.parse(check));
    // } else {
      const api = await fetch(`https://api.spoonacular.com/recipes/${params.id}/information?apiKey=01413253735042a88adb7b85f4b69403`)
      const data = await api.json();
      if (data.status === 'failure') {
        navigate('/FoodApp/redirect');
      } else {
        setProductDetails(data);
      }
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