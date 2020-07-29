import styled from 'styled-components';

export const Container = styled.button`
  color: var(--secondary);
  border: 2px solid var(--secondary);
  box-sizing: border-box;
  cursor: pointer;
  padding: 16px 24px;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  outline: none;
  border-radius: 5px;
  text-decoration: none;
  display: inline-block;
  transition: opacity .3s;

  &:hover,
  &:focus {
    opacity: .5;
  }

  &.ButtonError {
    background-color: #F95B5C;
    border-radius: 5px;
    text-transform: uppercase;
    color: #FFF;
    font-weight: 100;
    letter-spacing: 3px;
  }

  @media (max-width: 800px) {
    &.ButtonLink {
      position: fixed;
      left: 0;
      right: 0;
      bottom: 0;
      color: var(--white);
      background: var(--tertiary);
      border-radius: 0;
      border: 0;
      text-align: center;
    }
  }
`;
