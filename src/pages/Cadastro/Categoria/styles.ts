import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;

`;

export const SubmitButton = styled.button`
  min-width: 70%;
  min-height: 30%;
  align-self: center;
  background-color: red;
  outline: 0;
  border: 0;

  color: var(--white);
`;
