import styled, { keyframes } from 'styled-components';

const title = keyframes`
0%{
opacity: 0

}
80%{
	transform: translateX(-1rem);
}
100%{
	opacity: 1;
	transform: initial;
}
`;

const paragraph = keyframes`
0%{
opacity: 0

}
80%{
	transform: translateX(1rem);
}
100%{
	opacity: 1;
	transform: initial;
}
`;

export const Container = styled.section`
  display: block;
  background-image: linear-gradient(
      to left bottom,
      ${({ theme }) => theme.colors.col_1},
      ${({ theme }) => theme.colors.col_2}
    ),
    url('../../public/utils/casal.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: top;
  height: 90vh;
  position: relative;
`;

export const TextBox = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 1.5rem;
`;

export const Title = styled.h1`
  font-size: 10rem;
  transform: translateX(5rem);
  animation: ${title} 1s forwards;
`;

export const Paragraph = styled.p`
  font-size: 2rem;
  transform: translateX(-5rem);
  animation: ${paragraph} 1s forwards;
`;
