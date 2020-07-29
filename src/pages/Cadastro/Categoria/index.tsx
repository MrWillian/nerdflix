import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';

import { Container, Form, SubmitButton } from './styles';

interface PropsValues {
  nome: string;
  descricao: string;
  cor: string;
}

const CadastroCategoria: React.FC = () => {
  const valoresIniciais = { nome: '', descricao: '', cor: '' }
  const [categorias, setCategorias] = useState<PropsValues[]>([]);
  const [values, setValues] = useState<PropsValues>(valoresIniciais);

  function setValue(chave, valor) {
    setValues({ ...values, [chave]: valor });
  }

  function handleChange(event) {
    setValue(
      event.target.getAttribute('name'),
      event.target.value
    );
  }

  function handleSubmit(event) {
    event.preventDefault();
    setCategorias([...categorias, values]);
    setValues(valoresIniciais);
  }

  return (
    <PageDefault>

      <Container>
        <h2>Cadastro de Categoria: {values.nome}</h2>

        <Form onSubmit={handleSubmit}>
          <FormField
            label="Nome da Categoria"
            type="text"
            name="nome"
            value={values.nome}
            onChange={handleChange}
          />

          <FormField
            label="Descrição"
            type="textarea"
            name="descricao"
            value={values.descricao}
            onChange={handleChange}
          />

          <FormField
            label="Cor"
            type="color"
            name="cor"
            value={values.cor}
            onChange={handleChange}
          />
            
          <SubmitButton>Cadastrar</SubmitButton>
        </Form>

        <ul>
          {categorias.map((categoria, indice) => {
            return (
              <li key={`${categoria}${indice}`}>
                {categoria.nome}
              </li>
            );
          })}
        </ul>

        <Link to="/">
          Ir para home
        </Link>

      </Container>
    </PageDefault>
  );
}

export default CadastroCategoria;
