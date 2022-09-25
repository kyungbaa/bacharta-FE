import React from "react";
import styled from "styled-components";

const Nav = () => {
  const REST_API_KEY = process.env.REACT_APP_REST_API_KEY;
  const REDIRECT_URI = process.env.REACT_APP_REDIRECT_URI;
  const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;
  const handleLogin = () => {
    window.location.href = KAKAO_AUTH_URL;
  };
  return <Button onClick={handleLogin}>로그인해봐</Button>;
};

export default Nav;

const Button = styled.button`
  width: 150px;
`;
