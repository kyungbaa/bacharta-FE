import React from "react";
import * as S from "./Outfits.styles";

import OutfitsModal from "../../components/pages/Outfits/OutfitsModal";
const Outfits = () => {
  return (
    <S.OutfitsWrapper>
      <S.OutfitsSection>
        <OutfitsModal></OutfitsModal>
      </S.OutfitsSection>
    </S.OutfitsWrapper>
  );
};

export default Outfits;
