import styled, { css } from 'styled-components';

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 145px;
  height: 42px;
  border: 0;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.color.tertiary};
  text-transform: uppercase;
  text-decoration: none;
  font-size: ${({ theme }) => theme.fontSize.xl};
  color: ${({ theme }) => theme.color.primary};
  cursor: pointer;
  @media (max-width: 650px) {
    height: 38px;
    font-size: ${({ theme }) => theme.fontSize.l};
  }
  ${({ secondary }) =>
    secondary &&
    css`
      background-color: transparent;
      border: solid 2px ${({ color }) => color};
      color: ${({ color }) => color};
      @media (max-width: 650px) {
        width: 100px;
        height: 32px;
        font-size: ${({ theme }) => theme.fontSize.m};
        border: solid 1px ${({ color }) => color};
      }
    `}
`;
export default Button;
