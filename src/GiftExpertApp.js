import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GiftExpertApp = () => {

   const [categories, setCategories] = useState(['Dragon Ball'])

   //const handleAdd = (element = 'Naruto') => {
   //   setCategories( [...categories, 'Naruto' ] );
      //setCategories();
   //}

   return (
      <>
         <h2>GiftExpertApp</h2>
         <AddCategory setCategories={setCategories}/>
         <hr />
         <ol>
            {
               categories.map( category => (
                  <GifGrid
                     key={category}
                     category={ category}
                  />
               ))
            }
         </ol>
      </>
   );
}