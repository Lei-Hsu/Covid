import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Navbar = styled.div`
  height: 60px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  z-index: 99;
  justify-content: space-between;
  align-items: center;
  grid-column: 1/13;
  background: #ed213a; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to top,
    #93291e,
    #ed213a
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to top, #93291e, #ed213a);
`;
const Title = styled.div`
  margin-left: 10px;
`;
const TitleH1 = styled.h1`
  color: #ffffff;
`;
const Nav = styled.div`
  margin-left: 0 auto;
  a {
    color: #ffffff;
    width: 100%;
    height: 100%;
    margin-right: 10px;
    transition-duration: 250ms;
    &:hover {
      color: #df8080;
    }
  }
`;

function Header() {
  return (
    <Navbar>
      <Title>
        <Link to="/">
          <TitleH1>COVID</TitleH1>
        </Link>
      </Title>
      <Nav>
        <Link to="/search">搜尋</Link>
        <Link to="/board">排行榜</Link>
      </Nav>
    </Navbar>
  );
}

export default Header;
