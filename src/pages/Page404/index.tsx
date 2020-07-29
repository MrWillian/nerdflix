import React from 'react';
import Button from '../../components/Button';

import { Container, AlertText } from './styles';

import error404 from '../../assets/images/error404.jpg'

const Page404: React.FC = () => {
  return (
    <Container>
      <img src={error404} alt="404 Error" />
      <AlertText>Você subestimou o poder do lado negro da força</AlertText>

      <Button className="ButtonError" route="/">
        Voltar
      </Button>
    </Container>
  );
}

export default Page404;
