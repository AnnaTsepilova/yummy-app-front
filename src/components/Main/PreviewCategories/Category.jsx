import React from 'react';
import { RecipeCard } from './RecipeCard';
import { Link } from 'react-router-dom';
const Category = ({ data }) => {
  return (
    <>
      {' '}
      <Link
        to={`/categories/${data[0].charAt(0).toUpperCase() + data[0].slice(1)}`}
      >
        {data[0].charAt(0).toUpperCase() + data[0].slice(1)}
      </Link>
      <ul>
        {data[1].map(
          ({
            category,
            description,

            preview,
            time,
            title,
            _id,
          }) => (
            <li key={_id}>
              <RecipeCard
                id={_id}
                image={preview}
                altText={description}
                text={title}
              />
            </li>
          )
        )}
      </ul>
    </>
  );
};
export default Category;
