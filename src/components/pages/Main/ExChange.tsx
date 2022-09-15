import styled from "styled-components";
import { ExchageProps } from "./MainTypes";
import ExchangeCard from "./ExchangeCard";

const ExChange = ({ exchangeData }: { exchangeData: ExchageProps[] }) => {
  return (
    <ExchageContainer>
      {exchangeData
        .map((exData, index) => (
          <ExchangeCard
            key={index}
            nation={exData.cntySgn._text}
            unit={exData.mtryUtNm._text}
            price={exData.fxrt._text}
          />
        ))
        .slice(1, 6)}
    </ExchageContainer>
  );
};

export default ExChange;

const ExchageContainer = styled.div`
  display: flex;
`;
