import { NavLink } from 'react-router-dom';

import { NavDiv } from './Navigation.styled';

const Nav = () => {
  return (
    <NavDiv>
      <NavLink
        to="/search?query=&type=ingredients"
        state={{ ingredient: true }}
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
