import styled from 'styled-components';
import {FaTimes} from 'react-icons/fa';
import {Link as LinkR} from 'react-router-dom';
import {Link as LinkS} from 'react-scroll';

export const SidebarContainer = styled.aside`
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100%;
  background: var(--primary);
  display: grid;
  align-items: center;
  top: 0;
  left: 0;
  transition: 0.3s ease-in-out;
  opacity: ${({isOpen}) => (isOpen ? '100%' : '0')};
  top: ${({isOpen}) => (isOpen ? '0' : '-100%')};
`;

export const CloseIcon = styled(FaTimes)`
  color: var(--light-text);
`;

export const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
`;

export const SidebarWrapper = styled.div`
  color: #fff;
`;

export const SidebarMenu = styled.ul`
  display: grid;
  padding: 0;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(6, 80px);
  text-align: center;
  @media screen and (max-width: 480px) {
    grid-template-rows: repeat(6, 60px);
  } ;
`;

export const SidebarLink = styled(LinkS)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  text-decoration: none;
  list-style: none;
  transition: 0.2s ease-in-out;
  color: var(--light-text);
  cursor: pointer;

  &:hover {
    transition: 100 0.2s ease-in-out;
    transform: scale(1.02);
    box-shadow: ${({primary}) =>
      primary
        ? `3px 2px -5px var(--primary)`
        : `
     3px 3px 5px var(--secondary)`};

    background: ${({primary}) =>
      primary ? 'var(--primary)' : 'var(--secondary)'};
    color: ${({dark}) => (dark ? 'var(--light-text)' : ' var(--dark-text)')};
  }
`;
export const SideBtnWrap = styled.div`
  display: flex;
  justify-content: center;
`;

export const SidebarRoute = styled(LinkR)`
  border-radius: 50px;
  background: var(--secondary);
  white-space: nowrap;
  padding: 16px 64px;
  color: var(--light-text);
  font-size: 20px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: var(--secondary);
    color: var(--dark-text);
    transition: 100 0.2s ease-in-out;
    transform: scale(1.02);
    box-shadow: 5px 7px 12px #010606;
  }
`;
