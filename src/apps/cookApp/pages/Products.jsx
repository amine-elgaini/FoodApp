import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import SearchBox from "../components/SearchBox";
import { Link } from "react-router-dom";

function Products() {
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
      const api = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=f2b1f714e0964c57ad5c62db5f6a2455&query=${search}&cuisine=${cuisine}`)
      const data = await api.json();
      setProducts(data.results);
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
                <Link key={i} to={`/ProductDetails/${product.id}`}>
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