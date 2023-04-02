import React from 'react';
import { RecipeCard } from './RecipeCard';
import { Link } from 'react-router-dom';
import { SeeAllBtn } from 'components/Buttons/Buttons';
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
        {data[1]
          .slice(0, -3)
          .map(({ category, description, preview, title, _id }) => (
            <li key={_id}>
              <RecipeCard
                id={_id}
                image={preview}
                altText={description}
                text={title}
              />
            </li>
          ))}
      </ul>
      <SeeAllBtn
        href={`/categories/${
          data[0].charAt(0).toUpperCase() + data[0].slice(1)
        }`}
      >
        See all
      </SeeAllBtn>
    </>
  );
};
export default Category;
