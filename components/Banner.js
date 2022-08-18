import React from "react";
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
`;

const Spacer = styled.span`
  background: none;
  height: ${(props) => props.height};
  display: flex;
`;

const Banner = (props) => {
  const splitted = props.title.split(" ");
  const groom = splitted[0];
  const bride = splitted[2];

  return (
    <BannerContainer>
      <div className="banner-content">
        <p className="banner-subtitle">{props.subtitle}</p>
        <h1 className="banner-title">
          {groom}
          <Spacer height="0vh" />
          {"y"}
          <Spacer height="8vh" />
          {bride}
        </h1>
        {/* <div className="image-container" >
          <Image className="ring-behind" src={ringImg} />
        </div> */}
      </div>
    </BannerContainer>
  );
};

export default Banner;
