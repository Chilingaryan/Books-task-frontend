import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import * as S from "./styles";
import { getBooks } from "store/actions/books";
import { BookCard } from "components/functional/BookCard";
import { RecycleBin } from "components/functional/RecycleBin";
import { Layout } from "components/layout";

export const BooksPage = () => {
  const dispatch = useDispatch();
  const booksData = useSelector((state) => state.books.booksData);
  const isBooksLoading = useSelector((state) => state.books.isBooksLoading);

  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch]);

  return (
    <Layout title="Books" isLoading={isBooksLoading}>
      <S.BookCardsWrapper>
        {booksData.map((book, ind) => (
          <BookCard index={ind} key={book.id} book={book} />
        ))}
      </S.BookCardsWrapper>
      <RecycleBin />
    </Layout>
  );
};
