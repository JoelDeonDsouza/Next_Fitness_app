import styled from "styled-components";

export const NavContainer = styled.nav`
  background: #d9f2f5;
  height: 70px;
  display: flex;
  position: sticky;
  top: 0;
  z-index: 10;
  @media screen and (max-width: 960px) {
    transition: 0.9s all ease;
    position: static;
  }
`;

export const NavContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 1;
  width: 100%;
  padding: 15px 30px;
  @media screen and (max-width: 960px) {
    padding: 15px 10px;
  }
`;

export const Logo = styled.img`
  width: 70px;
  height: 70px;
  @media screen and (max-width: 960px) {
    width: 50px;
    height: 50px;
  }
`;
