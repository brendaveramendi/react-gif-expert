import { useState } from "react";
import { AddCategory, GifGrid } from "./Components";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState([
    "Final Space"
  ]);

  const addCategories = (oneCategory) => {
    if (categories.includes(oneCategory)) return;
    setCategories([oneCategory, ...categories ]);
  };
  return (
    <>
      <h1>GIFF</h1>
      <AddCategory onNewValue={addCategories} />
        {categories.map((category) => (
        <GifGrid 
        key={category} 
        category={category}/>)
        )}
    </>
  );
};
