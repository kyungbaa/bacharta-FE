// import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import qs from 'qs';
import { getKakaoToken, postToken } from '../../api/authAPI';
import { tokenStorage } from '../../storage/storage';
import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { KakaoProfile } from '../../store/store';

const Login = () => {
  const location = useLocation();
  const KAKAO_CODE = location.search.split('=')[1];
  const REST_API_KEY = process.env.REACT_APP_REST_API_KEY;
  const REDIRECT_URI = process.env.REACT_APP_REDIRECT_URI;
  const CLIENT_SECRET = process.env.REACT_APP_CLIENT_SECRET;
  const [, setProfile] = useRecoilState(KakaoProfile);

  const postData = qs.stringify({
    grant_type: `authorization_code`,
    client_id: REST_API_KEY,
    redirect_uri: REDIRECT_URI,
    code: KAKAO_CODE,
    client_secret: CLIENT_SECRET,
  });

  const tokenApi = async (postData: any) => {
    const response = await getKakaoToken(postData);
    const data = await postToken(response.access_token);
    return data;
  };

  useEffect(() => {
    tokenApi(postData).then((res) => {
      setProfile(res.data.kakaoUserData);
      tokenStorage.set('access_token', res.data.serviceToken);
    });
  }, [postData, setProfile]);

  return <></>;
};

export default Login;
