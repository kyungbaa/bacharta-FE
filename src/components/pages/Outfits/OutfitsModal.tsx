import React, { useState } from "react";
import styled from "styled-components";
import LocationSelect from "./LocationSelect";
import TemperatureSelect from "./TemperatureSelect";
const OutfitsModal = () => {
  interface UserSeletct {
    location: "string";
    temperater: number;
  }

  interface ActiveModal {}
  const [userSelect, SetUserSelect] = useState<UserSeletct | null>();
  const [isActiveModal, setIsActiveModal] = useState(false);
  const isActiveModalStatus = () => {
    setIsActiveModal(!isActiveModal);
  };
  return (
    <>
      <ModalWrapper>
        <LocationSelect isActiveModalStatus={isActiveModalStatus} />
        <TemperatureSelect isActiveModalStatus={isActiveModalStatus} />
      </ModalWrapper>
    </>
  );
};
const ModalWrapper = styled.form`
  background-color: ${(props) => props.theme.white};
  margin-top: 150px;
  padding: 30px;
  width: 480px;
  border-radius: ${(props) => props.theme.bordeRadius};
  box-shadow: ${(props) => props.theme.highModalShdow};
`;

export default OutfitsModal;
