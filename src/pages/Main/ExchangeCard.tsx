import styled from "styled-components";

interface ItemProps {
  nation: string;
  price: string;
  unit: string;
}
const ExchangeCard = ({ nation, price, unit }: ItemProps) => {
  return (
    <ExchangeItem>
      <ExchangeNation>{nation}</ExchangeNation>
      <ExchangeNation>가격 : {price}</ExchangeNation>
      <ExchangeNation>단위 : {unit}</ExchangeNation>
    </ExchangeItem>
  );
};

export default ExchangeCard;

const ExchangeItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 300px;
  height: 300px;

  border: 1px solid black;
  box-shadow: 10px 5px 5px gray;
`;

const ExchangeNation = styled.div`
  margin: 10px;
  font-size: 20px;
`;
