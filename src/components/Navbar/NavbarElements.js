import styled from 'styled-components';
import {Link as LinkR} from 'react-router-dom';
import {Link as LinkS} from 'react-scroll';

export const Nav = styled.nav`
  background: ${({scrollNav}) =>
    scrollNav ? 'var(--primary)' : 'var(--secondary)'};
  height: 80px;
  margin-top: -80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;
  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;
export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 100%;
  max-width: 1300px;

  padding: 0 24px;
`;
export const NavbarLogo = styled(LinkR)`
  color: var(--light-text);
  justify-self: flex-start;
  cursor: pointer;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin-left: 24px;
  font-weight: bold;
  text-decoration: none;
`;

export const MobileIcon = styled.div`
  display: none;
  @media screen and (max-width: 768px) {
    position: absolute;
    display: block;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: var(--light-text);
  }
`;
export const FaBars = styled(LinkR)`
  color: var(--light-text);
  justify-self: flex-start;
  cursor: pointer;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin-left: 24px;
  font-weight: bold;
  text-decoration: none;
  @media screen and (max-width: 768px) {
    display: none;
  } ;
`;

export const NavMenu = styled.ul`
  text-align: center;
  display: flex;
  align-items: center;
  margin-right: -22px;
  list-style: none;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
export const SwitchWrapper = styled.div`
  display: flex;
  align-items: center;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtnLink = styled(LinkR)`
  border-radius: 50px;
  background: var(--secondary);
  white-space: nowrap;
  padding: 10px 22px;
  color: var(--dark-text);
  font-size: 16px;
  outline: none;
  cursor: pointer;
  border: none;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

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
export const NavItem = styled.li`
  height: 80px;
`;
export const NavLinks = styled(LinkS)`
  color: var(--light-text);
  cursor: pointer;
  display: flex;
  padding: 0 1rem;
  height: 100%;
  align-items: center;
  text-decoration: none;
  &.active {
    border-bottom: 3px solid var(--secondary);
  }
`;
