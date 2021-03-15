import styled from 'styled-components';

const Title = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.xll};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  color: ${({ color }) => color};
  @media (max-width: 650px) {
    font-size: ${({ theme }) => theme.fontSize.xl};
  }
`;

export default Title;
