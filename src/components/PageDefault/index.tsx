import React from 'react';
import Menu from '../Menu';
import Footer from '../Footer';

import GlobalStyles from '../../styles/GlobalStyles';
import styled from 'styled-components';

const Main = styled.main`
  background-color: var(--black);
  color: var(--white);
  flex: 1;
  padding-top: 50px;
  padding-left: 5%;
  padding-right: 5%;
`;

const PageDefault: React.FC = ({ children }) => {
  return (
    <>
      <Menu />
        <Main>
          {children}
        </Main>
      <Footer />

      <GlobalStyles />
    </>
  );
}

export default PageDefault;
