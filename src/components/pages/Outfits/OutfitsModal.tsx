import React from "react";
import * as S from "./OutfitsModal.styles";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

const Outfits = () => {
  const [location, setLocation] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setLocation(event.target.value);
  };

  return (
    <>
      <S.ModalWrapper>
        <S.ModalHeader>
          <S.ModalTitle>지금 계신곳을 알려주세요.</S.ModalTitle>
        </S.ModalHeader>
        <S.ModalSection>
          <S.ModalImage
            src="/images/Outfits/mark.png"
            alt="마커아이콘"
          ></S.ModalImage>
        </S.ModalSection>
        <S.ModalSelect>
          <FormControl variant="standard" sx={{ m: 1, minWidth: 180 }}>
            <InputLabel id="demo-simple-select-standard-label">
              지역 선택
            </InputLabel>
            <Select
              labelId="demo-simple-select-standard-label"
              id="demo-simple-select-standard"
              value={location}
              onChange={handleChange}
              label="Age"
            >
              {LOCATION_INFO.map((location, index) => (
                <MenuItem key={index} value={index}>
                  {Object.values(location)}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </S.ModalSelect>
        <S.ModalFooter>
          <S.ModalButton>다음</S.ModalButton>
        </S.ModalFooter>
      </S.ModalWrapper>
    </>
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

export default Outfits;
