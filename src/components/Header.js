import React from 'react';
import styled from 'styled-components';
function Header() {
  return (
    <Nav>
      <Logo src="/images/logo.svg" />
      <NavMenu>
        <a>
          <img src="/images/home-icon.svg" />
          <span>HOME</span>
        </a>
        <a>
          <img src="/images/search-icon.svg" />
          <span>SEARCH</span>
        </a>
        <a>
          <img src="/images/watchlist-icon.svg" />
          <span>WATCHLIST</span>
        </a>
        <a>
          <img src="/images/original-icon.svg" />
          <span>ORIGINALS</span>
        </a>
        <a>
          <img src="/images/movie-icon.svg" />
          <span>MOVIES</span>
        </a>
        <a>
          <img src="/images/series-icon.svg" />
          <span>SERIES</span>
        </a>
      </NavMenu>
      <UserImg src="/images/profile.jpg" />
    </Nav>
  )
}

export default Header

const Nav = styled.div`
background: #090b13;

height: 70px;
display: flex;
align-items: center;
padding: 0 36px;
`

const Logo = styled.img`
width: 80px;
cursor: pointer;

`
const NavMenu = styled.div`
display: flex;
flex: 1;
margin-left: 20px;
a {
  display: flex;
  align-items: center;
  padding: 0 12px;
  cursor: pointer;
  align-items: center;
  img {
    height: 20px;
  }
  span {
    font-size: 13px;
    letter-spacing: 1.42px;
    position: relative;

    &:after {
      content: "";
      height: 2px;
      background: white;
      position: absolute;
      left: 0;
      right: 0;
      bottom: -6px;
      opacity: 0;
      transform-origin: left center;
      transform: scaleX(0);
      transition: 250ms ease-in-out;
      t
    }
  }
  &:hover {
    span:after {
      transform: scaleX(1);
      opacity: 1;
    }
  }
}
`

const UserImg = styled.img`
width: 48px;
height: 48px;
border-radius: 50%;
cursor: pointer;
`