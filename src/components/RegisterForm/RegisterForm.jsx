import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';

const RegisterForm = () => {
  const { pathname } = useLocation();
  const isLogin = pathname === '/signin';

  return (
    <div style={{ height: window.innerHeight - 54 }}>
      <div style={{ width: 600 }}>
        <h2>{isLogin ? 'Sign up' : 'Sign in'}</h2>
        <form>
          <input placeholder="Name" />
          <input placeholder="Email" />
          <input placeholder="Password" />

          <div>
            {isLogin ? "Don't have an account? " : 'Already have an account? '}
            <NavLink
              exact
              to={isLogin ? '/register' : '/signin'}
              activeClassName="active"
            >
              {isLogin ? 'Register' : 'Sign in'}
            </NavLink>
          </div>

          <button>{isLogin ? 'Sign in' : 'Sign up'}</button>
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;
