import styled from 'styled-components';
import {HeartCircle} from '@styled-icons/boxicons-regular/HeartCircle'
import {XCircle} from '@styled-icons/boxicons-regular/XCircle'

export const CardButtonContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
`;

export const XIcon = styled(XCircle)`
  width: 6rem;
  color: darkcyan;
  cursor: pointer;
`;

export const MatchIcon = styled(HeartCircle)`
  width: 6rem;
  color: rebeccapurple;
  cursor: pointer;
`;

