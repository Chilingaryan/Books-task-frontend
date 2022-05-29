import React from "react";

import * as S from "./Layout.styles";

export const Layout = ({ title, isLoading, children }) => {
  return (
    <S.Layout>
      {!!title && <S.Title>{title}</S.Title>}
      {isLoading ? <S.Loading>Loading...</S.Loading> : children}
    </S.Layout>
  );
};
