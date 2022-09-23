import React from "react";
import styled from "styled-components";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
interface UserSelectProps {
  isActiveModalStatus: () => void;
}
const LocationSelect = ({ isActiveModalStatus }: UserSelectProps) => {
  const [location, setLocation] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setLocation(event.target.value);
  };

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
            onChange={handleChange}
            label="location"
            MenuProps={{
              disableScrollLock: true,
            }}
          >
            {LOCATION_INFO.map((location, index) => (
              <MenuItem key={index} value={index}>
                {Object.values(location)}
              </MenuItem>
            ))}
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

const LOCATION_INFO: { [key: string]: string }[] = [
  { seoul: "서울" },
  { incheon: "인천" },
  { busan: "부산" },
  { daegu: "대구" },
  { gwangju: "광주" },
  { daejeon: "대전" },
  { ulsan: "울산" },
  { sejong: "세종" },
  { gyeonggi: "경기" },
  { gangwon: "강원" },
  { chungbuk: "충북" },
  { chungcheong: "충남" },
  { jeonbuk: "전북" },
  { jeonnam: "전남" },
  { gyeongbuk: "경북" },
  { gyeongnam: "경남" },
  { jeju: "제주" },
];

// const LOCATION_INFO: { [key: string]: string }[] = [
//   {  seoul: "서울"},
//   { incheon: "인천" },
//   { busan: "부산" },
//   { daegu: "대구" },
//   { gwangju: "광주" },
//   { daejeon: "대전" },
//   { ulsan: "울산" },
//   { sejong: "세종" },
//   { gyeonggi: "경기" },
//   { gangwon: "강원" },
//   { chungbuk: "충북" },
//   { chungcheong: "충남" },
//   { jeonbuk: "전북" },
//   { jeonnam: "전남" },
//   { gyeongbuk: "경북" },
//   { gyeongnam: "경남" },
//   { jeju: "제주" },
// ];

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
