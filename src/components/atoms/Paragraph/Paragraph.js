import styled, { css } from 'styled-components';

const Paragraph = styled.p`
  padding: 0;
  margin: 0;
  font-size: ${({ theme }) => theme.fontSize.m};
  color: ${({ theme, color }) => color || theme.color.primary};
  ${({ small }) =>
    small &&
    css`
      font-size: ${({ theme }) => theme.fontSize.s};
    `}
`;

export default Paragraph;
