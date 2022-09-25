import styled from 'styled-components';
import ExchangeCard from './ExchangeCard';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
// import { ExchageProps } from './MainTypes';

const ExChange = ({ exchangeData }: { exchangeData: any }) => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 3,
    nextArrow: <Bt />,
  };

  return (
    <ExchageContainer>
      <Slider {...settings}>
        {exchangeData.map((exData: any, index: number) => (
          <ExchangeCard
            key={index}
            nation={exData.cntySgn._text}
            unit={exData.mtryUtNm._text}
            price={exData.fxrt._text}
          />
        ))}
      </Slider>
    </ExchageContainer>
  );
};

export default ExChange;

const ExchageContainer = styled.div`
  height: 450px;
  overflow: hidden;
`;
const Bt = styled.div`
  background-color: red;
  width: 30px;
  height: 30px;
`;
