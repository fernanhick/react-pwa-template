import styled from 'styled-components';
import {Link as LinkS} from 'react-scroll';
import {Link as LinkR} from 'react-router-dom';

export const Button = styled(LinkS)`
  border-radius: 50px;
  background: ${({primary}) =>
    primary ? 'var(--secondary)' : ' var(--primary)'};

  white-spacing: nowrap;
  padding: ${({big}) => (big ? '14px 48px' : '12px 30px')};
  color: ${({dark}) => (dark ? ' var(--dark-text)' : 'var(--light-text)')};
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
    box-shadow: ${({primary}) =>
      primary
        ? `3px 3px 5px var(--secondary)`
        : `
     5px 5px 8px var(--primary)`};

    background: ${({primary}) =>
      primary ? 'var(--primary)' : 'var(--secondary)'};
    color: ${({dark}) => (dark ? 'var(--light-text)' : ' var(--dark-text)')};
  }
`;
export const ButtonR = styled(LinkR)`
  border-radius: 50px;
  background: ${({primary}) =>
    primary ? 'var(--secondary)' : ' var(--primary)'};

  white-spacing: nowrap;
  padding: ${({big}) => (big ? '14px 48px' : '12px 30px')};
  color: ${({dark}) => (dark ? ' var(--dark-text)' : 'var(--light-text)')};
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
    box-shadow: ${({primary}) =>
      primary
        ? `3px 3px 5px var(--secondary)`
        : `
     5px 5px 8px var(--primary)`};

    background: ${({primary}) =>
      primary ? 'var(--primary)' : 'var(--secondary)'};
    color: ${({dark}) => (dark ? 'var(--light-text)' : ' var(--dark-text)')};
  }
`;
