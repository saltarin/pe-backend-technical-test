import styled from 'styled-components';
import { COLORS } from '../../ui/colors';

export const Table = styled.table`
  border-collapse: collapse;
  width: 100%;
  & th,
  & td {
    border: 1px solid ${COLORS.LIGHT_GRAY};
    padding: 8px;
  }
  & tr:nth-child(even) {
    background-color: ${COLORS.LIGHT_GRAY};
  }
  & tr:hover {
    background-color: #d8d8d8;
  }
  & th {
    padding-top: 12px;
    padding-bottom: 12px;
    text-align: left;
    background-color: ${COLORS.BLACK};
    color: white;
  }
`;
