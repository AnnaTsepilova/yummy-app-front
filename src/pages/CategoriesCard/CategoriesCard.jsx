import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Loader from 'components/Loader/Loader';
import { RecipeCard } from 'components/Main/PreviewCategories/RecipeCard';

import { Table } from './CategoriesCard.styled';
import { getLimitedRecipes } from 'redux/commonRecipes/commonSelectors';
import { getLimitedRecipesByCategory } from 'redux/commonRecipes/commonOperations';

const CategoriesCard = () => {
  const dispatch = useDispatch();
  const { categoryName } = useParams();

  const limitedRecipes = useSelector(getLimitedRecipes);
  const isPending = useSelector(state => state.outerRecipes.isCategoryFetching);

  useEffect(() => {
    const params = { category: categoryName, limit: 8 };
    dispatch(getLimitedRecipesByCategory(params));
  }, [dispatch, categoryName]);

  return isPending ? (
    <Loader />
  ) : (
    <Table>
      {limitedRecipes
        ? limitedRecipes
            .slice(0, 8)
            .map(({ description, preview, title, _id }) => (
              <RecipeCard
                id={_id}
                image={preview}
                altText={description}
                text={title}
              />
            ))
        : null}
    </Table>
  );
};

export default CategoriesCard;
