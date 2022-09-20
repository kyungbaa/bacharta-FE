import React from "react";
import styled from "styled-components";
import * as S from "./SelectStyle";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
interface UserSelectProps {
  isActiveModalStatus: () => void;
}
const TemperatureSelect = ({ isActiveModalStatus }: UserSelectProps) => {
  return (
    <S.Wrap>
      <S.ModalHeader>
        <S.ModalTitle>지금 느끼는 온도는 어떤가요?</S.ModalTitle>
      </S.ModalHeader>
      <S.ModalSection>
        <S.ModalImage
          src="/images/Outfits/weather.png"
          alt="날씨아이콘"
        ></S.ModalImage>
      </S.ModalSection>

      <S.ModalSelect>
        <FormControl>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
            defaultValue="good"
          >
            <FormControlLabel
              value="cold."
              control={<Radio />}
              label="추워요"
            />
            <FormControlLabel
              value="good"
              control={<Radio />}
              label="적당해요"
            />
            <FormControlLabel value="hot" control={<Radio />} label="더워요" />
          </RadioGroup>
        </FormControl>
      </S.ModalSelect>
      <S.ModalFooter>
        {/* <PrevButton>이전</PrevButton> */}
        <S.NextButton>다음</S.NextButton>
      </S.ModalFooter>
    </S.Wrap>
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

export default TemperatureSelect;
