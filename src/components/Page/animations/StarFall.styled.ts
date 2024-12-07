import styled, { keyframes } from 'styled-components';

const fall = keyframes`
to {
	transform: translate3d(-30em, 0, 0);
}
`;

const tailFade = keyframes`

	0%,
	50% {
		width: 6rem;
		opacity: 1;
	}
	
	70%,
	80% {
		width: 0;
		opacity: 0.4;
	}
	
	100% {
		width: 0;
		opacity: 0;
	}


	`;
const blink = keyframes`
    50% {
      opacity: 0.6;
    }
  `;

export const Container = styled.div`
  position: fixed;
  top: -60%;
  left: 0;
  width: 100%;
  height: 120%;
  transform: rotate(-90deg);
  opacity: 0.5;
`;

export const Star = styled.div`
  --star-color: ${({ theme: { colors } }) => colors.cor_1};
  --star-tail-length: 6em;
  --star-tail-height: 2px;
  --star-width: calc(var(--star-tail-length) / 6);
  --fall-duration: 9s;
  --tail-fade-duration: var(--fall-duration);

  position: absolute;
  top: var(--top-offset);
  left: 0;
  width: 5rem;
  height: 5rem;
  border-radius: 50%;

  background: url('../../../utils/hearth.svg') no-repeat center center;
  background-size: fit-content;

  transform: translate3d(104em, 0, 0) rotate(120deg);

  animation: ${fall} var(--fall-duration) var(--fall-delay) linear infinite,
    ${tailFade} var(--tail-fade-duration) var(--fall-delay) ease-out infinite;

  @media screen and (max-width: 750px) {
    animation: ${fall} var(--fall-duration) var(--fall-delay) linear infinite;
  }
  &:nth-child(1) {
    --star-tail-length: 7.44em;
    --top-offset: 83.93vh;
    --fall-duration: 9.618s;
    --fall-delay: 1.608s;
  }
  &:nth-child(2) {
    --star-tail-length: 5.61em;
    --top-offset: 81.57vh;
    --fall-duration: 11.124s;
    --fall-delay: 6.924s;
  }
  &:nth-child(3) {
    --star-tail-length: 7.27em;
    --top-offset: 83.18vh;
    --fall-duration: 10.177s;
    --fall-delay: 9.586s;
  }
  &:nth-child(4) {
    --star-tail-length: 7.35em;
    --top-offset: 37.21vh;
    --fall-duration: 11.03s;
    --fall-delay: 6.857s;
  }
  &:nth-child(5) {
    --star-tail-length: 5.41em;
    --top-offset: 5.41vh;
    --fall-duration: 8.011s;
    --fall-delay: 0.56s;
  }
  &:nth-child(6) {
    --star-tail-length: 7.4em;
    --top-offset: 92.79vh;
    --fall-duration: 6.967s;
    --fall-delay: 9.757s;
  }
  &:nth-child(7) {
    --star-tail-length: 5.44em;
    --top-offset: 94.11vh;
    --fall-duration: 9.655s;
    --fall-delay: 8.698s;
  }
  &:nth-child(8) {
    --star-tail-length: 5.72em;
    --top-offset: 50.12vh;
    --fall-duration: 9.877s;
    --fall-delay: 7.15s;
  }
  &:nth-child(9) {
    --star-tail-length: 6.77em;
    --top-offset: 82.07vh;
    --fall-duration: 8.63s;
    --fall-delay: 0.646s;
  }
  &:nth-child(10) {
    --star-tail-length: 5.27em;
    --top-offset: 66.46vh;
    --fall-duration: 7.986s;
    --fall-delay: 1.17s;
  }
  &:nth-child(11) {
    --star-tail-length: 5.54em;
    --top-offset: 10.06vh;
    --fall-duration: 9.078s;
    --fall-delay: 7.186s;
  }
  &:nth-child(12) {
    --star-tail-length: 5.99em;
    --top-offset: 73.37vh;
    --fall-duration: 8.657s;
    --fall-delay: 2.267s;
  }
  &:nth-child(13) {
    --star-tail-length: 6.42em;
    --top-offset: 38.65vh;
    --fall-duration: 11.82s;
    --fall-delay: 6.381s;
  }
  &:nth-child(14) {
    --star-tail-length: 5.75em;
    --top-offset: 25.67vh;
    --fall-duration: 9.002s;
    --fall-delay: 0.117s;
  }
  &:nth-child(15) {
    --star-tail-length: 7.17em;
    --top-offset: 28.22vh;
    --fall-duration: 9.337s;
    --fall-delay: 9.547s;
  }
  &:nth-child(16) {
    --star-tail-length: 6.21em;
    --top-offset: 61.09vh;
    --fall-duration: 10.651s;
    --fall-delay: 7.498s;
  }
  &:nth-child(17) {
    --star-tail-length: 6.47em;
    --top-offset: 81.95vh;
    --fall-duration: 9.402s;
    --fall-delay: 9.58s;
  }
  &:nth-child(18) {
    --star-tail-length: 6.97em;
    --top-offset: 78.35vh;
    --fall-duration: 11.097s;
    --fall-delay: 3.242s;
  }
  &:nth-child(19) {
    --star-tail-length: 6.82em;
    --top-offset: 48.31vh;
    --fall-duration: 9.792s;
    --fall-delay: 6.571s;
  }
  &:nth-child(20) {
    --star-tail-length: 6.06em;
    --top-offset: 44.81vh;
    --fall-duration: 9.423s;
    --fall-delay: 3.353s;
  }
  &:nth-child(21) {
    --star-tail-length: 7.16em;
    --top-offset: 89.58vh;
    --fall-duration: 10.918s;
    --fall-delay: 9.909s;
  }
  &:nth-child(22) {
    --star-tail-length: 6.84em;
    --top-offset: 31.17vh;
    --fall-duration: 8.21s;
    --fall-delay: 7.549s;
  }
  &:nth-child(23) {
    --star-tail-length: 5.15em;
    --top-offset: 0.06vh;
    --fall-duration: 10.361s;
    --fall-delay: 4.396s;
  }
  &:nth-child(24) {
    --star-tail-length: 6.73em;
    --top-offset: 75.73vh;
    --fall-duration: 10.714s;
    --fall-delay: 9.54s;
  }
  &:nth-child(25) {
    --star-tail-length: 6.18em;
    --top-offset: 99.95vh;
    --fall-duration: 6.669s;
    --fall-delay: 8.207s;
  }
  &:nth-child(26) {
    --star-tail-length: 7.34em;
    --top-offset: 86.66vh;
    --fall-duration: 7.297s;
    --fall-delay: 0.154s;
  }
  &:nth-child(27) {
    --star-tail-length: 7.16em;
    --top-offset: 72.54vh;
    --fall-duration: 8.336s;
    --fall-delay: 3.045s;
  }
  &:nth-child(28) {
    --star-tail-length: 6.69em;
    --top-offset: 24.62vh;
    --fall-duration: 6.059s;
    --fall-delay: 2.256s;
  }
  &:nth-child(29) {
    --star-tail-length: 5.11em;
    --top-offset: 47.15vh;
    --fall-duration: 8.197s;
    --fall-delay: 2.469s;
  }
  &:nth-child(30) {
    --star-tail-length: 5.38em;
    --top-offset: 29.68vh;
    --fall-duration: 10.934s;
    --fall-delay: 9.293s;
  }
  &:nth-child(31) {
    --star-tail-length: 5.66em;
    --top-offset: 94.82vh;
    --fall-duration: 9.177s;
    --fall-delay: 6.256s;
  }
  &:nth-child(32) {
    --star-tail-length: 6.34em;
    --top-offset: 19.18vh;
    --fall-duration: 10.795s;
    --fall-delay: 5.848s;
  }
  &:nth-child(33) {
    --star-tail-length: 5.27em;
    --top-offset: 90.11vh;
    --fall-duration: 10.87s;
    --fall-delay: 0.148s;
  }
  &:nth-child(34) {
    --star-tail-length: 7.44em;
    --top-offset: 19.16vh;
    --fall-duration: 8.484s;
    --fall-delay: 4.775s;
  }
  &:nth-child(35) {
    --star-tail-length: 5.7em;
    --top-offset: 17.47vh;
    --fall-duration: 10.772s;
    --fall-delay: 0.272s;
  }
  &:nth-child(36) {
    --star-tail-length: 6.54em;
    --top-offset: 55.93vh;
    --fall-duration: 10.847s;
    --fall-delay: 4.62s;
  }
  &:nth-child(37) {
    --star-tail-length: 6.41em;
    --top-offset: 14.89vh;
    --fall-duration: 9.616s;
    --fall-delay: 6.91s;
  }
  &:nth-child(38) {
    --star-tail-length: 5.71em;
    --top-offset: 7.74vh;
    --fall-duration: 9.06s;
    --fall-delay: 7.421s;
  }
  &:nth-child(39) {
    --star-tail-length: 6.15em;
    --top-offset: 53.84vh;
    --fall-duration: 10.846s;
    --fall-delay: 8.555s;
  }
  &:nth-child(40) {
    --star-tail-length: 5.97em;
    --top-offset: 33.51vh;
    --fall-duration: 7.308s;
    --fall-delay: 2.509s;
  }
  &:nth-child(41) {
    --star-tail-length: 5.75em;
    --top-offset: 26.68vh;
    --fall-duration: 10.559s;
    --fall-delay: 3.186s;
  }
  &:nth-child(42) {
    --star-tail-length: 6.09em;
    --top-offset: 39.32vh;
    --fall-duration: 9.582s;
    --fall-delay: 4.396s;
  }
  &:nth-child(43) {
    --star-tail-length: 5.25em;
    --top-offset: 24.38vh;
    --fall-duration: 9.207s;
    --fall-delay: 4.169s;
  }
  &:nth-child(44) {
    --star-tail-length: 7.48em;
    --top-offset: 88.53vh;
    --fall-duration: 11.904s;
    --fall-delay: 1.272s;
  }
  &:nth-child(45) {
    --star-tail-length: 5.24em;
    --top-offset: 5.8vh;
    --fall-duration: 11.96s;
    --fall-delay: 1.009s;
  }
  &:nth-child(46) {
    --star-tail-length: 6.8em;
    --top-offset: 96.83vh;
    --fall-duration: 11.221s;
    --fall-delay: 6.061s;
  }
  &:nth-child(47) {
    --star-tail-length: 6.96em;
    --top-offset: 93.13vh;
    --fall-duration: 8.152s;
    --fall-delay: 6.162s;
  }
  &:nth-child(48) {
    --star-tail-length: 5.46em;
    --top-offset: 70.29vh;
    --fall-duration: 7.527s;
    --fall-delay: 6.192s;
  }
  &:nth-child(49) {
    --star-tail-length: 5.66em;
    --top-offset: 10.64vh;
    --fall-duration: 6.468s;
    --fall-delay: 8.322s;
  }
  &:nth-child(50) {
    --star-tail-length: 6.46em;
    --top-offset: 40.36vh;
    --fall-duration: 9.598s;
    --fall-delay: 1.723s;
  }
  &::before,
  &::after {
    position: absolute;
    content: '';
    /* top: 0; */
    /* left: calc(var(--star-width) / -2); */
    /* width: var(--star-width); */
    /* height: 100%; */
    background: linear-gradient(45deg, transparent, currentColor, transparent);
    border-radius: inherit;
    animation: ${blink} 2s linear infinite;
  }
  &::before {
    transform: rotate(45deg);
  }
  &::after {
    transform: rotate(-45deg);
  }
`;
