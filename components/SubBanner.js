import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const SubBannerContainer = styled.div`
  min-height: 30vh;
  padding: 1rem;
  background: linear-gradient(to bottom, white, rgba(255, 255, 255, 0.1));
  background-size: 300%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  border-radius: none !important;
  border-bottom: none !important;
  position: relative;
  transition: transform 0.8s ease-in-out p {
    margin-top: 1.5rem;
  }

  h2 {
    margin: 0;
    margin-bottom: 1rem;
  }
`;

const Circle = styled(motion.div)`
  position: absolute;
  height: 2.3rem;
  width: 2.3rem;
  border-radius: 50%;
  display: inline-block;
  top: -1.2rem;
  transition: transform 0.3s ease-in-out;
  p {
    margin-top: 1.5rem;
  }
  transform: ${(props) =>
    props.rotateIcon ? "rotate(0deg) !important" : "rotate(180deg) !important"};
`;

const SubBanner = (props) => {
  const [rotate, setRotate] = useState(false);

  useEffect(() => {
    setRotate(props.rotate);
  }, [props.rotate]);

  return (
    <SubBannerContainer className="glass">
      <Circle
        showParents={props.showParents}
        rotateIcon={rotate}
        onClick={(e) => {
          props.showParents();
          e.preventDefault();
        }}
        whileTap={{ scale: 0.9 }}
      >
        {props.showHideIcon}
      </Circle>
      <h2>{props.title}</h2>
      <span>{props.date}</span>
      <p>{props.phrase}</p>
    </SubBannerContainer>
  );
};

export default SubBanner;
