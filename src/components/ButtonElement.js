import styled from 'styled-components';
import {Link} from 'react-scroll';

export const Button = styled(Link)`
  border-radius: 50px;
  background: ${({primary}) =>
    primary ? 'var(--secondary)' : ' var(--primary)'};

  white-spacing: nowrap;
  padding: ${({big}) => (big ? '14px 48px' : '12px 30px')};
  color: ${({dark}) => (dark ? ' var(--black)' : 'var(--secondary)')};
  font-size: ${({fontBig}) => (fontBig ? '20px' : '16px')};

  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;

  &:hover {
    transition: 100 0.2s ease-in-out;
    transform: scale(1.02);
    box-shadow: 5px 7px 12px #010606;

    background: ${({primary}) => (primary ? '#fff' : 'var(--secondary)')};
    color: ${({dark}) => (dark ? ' var(--dark-text)' : 'var(--light-text)')};
  }
`;
