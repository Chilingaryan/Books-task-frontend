import styled from "styled-components";

export const BookCardWrapper = styled.div`
  width: 150px;
  display: flex;
  flex-direction: column;
  padding: 10px;
  opacity: ${({ isDragging }) => (isDragging ? 0 : 1)};
`;

export const CoverImage = styled.img`
  height: 200px;
  object-fit: cover;
  border-radius: 5px;
`;

export const BookName = styled.span`
  color: #fff;
  opacity: 0.5;
  margin-top: 5px;
  text-align: center;
`;
