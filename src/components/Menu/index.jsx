import React from 'react';
import { Link } from 'react-router-dom';

import Button from '../Button';

import { Container, LogoImage } from './styles';
import Logo from '../../assets/images/Logo.png';

function Menu() {
  return (
    <Container>
      <Link to="/">
        <LogoImage src={Logo} alt="animeflix-logo" />
      </Link>

      <Button />

    </Container>
  );
}

export default Menu;
