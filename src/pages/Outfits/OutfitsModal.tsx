import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import LocationSelect from './LocationSelect';
import TemperatureSelect from './TemperatureSelect';
import { SelectChangeEvent } from '@mui/material/Select';
import axios from 'axios';

const OutfitsModal = () => {
  const [isActiveModal, setIsActiveModal] = useState(false);

  const [userSelect, setUserSelect] = React.useState({
    sensibleTemp: '',
    location: '',
  });

  const { sensibleTemp, location } = userSelect;

  const tempSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  const isActiveModalStatus = () => {
    setIsActiveModal(!isActiveModal);
  };

  const handleSelectTemp = (event: React.ChangeEvent<HTMLInputElement>) => {
    const tempValue = event.target.value;
    setUserSelect({ ...userSelect, sensibleTemp: tempValue });
  };

  const controlProps = (item: string) => ({
    checked: sensibleTemp === item,
    onChange: handleSelectTemp,
    value: item,
    name: 'color-radio-button',
    inputProps: { 'aria-label': item },
  });

  const handleChangeLocation = (event: SelectChangeEvent) => {
    const locationValue = event.target.value;
    setUserSelect({ ...userSelect, location: locationValue });
  };

  const getOutfitsInfo = () => {
    axios
      .post('http://localhost:3000//outfits', {
        sensibleTemp: sensibleTemp,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <>
      <ModalWrapper onSubmit={tempSubmit}>
        {!isActiveModal ? (
          <LocationSelect
            location={location}
            isActiveModalStatus={isActiveModalStatus}
            handleChangeLocation={handleChangeLocation}
          />
        ) : (
          <TemperatureSelect
            isActiveModalStatus={isActiveModalStatus}
            controlProps={controlProps}
            getOutfitsInfo={getOutfitsInfo}
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
