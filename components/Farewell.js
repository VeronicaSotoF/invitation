import React from "react";
import styled from "styled-components";

const FooterContainer = styled.div`
  min-height: 30vh;
  background-color: var(--secondary-bg-color);
  color: var(--light-text-color);
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .title {
    margin-top: 1rem;
    font-family: "Corinthia", cursive;
    font-size: 4rem;
    font-weight: 100;
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <h3 className="title">Te esperamos</h3>
      <h4>Verónica y Guillermo</h4>
    </FooterContainer>
  );
};

export default Footer;
