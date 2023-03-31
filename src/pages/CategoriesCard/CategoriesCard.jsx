import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Loader from 'components/Loader/Loader';
import { RecipeCard } from 'components/RecipeCard/RecipeCard';
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
    if (categoryName === 'desserts') {
      dispatch(getLimitedRecipesByCategory({ category: 'dessert', limit: 8 }));
    } else {
      dispatch(getLimitedRecipesByCategory(params));
    }
  }, [dispatch, categoryName]);

  return isPending ? (
    <Loader />
  ) : (
    <Table>
      {limitedRecipes.slice(0, 8).map(data => (
        <RecipeCard data={data} key={data._id} />
      ))}
    </Table>
  );
};

export default CategoriesCard;
