import styled from 'styled-components';

export const NavDiv = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  letter-spacing: -0.02em;

  & > * {
    transition: color var(--transition-function);
  }

  cursor: pointer;

  & > :hover {
    color: var(--primary-green);
  }

  & > :active {
    color: var(--primary-green);
  }

  & > :not(:last-child) {
    margin-bottom: 14px;
  }

  @media screen and (min-width: 768px) {
    & > :not(:last-child) {
      margin-bottom: 24px;
    }
  }
`;
