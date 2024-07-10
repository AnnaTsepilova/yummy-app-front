import MainNavLink from './MainNavLink/MainNavLink';
import SearchNavLink from './SearchNavLink/SearchNavLink';

import { NavMenu } from './HeaderNavigation.styled';

const HeaderNavigation = ({ closeMenu }) => {
  return (
    <NavMenu>
      <MainNavLink
        to="/categories/beef"
        title="Categories"
        closeMenu={closeMenu}
      />
      <MainNavLink to="/add" title="Add recipes" closeMenu={closeMenu} />
      <MainNavLink to="/my" title="My recipes" closeMenu={closeMenu} />
      <MainNavLink to="/favorites" title="Favorites" closeMenu={closeMenu} />
      <MainNavLink
        to="/shopping-list"
        title="Shopping list"
        closeMenu={closeMenu}
      />
      <SearchNavLink to="/search" title="Search" closeMenu={closeMenu} />
    </NavMenu>
  );
};

export default HeaderNavigation;
