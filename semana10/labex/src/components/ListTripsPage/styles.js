import styled from 'styled-components';

export const ListContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  padding: 0.2rem;
  width: 100%;
`;

export const ListItem = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.2rem;
  border: 1px solid;
  margin: 0.1rem;
`;