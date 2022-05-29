import styled from "styled-components";

import { ReactComponent as BinIcon } from "assets/icons/bin.svg";

const getOverColor = (isOver) => {
  return isOver ? "#ff3245" : "#636363";
};

export const BinWrapper = styled.div`
  display: flex;
  padding: 30px;
  margin-top: 15px;
  align-items: center;
  justify-content: center;
  transition: border 0.1s ease;

  ${({ isOver }) => `
    border: 2px dashed ${getOverColor(isOver)};
    span { color: ${getOverColor(isOver)} }
    svg { fill: ${getOverColor(isOver)} }
  `}
`;

export const DeleteTitle = styled.span`
  color: #fff;
  margin-left: 5px;
  font-weight: bold;
`;

export const DeleteIcon = styled(BinIcon)`
  fill: white;
  width: 18px;
  height: 18px;
`;
