import * as S from './Footer.styled';
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <S.Container>
      <S.Contacts>
        <Link to="https://www.linkedin.com/in/felipe-silva-1019ab271/">
          <S.Contact className="fa-brands fa-linkedin" />
        </Link>
        <Link to="mailto:felipesantana18n@gmail.com">
          <S.Contact className="fa-solid fa-envelope" />
        </Link>
      </S.Contacts>

      <S.Copyrigth>
        <S.Creator>
          <Link to="https://www.linkedin.com/in/felipe-silva-1019ab271/">
            <S.Photo />
          </Link>
          <S.Name>Felipe</S.Name>
        </S.Creator>
        <S.Copy>© 2024 - todos os diretos reservados.</S.Copy>
      </S.Copyrigth>
    </S.Container>
  );
};

export default Footer;
