import React from "react";
import styled from "styled-components";
import Image from "next/image";
import externalLink from "../public/externalLink.png";

const RegalosContainer = styled.div`
  min-height: 30vh;
  background-color: var(--accent-color);
  color: white;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-weight: 400;

  .btn-liverpool {
    background-color: var(--secondary-bg-color);
    color: var(--light-text-color);
    border: none;
    padding: 10px;
    border-radius: 8px;
    margin-top: 0.8rem;
    margin-bottom: 1rem;
  }

  .regalos-title {
    font-weight: 400;
    margin-bottom: 0.5rem;
  }
  .button-content {
    display: flex;
    grid-gap: 0.3rem;
    color: var(--light-text-color);
  }
  .button-content > .external > * {
    filter: brightness(5) !important;
  }
`;

const Regalos = (props) => {
  return (
    <RegalosContainer>
      <h2 className="regalos-title">{props.title}</h2>
      <p>{props.phrase}</p>
      <button className="btn-liverpool shadow">
        <div className="button-content">
          <a href={props.url} target="_blank" rel="noreferrer">
            Mesa de Regalos
          </a>
          <div className="external">
            <Image
              id="external"
              className="external-link"
              src={externalLink}
              width={15}
              height={15}
            />
          </div>
        </div>
      </button>
    </RegalosContainer>
  );
};

export default Regalos;
