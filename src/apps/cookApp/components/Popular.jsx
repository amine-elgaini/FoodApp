import { Splide, SplideSlide } from '@splidejs/react-splide';
import { useEffect, useState } from 'react';
import '@splidejs/splide/dist/css/splide.min.css';
import ProductCard from './ProductCard';
import { Link, useNavigate } from 'react-router-dom';


function Popular() {
  const navigate = useNavigate();
  const [popular, setPopular] = useState([]);
  const getPopular = async () => {
    // const check = localStorage.getItem('popular');
    // if (check) {
    //   setPopular(JSON.parse(check));
    // } else {
        const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=01413253735042a88adb7b85f4b69403&number=9`)
        const data = await api.json();
        if (data.status === 'failure') {
          navigate('/FoodApp/redirect');
        } else {
          setPopular(data.recipes);
        }
    //   localStorage.setItem('popular', JSON.stringify(data.recipes));
    // }
  }


  useEffect(()=>{
    getPopular();
  }, [])

  return (
    <>
      <h1>Popular</h1>
      <br />
      <Splide options={ {
        perPage: 5,
        gap: 10,
        breakpoints: {
          768: {
            perPage: 3,
          },
          450: {
            perPage: 2,
          },
          300: {
            perPage: 1,
          },
        },
      } } >
        {popular.map((recipe, i)=>{
          return (
            <SplideSlide key={i}>
              <Link key={i} to={`/FoodApp/ProductDetails/${recipe.id}`}>
                <ProductCard product={recipe}/>
              </Link>
            </SplideSlide>
          )
        })}
      </Splide>
    </>
  )
}

export default Popular;