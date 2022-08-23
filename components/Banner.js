import React, { useState } from "react";
import SubBanner from "./SubBanner";
import downImg from "../public/down.png";
import upImg from "../public/up.png";
import Image from "next/image";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";

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
    padding-top: 2rem;
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

  .banner-subtitle {
    font-size: large;
    margin-top: 0.4rem;
    margin-bottom: 1.5rem;
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
    display: inline-flex;
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
    margin-top: 5rem;
    padding-top: 1.5rem;
    padding-bottom: 0.8rem;
  }
  .parents-expand-section {
    display: contents;
  }
`;

const Spacer = styled.span`
  background: none;
  height: ${(props) => props.height};
  display: flex;
`;

const Banner = (props) => {
  const [showParentsToggle, setShowParentsToggle] = useState(true);

  const setShowparents = () => {
    setShowParentsToggle(!showParentsToggle);
  };

  const splitted = props.title.split(" ");
  const groom = splitted[0];
  const bride = splitted[2];

  return (
    <BannerContainer showParents={showParentsToggle}>
      <div className="banner-content">
        <AnimatePresence>
          {showParentsToggle && (
            <motion.div
              initial={{ opacity: 0, y: -70 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              whileTap={{ scale: 0.9 }}
            >
              <span className="parents-title">
                Con la bendición de nuestros padres
              </span>
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
            </motion.div>
          )}
        </AnimatePresence>
        <p className="banner-subtitle">{props.subtitle}</p>
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
        showHideIcon={
          <Image
            src={showParentsToggle ? upImg : downImg}
            width={40}
            height={40}
          />
        }
      />
    </BannerContainer>
  );
};

export default Banner;
