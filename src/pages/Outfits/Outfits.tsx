import React from "react";

import styled from "styled-components";
import OutfitsModal from "./components/OutfitsModal";

const Outfits = () => {
  return (
    <OutfitsWrapper>
      <OutfitsSection>
        <OutfitsModal></OutfitsModal>
      </OutfitsSection>
    </OutfitsWrapper>
  );
};
const OutfitsWrapper = styled.div`
  ${({ theme }) => theme.flexMixin("", "center")}
`;

const OutfitsSection = styled.div`
  ${({ theme }) => theme.flexMixin("center", "center")}
  width: 1080px;
`;

export default Outfits;
