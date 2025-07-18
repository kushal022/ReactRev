import React, { useCallback, useState } from 'react'
import FilterBar from './FilterBar';
import ProductList from './ProductList';

const initialProducts = [
  { id: 1, name: 'iPhone 15', category: 'Electronics' },
  { id: 2, name: 'Running Shoes', category: 'Sports' },
  { id: 3, name: 'Coffee Mug', category: 'Kitchen' },
  { id: 4, name: 'MacBook Air', category: 'Electronics' },
];

const AppFilterBar = () => {
    const [filter, setFilter] = useState('');
    const [favorites, setFavorites] = useState([]);

    const handleFilterChange = useCallback((text)=>{
        setFilter(text)
    },[])

    const toggleFavorite = useCallback((id)=>{
        setFavorites(prev=>
            prev.includes(id)?prev.filter(favId=>favId!==id):[...prev,id]
        )
        // console.log(filter)
    },[])

      const filteredProducts = initialProducts.filter(product =>
    product.name.toLowerCase().includes(filter.toLowerCase())
  );
    
  return (
    <div>
        <h4>Product List</h4>
        <FilterBar onFilterChange={handleFilterChange} filter={filteredProducts}/>
        <ProductList products={initialProducts} favorites={favorites} toggleFavorite={toggleFavorite}/>
    </div> 
  )
}

export default AppFilterBar

