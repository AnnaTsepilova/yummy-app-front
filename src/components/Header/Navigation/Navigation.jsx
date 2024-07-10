import React from 'react';
import { Nav, NavItem } from './Navigation.styled';

const Navigation = () => {
  return (
    <Nav>
      <NavItem to="/categories">Categories</NavItem>
      <NavItem to="/add">Add recipes</NavItem>
      <NavItem to="/my">My recipes</NavItem>
      <NavItem to="/favorites">Favorites</NavItem>
      <NavItem to="/shopping-list">Shopping List</NavItem>
      <NavItem to="/search">Search</NavItem>
    </Nav>
  );
};

export default Navigation;
