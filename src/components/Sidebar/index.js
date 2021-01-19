import React from 'react';
import {
  CloseIcon,
  Icon,
  SidebarContainer,
  SidebarLink,
  SidebarMenu,
  SidebarRoute,
  SidebarWrapper,
  SideBtnWrap,
} from './SidebarElements';
const Sidebar = ({isOpen, toggle, a, d, themeName}) => {
  function setTheme(themeName) {
    localStorage.setItem('theme', themeName);
    document.documentElement.className = themeName;
  }

  // function to toggle between light and dark theme
  function toggleTheme() {
    d = localStorage.getItem('theme');
    if (d === 'light-theme') {
      setTheme('dark-theme');
    } else {
      setTheme('light-theme');
    }
    document.getElementById('theme-mode').textContent = d.toUpperCase();
  }

  // Immediately invoked function to set the theme on initial load
  (function getTheme() {
    a = localStorage.getItem('theme');

    if (a === 'dark-theme') {
      setTheme('dark-theme');
      a = 'light-theme';
    } else {
      setTheme('light-theme');
      a = 'dark-theme';
    }
  })();
  return (
    <SidebarContainer isOpen={!isOpen}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="about" onClick={toggle}>
            About
          </SidebarLink>
          <SidebarLink to="discover" onClick={toggle}>
            Discover
          </SidebarLink>
          <SidebarLink to="services" onClick={toggle}>
            Services
          </SidebarLink>
          <SidebarLink to="signup" onClick={toggle}>
            Sign Up
          </SidebarLink>
        </SidebarMenu>

        <SideBtnWrap>
          <SidebarRoute to="/app">Go To App</SidebarRoute>
        </SideBtnWrap>
      </SidebarWrapper>
      <SidebarLink id="theme-mode" to="home" onClick={toggleTheme}>
        {a.toUpperCase()}
      </SidebarLink>
    </SidebarContainer>
  );
};

export default Sidebar;
