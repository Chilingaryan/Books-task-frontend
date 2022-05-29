import React from "react";
import { useDrop } from "react-dnd";
import { useDispatch } from "react-redux";
import { deleteBook } from "store/actions/books";

import * as S from "./styles";

export const RecycleBin = () => {
  const dispatch = useDispatch();

  const [{ isOver }, drop] = useDrop(
    () => ({
      accept: "BOOK_CARD",
      drop: ({ index }) => {
        dispatch(deleteBook(index));
      },
      collect: (monitor) => ({
        isOver: monitor.isOver(),
      }),
    }),
    []
  );

  return (
    <S.BinWrapper isOver={isOver} ref={drop}>
      <S.DeleteIcon />
      <S.DeleteTitle>Delete</S.DeleteTitle>
    </S.BinWrapper>
  );
};
