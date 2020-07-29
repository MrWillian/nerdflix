import React from 'react';
import { Link } from 'react-router-dom';

import { Container } from './styles';

const Button: React.FC = () => {
  return (
    <Container as={Link} className="ButtonLink" to="/cadastro/video">
      Novo vídeo
    </Container>
  );
}

export default Button;
