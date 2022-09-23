import React, { useState } from "react";
import styled from "styled-components";
import LocationSelect from "./LocationSelect";
import TemperatureSelect from "./TemperatureSelect";

const OutfitsModal = () => {
  const [isActiveModal, setIsActiveModal] = useState(false);
  const [sensibleTemp, setSensibleTemp] = React.useState("");

  const isActiveModalStatus = () => {
    setIsActiveModal(!isActiveModal);
  };

  const handleSelectTemp = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSensibleTemp(event.target.value);
  };

  const controlProps = (item: string) => ({
    checked: sensibleTemp === item,
    onChange: handleSelectTemp,
    value: item,
    name: "color-radio-button",
    inputProps: { "aria-label": item },
  });

  return (
    <>
      <ModalWrapper>
        {!isActiveModal ? (
          <LocationSelect isActiveModalStatus={isActiveModalStatus} />
        ) : (
          <TemperatureSelect
            isActiveModalStatus={isActiveModalStatus}
            controlProps={controlProps}
          />
        )}
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
