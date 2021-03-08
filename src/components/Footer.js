import React from "react";
import styled from "styled-components";

const PageFooter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ffffff;
  width: 100%;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 99;
  background: #ed213a; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to top,
    #93291e,
    #ed213a
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to top, #93291e, #ed213a);
`;

function Footer() {
  return (
    <PageFooter>
      <p>練習使用 API來自 Rapid API</p>
    </PageFooter>
  );
}

export default Footer;
