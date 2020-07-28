import styled from 'styled-components';

export const Container = styled.section`
  color: white;
  min-height: 197px;
  margin-left: 5%;
  margin-bottom: 16px;
`;

export const Title = styled.h3`
  font-style: normal;
  font-weight: normal;
  font-size: 35px;
  line-height: 1;
  margin-bottom: 16px;
  display: inline-block;
  padding: 20px;
  background: red;
  line-height: 1;
  border-radius: 4px;

  @media (max-width: 800px) {
    font-size: 18px;
    padding: 10px;
  }
`;

export const ExtraLink = styled.a`
  margin-left: 16px;
  text-decoration: none;
  transition: opacity .3s;
  &:hover,
  &:focus {
    opacity: .5;
  }
  @media (max-width: 800px) {
    display: block;
    margin-bottom: 16px;
    margin-left: 0;
  }
`;

export const VideoCardList = styled.ul`
  margin: 0;
  padding-left: 0;
  padding-bottom: 32px;
  list-style: none;
  display: flex;
  overflow-x: auto;
  flex-direction: row;
  
  li {
    margin-right: 16px;
  }

  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0,0,0,0.3); 
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3); 
    -webkit-border-radius: 8px;
    border-radius: 8px;
  }

  ::-webkit-scrollbar-thumb {
    -webkit-border-radius: 8px;
    border-radius: 8px;
    background:var(--tertiary); 
    box-shadow: inset 0 0 6px rgba(0,0,0,0.5); 
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.5); 
  }

  ::-webkit-scrollbar-thumb:window-inactive {
    background: rgba(255,0,0,0.4); 
  }
`;
