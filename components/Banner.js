import React, { useState } from "react";
import SubBanner from "./SubBanner";

import styled from "styled-components";

const BannerContainer = styled.div`
  background: linear-gradient(
    to left,
    rgba(255, 255, 255, 0.4),
    var(--overlay-color)
  );

  .banner-content {
    animation: AnimateBG 6s infinite ease-in-out;
    min-height: 50vh;
    position: relative;
    color: var(--main-text-color);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
  }

  .main-title {
    color: var(--main-title-color);
  }

  .banner-title {
    text-align: center;
    font-size: 6rem;
    font-family: "Beau Rivage", cursive;
    font-family: "Birthstone", cursive;
    font-family: "Birthstone Bounce", cursive;
    font-family: "Corinthia", cursive;
    line-height: 3rem;
    margin: 2rem 1rem;
    margin-bottom: ${(props) => props.showParents && "4rem"};
  }

  @keyframes AnimateBG {
    0% {
    }
    50% {
      background: rgba(167, 133, 86, 0.5);
    }
    75% {
      background: rgba(255, 255, 255, 0.7);
    }
    100% {
      background: transparent;
    }
  }

  .parents-section {
    display: flex;
    width: 100%;
    justify-content: space-evenly;

    .parents {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      font-size: smaller;
      margin-bottom: 2rem;
      margin-top: 1rem;
    }
    .parents.left {
      border-right: 1px solid var(--accent-color);
      width: 50%;
    }
    .parents.right {
      border-left: 1px solid var(--accent-color);
      width: 50%;
    }
  }
  .parents-title {
    font-size: small;
  }
`;

const Spacer = styled.span`
  background: none;
  height: ${(props) => props.height};
  display: flex;
`;

const Banner = (props) => {
  const [showParentsToggle, setShowParentsToggle] = useState(false);

  const setShowparents = () => {
    setShowParentsToggle(!showParentsToggle);
  };

  const splitted = props.title.split(" ");
  const groom = splitted[0];
  const bride = splitted[2];

  return (
    <BannerContainer showParents={showParentsToggle}>
      <div className="banner-content">
        <p className="banner-subtitle">{props.subtitle}</p>
        {showParentsToggle && (
          <>
            <h3 className="parents-title">
              Con la bendición de nuestros papás
            </h3>
            <div className="parents-section">
              <div className="parents left">
                <span>Soledad Fierro Quiñonez</span>
                <span>Mónico Soto Escobar</span>
              </div>
              <div className="parents right">
                <span>Eulalia García Eguiarte</span>
                <span>Guillermo López Tsubuku</span>
              </div>
            </div>
          </>
        )}
        <h1 className="banner-title">
          {groom}
          <Spacer height="0vh" />
          {"y"}
          <Spacer height="8vh" />
          {bride}
        </h1>
      </div>
      <SubBanner
        title="¡Estás Invitado!"
        date="25 Marzo 2023"
        phrase="Será un honor que seas parte de este momento tan especial."
        showParents={setShowparents}
      />
    </BannerContainer>
  );
};

export default Banner;
