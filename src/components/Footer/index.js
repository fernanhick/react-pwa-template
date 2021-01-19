import React from 'react';
import {
  FoooterLinksContainer,
  FooterContainer,
  FooterWrap,
  FooterLinksWrapper,
  FooterLinkItems,
  FooterLinkTitle,
  FooterLink,
  SocialLogo,
  SocialIconLink,
  SocialIcons,
  WebsiteRights,
  SocialMediaWrap,
  SocialMedia,
} from './FooterElements';
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
} from 'react-icons/fa';
function Footer() {
  return (
    <>
      <FooterContainer>
        <FooterWrap>
          <FoooterLinksContainer>
            <FooterLinksWrapper>
              <FooterLinkItems>
                <FooterLinkTitle> About Us </FooterLinkTitle>

                <FooterLink to="/app">How it works</FooterLink>
                <FooterLink to="/app">Testimonials</FooterLink>
                <FooterLink to="/app">Careers</FooterLink>
                <FooterLink to="/app">Investors</FooterLink>
                <FooterLink to="/app">Terms of Service</FooterLink>
              </FooterLinkItems>
              <FooterLinkItems>
                <FooterLinkTitle> Contact Us </FooterLinkTitle>

                <FooterLink to="/app">Contact</FooterLink>
                <FooterLink to="/app">Support</FooterLink>
                <FooterLink to="/app">Destinations</FooterLink>
                <FooterLink to="/app">Sponsorships</FooterLink>
              </FooterLinkItems>
              <FooterLinkItems>
                <FooterLinkTitle> Defi </FooterLinkTitle>

                <FooterLink to="/app">Explanation</FooterLink>
                <FooterLink to="/app">Options</FooterLink>
                <FooterLink to="/app">Sites</FooterLink>
                <FooterLink to="/app">Flash Loans</FooterLink>
              </FooterLinkItems>
              <FooterLinkItems>
                <FooterLinkTitle> Social Media </FooterLinkTitle>

                <FooterLink to="/app">Instagram</FooterLink>
                <FooterLink to="/app">Facebook</FooterLink>
                <FooterLink to="/app">Youtube</FooterLink>
                <FooterLink to="/app">Twitter</FooterLink>
              </FooterLinkItems>
            </FooterLinksWrapper>
          </FoooterLinksContainer>
          <SocialMedia>
            <SocialMediaWrap>
              <SocialLogo to="/">ArbiBoard</SocialLogo>
              <WebsiteRights>
                ArbiBoar C {new Date().getFullYear()}
              </WebsiteRights>
              <SocialIcons>
                <SocialIconLink href="/" target="_blank" aria-label="Facebook">
                  <FaFacebook />
                </SocialIconLink>
                <SocialIconLink href="/" target="_blank" aria-label="Instagram">
                  <FaInstagram />
                </SocialIconLink>
                <SocialIconLink href="/" target="_blank" aria-label="Youtube">
                  <FaYoutube />
                </SocialIconLink>
                <SocialIconLink href="/" target="_blank" aria-label="Twitter">
                  <FaTwitter />
                </SocialIconLink>
                <SocialIconLink href="/" target="_blank" aria-label="Linkedin">
                  <FaLinkedin />
                </SocialIconLink>
              </SocialIcons>
            </SocialMediaWrap>
          </SocialMedia>
        </FooterWrap>
      </FooterContainer>
    </>
  );
}

export default Footer;