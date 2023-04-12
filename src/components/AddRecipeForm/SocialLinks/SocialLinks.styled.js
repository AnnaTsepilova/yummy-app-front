import styled from 'styled-components';

export const WrapperSocialLinks = styled.div`
  display: none;
  @media screen and (min-width: 1440px) {
    margin-bottom: 100px;
    display: block;
  }
`;

export const SocialLinksContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 163px;
  margin: 0;
  padding: 0;
  & > a {
    transition: all 250ms var(--transition-function);
  }

  & > a :hover * {
    fill: var(--background-dark);
  }
`;
