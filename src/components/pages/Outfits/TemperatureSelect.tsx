import React from "react";
import styled from "styled-components";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import { indigo, grey } from "@mui/material/colors";

interface ControlProps {
  checked: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  name: string;
  inputProps: {
    "aria-label": string;
  };
}

interface SelectProps {
  isActiveModalStatus: () => void;
  getOutfitsInfo: () => void;
  controlProps: (item: string) => ControlProps;
}

const TemperatureSelect = ({
  isActiveModalStatus,
  controlProps,
  getOutfitsInfo,
}: SelectProps) => {
  return (
    <Wrap>
      <ModalHeader>
        <ModalTitle>지금 느끼는 온도는 어떤가요?</ModalTitle>
      </ModalHeader>
      <ModalSection>
        <ModalImage
          src="/images/Outfits/weather.png"
          alt="날씨아이콘"
        ></ModalImage>
      </ModalSection>

      <ModalSelect>
        <FormControl>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
            defaultValue="good"
            color="success"
          >
            <FormControlLabel
              value="cold"
              control={
                <Radio
                  {...controlProps("cold")}
                  sx={{
                    color: grey["300"],
                    "&.Mui-checked": {
                      color: indigo["A200"],
                    },
                  }}
                />
              }
              label="추워요"
            />
            <FormControlLabel
              value="normal"
              control={
                <Radio
                  {...controlProps("normal")}
                  sx={{
                    color: grey["300"],
                    "&.Mui-checked": {
                      color: indigo["A200"],
                    },
                  }}
                />
              }
              label="적당해요"
            />
            <FormControlLabel
              value="hot"
              control={
                <Radio
                  {...controlProps("hot")}
                  sx={{
                    color: grey["300"],
                    "&.Mui-checked": {
                      color: indigo["A200"],
                    },
                  }}
                />
              }
              label="더워요"
            />
          </RadioGroup>
        </FormControl>
      </ModalSelect>
      <ModalFooter>
        <PrevButton onClick={isActiveModalStatus}>이전</PrevButton>
        <NextButton onClick={getOutfitsInfo}>다음</NextButton>
      </ModalFooter>
    </Wrap>
  );
};

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
  padding-top: 10px;
`;
const ModalImage = styled.img`
  width: 100px;
`;
const ModalSelect = styled.div`
  ${({ theme }) => theme.flexMixin("center", "center")}
  padding-top: 14px;
`;
const ModalFooter = styled.div`
  ${({ theme }) => theme.flexMixin("", "center")}
  padding-top: 24px;
`;

const PrevButton = styled.button`
  box-sizing: border-box;
  margin-right: 10px;
  background-color: ${(props) => props.theme.lightGrey};
  padding: 10px 30px;
  color: ${(props) => props.theme.keyColor};
  border-radius: 30px;
  border: none;
  cursor: pointer;
  transition: all 0.25s ease;
  &:hover {
    background-color: ${(props) => props.theme.grey};
  }
`;
const NextButton = styled.button`
  background-color: ${(props) => props.theme.keyColor};
  padding: 10px 30px;
  color: ${(props) => props.theme.white};
  border-radius: 30px;
  border: none;
  cursor: pointer;
  transition: all 0.25s ease;
  &:hover {
    background-color: ${(props) => props.theme.hoverBlue};
  }
`;

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
