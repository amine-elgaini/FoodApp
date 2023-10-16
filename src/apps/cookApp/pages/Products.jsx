import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import SearchBox from "../components/SearchBox";
import { Link, Navigate, useNavigate } from "react-router-dom";

function Products() {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState('');
  const [cuisine, setCuisine] = useState('');

  const handleSearch = (value) => {
    setSearch(value);
  }

  const handleCuisine = (value) => {
    console.log(value)
    setCuisine(value);
  }

  const getProducts = async () => {
    // const check = localStorage.getItem('randomProducts');
    // if (check) {
    //   setProducts(JSON.parse(check));
    // } else {
      const api = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=01413253735042a88adb7b85f4b69403&query=${search}&cuisine=${cuisine}`)
      const data = await api.json();
      if (data.status === 'failure') {
        navigate('/FoodApp/redirect');
      } else {
        setProducts(data.results);
      }
      // localStorage.setItem('randomProducts', JSON.stringify(data.results));
    // }
  }

  useEffect(()=>{
    getProducts();
  }, [search, cuisine])

  return (
    <>
    <div className="py-10 container">
      <div className="mx-auto max-w-sm">
        <SearchBox handleSearch={handleSearch} handleCuisine={handleCuisine}/>
      </div>
      <div className="mt-20 flex flex-wrap justify-center gap-5">
        {
          products.map((product, i)=>{
              return (
                <Link key={i} to={`/FoodApp/ProductDetails/${product.id}`}>
                  <ProductCard product={product}/>
                </Link>
              )
            })
        }
      </div>
    </div>
    </>
  )
}

export default Products