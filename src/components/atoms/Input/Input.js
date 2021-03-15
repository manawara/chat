import styled from 'styled-components';

const Input = styled.input`
  padding-left: 10px;
  height: 40px;
  width: ${({ size }) => (size ? `${size}%` : '100%')};
  border: 2px solid ${({ theme }) => theme.color.tertiary};
  border-radius: 10px;
`;

export default Input;
