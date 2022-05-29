import React, { useRef } from "react";
import { useDrag, useDrop } from "react-dnd";
import { useDispatch } from "react-redux";

import * as S from "./styles";
import { orderBooks } from "store/actions/books";

export const BookCard = ({ book, index }) => {
  const ref = useRef(null);
  const dispatch = useDispatch();

  const [{ isDragging }, dragRef] = useDrag({
    type: "BOOK_CARD",
    item: { index },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const dropRef = useDrop({
    accept: "BOOK_CARD",
    hover: (item, monitor) => {
      const dragIndex = item.index;
      const hoverIndex = index;
      const hoverBoundingRect = ref.current?.getBoundingClientRect();

      // prettier-ignore
      const hoverMiddleX = (hoverBoundingRect.left - hoverBoundingRect.right) / 2;
      // prettier-ignore
      const hoverActualX = monitor.getClientOffset().x - hoverBoundingRect.right;

      // Note: Reduces unnecessary action call and improves performance
      if (dragIndex < hoverIndex && hoverActualX < hoverMiddleX) return;
      if (dragIndex > hoverIndex && hoverActualX > hoverMiddleX) return;
      if (dragIndex === hoverIndex) return;

      dispatch(orderBooks(dragIndex, hoverIndex));
      item.index = hoverIndex;
    },
  })[1];

  const dragDropRef = dragRef(dropRef(ref));

  return (
    <S.BookCardWrapper ref={dragDropRef} isDragging={isDragging}>
      <S.CoverImage src={book.bookCover} alt="" />
      <S.BookName>{book.bookName}</S.BookName>
    </S.BookCardWrapper>
  );
};
