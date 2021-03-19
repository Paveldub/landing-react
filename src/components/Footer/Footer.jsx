import React, { useState, useEffect } from "react";
import { FaInstagram, FaFacebookF, FaYoutube } from "react-icons/fa";
import { animateScroll as scroll } from "react-scroll";

import {
  FooterContainer,
  FooterWrapper,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkItems,
  FooterLinkTitle,
  FooterLink,
  SocialMedia,
  SocialLogo,
  SocialIcons,
  SocialIconLink,
  SocialMediaWrap,
} from "./Footer.styles.jsx";

export const Footer = () => {
  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <>
      <FooterContainer>
        <FooterWrapper>
          <FooterLinksContainer>
            <FooterLinksWrapper>
              <FooterLinkItems>
                <FooterLinkTitle>About us</FooterLinkTitle>
                <FooterLink to="/signin">How it Works</FooterLink>
                <FooterLink to="/signin">Testimonials</FooterLink>
                <FooterLink to="/signin">Careers</FooterLink>
                <FooterLink to="/signin">Investors</FooterLink>
                <FooterLink to="/signin">Terms of services</FooterLink>
              </FooterLinkItems>
              <FooterLinkItems>
                <FooterLinkTitle>About us</FooterLinkTitle>
                <FooterLink to="/signin">How it Works</FooterLink>
                <FooterLink to="/signin">Testimonials</FooterLink>
                <FooterLink to="/signin">Careers</FooterLink>
                <FooterLink to="/signin">Investors</FooterLink>
                <FooterLink to="/signin">Terms of services</FooterLink>
              </FooterLinkItems>
            </FooterLinksWrapper>

            <FooterLinksWrapper>
              <FooterLinkItems>
                <FooterLinkTitle>Contact us</FooterLinkTitle>
                <FooterLink to="/support">Support</FooterLink>
                <FooterLink to="/contact">contact</FooterLink>
                <FooterLink to="/signin">Destination</FooterLink>
                <FooterLink to="/signin">Sponsorship</FooterLink>
                <FooterLink to="/signin">Terms of services</FooterLink>
              </FooterLinkItems>
              <FooterLinkItems>
                <FooterLinkTitle>Social media</FooterLinkTitle>
                <FooterLink to="/">Instagram</FooterLink>
                <FooterLink to="/">Facebook</FooterLink>
                <FooterLink to="/">Twitter</FooterLink>
                <FooterLink to="/">Twitch</FooterLink>
              </FooterLinkItems>
            </FooterLinksWrapper>
          </FooterLinksContainer>

          <SocialMedia>
            <SocialMediaWrap>
              <SocialLogo to="/" onClick={toggleHome}>
                dolla
              </SocialLogo>
              <FooterLink>
                (C) {new Date().getFullYear()} All right reserved
              </FooterLink>
              <SocialIcons>
                <SocialIconLink
                  href="//www.instagram.com/pavel_dub_"
                  target="_blank"
                >
                  <FaFacebookF />
                </SocialIconLink>
                <SocialIconLink
                  href="//www.instagram.com/pavel_dub_"
                  target="_blank"
                >
                  <FaInstagram />
                </SocialIconLink>
                <SocialIconLink
                  href="//www.instagram.com/pavel_dub_"
                  target="_blank"
                >
                  <FaYoutube />
                </SocialIconLink>
              </SocialIcons>
            </SocialMediaWrap>
          </SocialMedia>
        </FooterWrapper>
      </FooterContainer>
    </>
  );
};
