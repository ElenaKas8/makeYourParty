import FollowUs from '../FollowUs/FollowUs.jsx'
import SubscribeForm from '../SubscribeForm/SubscripeForm.jsx';
import {
    Copy,
    FooterContainer,
    FooterNavFlex,
    FooterWrap,
    LogoFlex,
    StyledLogoLink,
    StyledNavLink,
    StyledLink,
    Icon,
  } from './FooterMob.styled.js';
  import icons from '../../../images/icons.svg';

  const FooterMob = () => {
    const handleLinkClick = () => {
      window.scrollTo(0, 0);
    };
    return (
      <FooterWrap>
        <FooterContainer>
          <FooterNavFlex>
            <LogoFlex>
              <StyledLogoLink to="/" aria-label="Logo Drink Master">
                <Icon>
                  <use href={icons + '#logo'} />
                </Icon>
                <span>Drink Master</span>
              </StyledLogoLink>
  
              <FollowUs />
            </LogoFlex>
  
            <nav>
              <StyledNavLink
                aria-label="To Drinks page"
                to="/drinks"
                onClick={handleLinkClick}
              >
                <span>Drinks</span>
              </StyledNavLink>
              <StyledNavLink
                aria-label="To Add drink page"
                to="/add"
                onClick={handleLinkClick}
              >
                <span>Add drink</span>
              </StyledNavLink>
              <StyledNavLink
                aria-label="To My drinks page"
                to="/my"
                onClick={handleLinkClick}
              >
                <span>My drinks</span>
              </StyledNavLink>
              <StyledNavLink
                aria-label="To Favorites drinks page"
                to="/favorites"
                onClick={handleLinkClick}
              >
                <span>Favorites drinks</span>
              </StyledNavLink>
            </nav>
          </FooterNavFlex>
  
          <SubscribeForm />
  
          <Copy>©2023 Drink Master. All rights reserved.</Copy>
          <StyledLink
            aria-label="To Privacy Policy page"
            to="/"
            onClick={handleLinkClick}
          >
            Privacy Policy
          </StyledLink>
          <StyledLink
            aria-label="To Terms of Service page"
            to="/"
            onClick={handleLinkClick}
          >
            Terms of Service
          </StyledLink>
        </FooterContainer>
      </FooterWrap>
    );
  };
  
  export default FooterMob;