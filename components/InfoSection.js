import React from "react";
import styled from "styled-components";
import ContentCard from "./ContentCard";
import locationChurch from "../public/locationChurch.jpg";
import locationReception from "../public/locationReception.jpg";
import externalLink from "../public/externalLink.png";
import glasses from "../public/glasses.png";
import church from "../public/church.png";

const InfoSectionContainer = styled.div`
  min-height: 80vh;
`;

const InfoSection = () => {
  return (
    <InfoSectionContainer>
      <ContentCard
        logo={church}
        linkImg={externalLink}
        title="CEREMONIA"
        place="Parroquia Señor de la Misericordia."
        address="Esmeralda s/n, Alamos Infonavit, 31024 Gómez Palacio, Dgo."
        time="19:00 hrs"
        link="https://goo.gl/maps/i8nEZrWExiNToGT68"
        mapImg={locationChurch}
      />
      <ContentCard
        logo={glasses}
        linkImg={externalLink}
        title="RECEPCIÓN"
        place="Quinta Villa Valentina."
        address="Calz. Fundadores s/n, Miravalle, 35015 Gómez Palacio, Dgo."
        time="21:00 hrs"
        link="https://goo.gl/maps/nR6HAL6x3Ytw1wsUA"
        mapImg={locationReception}
      />
    </InfoSectionContainer>
  );
};

export default InfoSection;
