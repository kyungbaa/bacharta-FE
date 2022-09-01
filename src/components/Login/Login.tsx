import React, { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import qs from "qs";

const Login = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const KAKAO_CODE = location.search.split("=")[1];
  const REST_API_KEY = process.env.REACT_APP_REST_API_KEY;
  const REDIRECT_URI = process.env.REACT_APP_REDIRECT_URI;
  const CLIENT_SECRET = process.env.REACT_APP_CLIENT_SECRET;

  const data = qs.stringify({
    grant_type: `authorization_code`,
    client_id: REST_API_KEY,
    redirect_uri: REDIRECT_URI,
    code: KAKAO_CODE,
    client_secret: CLIENT_SECRET,
  });
  const getKakaoToken = async () => {
    await axios
      .post("https://kauth.kakao.com/oauth/token", data, {
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
      })
      .then((res) => {
        console.log(res);
        if (res.data.access_token) {
          localStorage.setItem("access_token", res.data.access_token);
        }
      })
      .catch((err) => console.log(err));

    await axios
      .get("http://127.0.0.1:3001/user/sign", {
        headers: {
          Authorization: `${localStorage.getItem("access_token")}`,
        },
      })
      .then((res) => {
        console.log(res);
      });
  };

  useEffect(() => {
    if (!location.search) return;
    getKakaoToken();
  }, []);

  return <div>kakaologin</div>;
};

export default Login;
