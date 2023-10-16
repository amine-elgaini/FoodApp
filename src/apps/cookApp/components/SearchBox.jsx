import { useEffect, useState } from "react";

/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
export default function SearchBox({handleSearch, handleCuisine}) {
  const [input, setInput] = useState('');

  const handleSearchForm = (e) => {
    e.preventDefault();
    handleSearch(input);
  }

  return (
    <form onSubmit={handleSearchForm}>
      <label htmlFor="searchFood" className="block text-sm font-medium leading-6 text-gray-900">
        Foods
      </label>
      <div className="relative mt-1 rounded-md shadow-sm">
        <div className="pointer-events-none absolute inset-y-0 -left-2 flex items-center pl-3">
          <span className="text-gray-500 sm:text-sm">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" /></svg>
          </span>
        </div>
        <input
          type="text"
          name="searchFood"
          id="searchFood"
          className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          placeholder="Search"
          onChange={(e)=>setInput(e.target.value)}
        />
        <div className="border-l-2 absolute inset-y-0 right-0 flex items-center">
          <label htmlFor="cuisine" className="sr-only">
            Cuisine
          </label>
          <select
            id="cuisine"
            name="cuisine"
            className="overflow-auto h-full rounded-md border-0 bg-transparent py-0 pl-2 pr-7 text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
            onChange={(e)=>handleCuisine(e.target.value)}
          >
            <option value={''}>All</option>
            <option value={'Asian'}>Asian</option>
            <option value={'European'}>European</option>

          </select>
        </div>
      </div>
    </form>
  )
}
