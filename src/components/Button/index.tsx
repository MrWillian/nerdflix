import React from 'react';
import { Link } from 'react-router-dom';

import { Container } from './styles';

interface Props {
  children: any;
  route: string;
  className?: string;
}

const Button: React.FC<Props> = ({children, route, className}) => {
  return (
    <Container as={Link} className={className} to={route}>
      {children}
    </Container>
  );
}

export default Button;
