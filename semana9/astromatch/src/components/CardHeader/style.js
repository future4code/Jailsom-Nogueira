import styled from 'styled-components';
import {HappyHeartEyes} from '@styled-icons/boxicons-regular/HappyHeartEyes';

export const CardHeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid darkgray;
  img{
    width: 40%;
  }
`;

export const AllMatchIcon = styled(HappyHeartEyes)`
  width: 26px;
  color: rebeccapurple;
  cursor: pointer;
`;


