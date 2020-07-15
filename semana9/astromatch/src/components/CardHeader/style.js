import styled from 'styled-components';
import {HappyHeartEyes} from '@styled-icons/boxicons-regular/HappyHeartEyes'; 
import {Trash} from '@styled-icons/boxicons-regular/Trash'; 

export const CardHeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid darkgray;
  img{
    width: 40%;
  }
`;

export const AllMatchesIcon = styled(HappyHeartEyes)`
  width: 26px;
  color: rebeccapurple;
  cursor: pointer;
`;

export const CleacrMatchesIcon = styled(Trash)`
  width: 26px;
  color: rebeccapurple;
  cursor: pointer;
`;
