import { useEffect } from 'react';
import styled from 'styled-components';
import { tokenStorage } from '../../storage';
import OutfitsModal from './components/OutfitsModal';

const Outfits = () => {
  const REST_API_KEY = process.env.REACT_APP_REST_API_KEY;
  const REDIRECT_URI = process.env.REACT_APP_REDIRECT_URI;
  const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

  useEffect(() => {
    if (!tokenStorage.get('access_token')) {
      window.location.href = KAKAO_AUTH_URL;
    }
  });
  return (
    <OutfitsWrapper>
      <OutfitsSection>
        <OutfitsModal></OutfitsModal>
      </OutfitsSection>
    </OutfitsWrapper>
  );
};
const OutfitsWrapper = styled.div`
  ${({ theme }) => theme.flexMixin('', 'center')}
`;

const OutfitsSection = styled.div`
  ${({ theme }) => theme.flexMixin('center', 'center')}
  width: 1080px;
`;

export default Outfits;
