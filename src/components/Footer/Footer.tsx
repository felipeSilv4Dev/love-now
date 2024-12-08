import React from 'react';
import * as S from './Footer.styled';
const Footer = () => {
  return (
    <S.Container>
      <S.Contacts>
        <S.Contact className="fa-solid fa-envelope" />
        <S.Contact className="fa-brands fa-linkedin" />
      </S.Contacts>

      <S.Copyrigth>
        <S.Creator>
          <S.Photo />
          <S.Name>Felipe</S.Name>
        </S.Creator>
        <S.Copy>© 2024 - todos os diretos reservados.</S.Copy>
      </S.Copyrigth>
    </S.Container>
  );
};

export default Footer;
