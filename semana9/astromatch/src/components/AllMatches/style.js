import styled from 'styled-components';

export const AllMatchsContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 8px;
`;

export const MathList = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

export const MatchAvatar = styled.li`
  display: flex;
  align-items: center;
  list-style-type: none;
  img{
    max-width: 3.5rem;
    height: 3.5rem;
    border-radius: 50%;
    margin: 0.80rem 0.80rem 0 0;
  }
`;