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
      <ExchangeNation>{price}</ExchangeNation>
      <ExchangeNation>{unit}</ExchangeNation>
    </ExchangeItem>
  );
};

export default ExchangeCard;

const ExchangeItem = styled.div`
  width: 300px;
  height: 300px;
  margin-right: 40px;
  box-shadow: 10px 5px 5px gray;
`;

const ExchangeNation = styled.div`
  font-size: 20px;
`;
