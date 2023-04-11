import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { NavDiv } from './Navigation.styled';
import { getRecipesBySearchQuery } from 'redux/commonRecipes/commonSelectors';

const Nav = () => {
  const recipesBySearchQuery = useSelector(getRecipesBySearchQuery);
  const resetSearch = () => {
    recipesBySearchQuery.results = [];
  };
  return (
    <NavDiv>
      <NavLink
        to="/search?query=&type=ingredients"
        state={{ ingredient: true }}
        onClick={() => resetSearch()}
      >
        Ingredients
      </NavLink>
      <NavLink to="/add">Add recipes</NavLink>
      <NavLink to="/my">My recipes</NavLink>
      <NavLink to="/favorite">Favorite</NavLink>
      <NavLink to="/shopping-list">Shopping list</NavLink>
    </NavDiv>
  );
};

export default Nav;
