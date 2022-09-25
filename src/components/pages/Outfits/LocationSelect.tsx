import React from "react";
import styled from "styled-components";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

interface UserSelectProps {
  isActiveModalStatus: () => void;
  handleChangeLocation: (event: SelectChangeEvent) => void;
  location: string;
}
const LocationSelect = ({
  isActiveModalStatus,
  handleChangeLocation,
  location,
}: UserSelectProps) => {
  return (
    <Wrap>
      <ModalHeader>
        <ModalTitle>지금 계신곳을 알려주세요.</ModalTitle>
      </ModalHeader>
      <ModalSection>
        <ModalImage
          src="/images/Outfits/mark.png"
          alt="마커아이콘"
        ></ModalImage>
      </ModalSection>
      <ModalSelect>
        <FormControl variant="standard" sx={{ m: 1, minWidth: 180 }}>
          <InputLabel id="demo-simple-select-standard-label">
            지역 선택
          </InputLabel>
          <Select
            labelId="demo-simple-select-standard-label"
            id="demo-simple-select-standard"
            value={location}
            onChange={handleChangeLocation}
            label="location"
            MenuProps={{
              disableScrollLock: true,
            }}
          >
            {LOCATION_INFO.map((location) => {
              return (
                <MenuItem key={location.id} value={location.name}>
                  {location.name}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
      </ModalSelect>
      <ModalFooter>
        <NextButton onClick={isActiveModalStatus} disabled={!location}>
          다음
        </NextButton>
      </ModalFooter>
    </Wrap>
  );
};

const LOCATION_INFO: { name: string; id: number }[] = [
  { id: 0, name: "서울" },
  { id: 1, name: "인천" },
  { id: 2, name: "부산" },
  { id: 3, name: "대구" },
  { id: 4, name: "광주" },
  { id: 5, name: "대전" },
  { id: 6, name: "울산" },
  { id: 7, name: "세종" },
  { id: 8, name: "경기" },
  { id: 9, name: "강원" },
  { id: 10, name: "충북" },
  { id: 11, name: "충남" },
  { id: 12, name: "전북" },
  { id: 13, name: "전남" },
  { id: 14, name: "경북" },
  { id: 15, name: "경남" },
  { id: 16, name: "제주" },
];

const Wrap = styled.div``;
const ModalHeader = styled.div`
  ${({ theme }) => theme.flexMixin("", "center")}
`;
const ModalTitle = styled.h2`
  padding: 10px 0;
  font-weight: 600;
  font-size: 22px;
  color: ${(props) => props.theme.keyColor};
`;

const ModalSection = styled.div`
  ${({ theme }) => theme.flexMixin("", "center")}
`;
const ModalImage = styled.img`
  padding-top: 8px;
  width: 70px;
`;
const ModalSelect = styled.div`
  ${({ theme }) => theme.flexMixin("center", "center")}
`;

const ModalFooter = styled.div`
  ${({ theme }) => theme.flexMixin("", "center")}
  padding-top: 24px;
`;

const NextButton = styled.button`
  background-color: ${(props) =>
    props.disabled === true ? props.theme.ligthGrey : props.theme.keyColor};
  padding: 10px 30px;
  color: ${(props) =>
    props.disabled === true ? props.theme.keyColor : props.theme.white};
  border-radius: 30px;
  border: none;
  cursor: pointer;
  transition: all 0.25s ease;
  &:hover {
    background-color: ${(props) =>
      props.disabled === true ? props.theme.ligthGrey : props.theme.hoverBlue};
  }
`;
export default LocationSelect;
