import React, { useEffect, useState } from 'react';
import { getMainPageAPI } from 'service/API/dishesApi';
import Category from './Category';
// import { RecipeCard } from './RecipeCard';

const PreviewCategories = () => {
  const [allCategories, setAllCategories] = useState([]);

  useEffect(() => {
    getMainPageAPI().then(data => {
      const dishArray = Object.entries(data);
      console.log('log eff', dishArray);
      setAllCategories(dishArray);
      // console.log('log eff', data);
    });
  }, []);
  return (
    <div>
      {allCategories.map((item, index) => (
        <Category key={index} data={item} />
      ))}
    </div>
  );
};

export default PreviewCategories;
