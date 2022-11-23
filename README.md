# bacharta

#### OPEN API를 활용하여 날씨별 옷차림 추천, 지역별 날씨 + 미세먼지, 일일 환율 데이터+ 코로나 추이 등 다양한 생활 정보 제공 웹 어플리케이션

- 기존에 있는 날씨 사이트와 차별화를 두기 위해 "Personalized Weather Site" 구현
- 사용자 기반으로 현재 도시, 기온의 느낌(보통, 추움, 더움) 데이터를 수집 후, 사용자 맞춤 기온별 옷차림 안내

<br/>

# 목차

- [bacharta 바로가기](https://bacharta.netlify.app/)

- [실행](#1-실행)

<br/>
<br/>

## 팀원

| 이름                                  | 역할                 |
| ------------------------------------- | -------------------- |
| [백광현](https://github.com/rmawogns) | 로그인,Nav           |
| [이후경](https://github.com/ch4md0m)  |                      |
| [김인태](https://github.com/jiye-7)   |                      |
| [박보현](https://github.com/EEOOOO)   | 날씨 & 미세먼지 안내 |

<br/>
<br/>

## Tech Stack

<div>
    <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=white">
    <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=JavaScript&logoColor=white">
    <img src="https://img.shields.io/badge/typescript-3178C6?style=for-the-badge&logo=typescript&logoColor=black">
    <img src="https://img.shields.io/badge/styled components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white">
     <img src="https://img.shields.io/badge/css3-1572B6?style=for-the-badge&logo=css3&logoColor=white">
     <img src="https://img.shields.io/badge/React Query-FF4154?style=for-the-badge&logo=ReactQuery&logoColor=white">
      <img src="https://img.shields.io/badge/Chart.js-FF6384?style=for-the-badge&logo=Chart.js&logoColor=white">
     
</div>

<br/>
<br/>
 
## 1. 실행
### 실행 방법

```sh
npm install

npm run start
```

<br/>

<!-- ### 데모 링크

[🚀 데모링크 바로가기]() -->

<br/>
<br/>

<br/>
<br/>

### 2.1. 공통

<br/>
<br/>

### 2.2. 페이지

#### 1. Main 페이지

![bacharta main](https://user-images.githubusercontent.com/97820540/203570039-9494dc28-8ff4-4865-a4a4-f83e8a96e19e.gif)

<br/>

#### 2. Map 페이지

![bachartamap](https://user-images.githubusercontent.com/97820540/203570271-c5ffc816-988e-43a1-acfd-0b0af090587a.gif)

- Kakao Maps API와 OpenWeather API를 활용해 지도에 날씨와 미세먼지 데이터 표시

  - Key 값을 .env 파일에 저장 후, 사용

- React Query를 사용한 상태 관리

  - Loading, Error 일때 해당 컴포넌트 호출

- API 사용

  - axios.create를 사용해 비동기 통신을 axios 모듈화해 사용
  - process.env 사용으로 API 키 저장
  - Async await 사용해 비동기 통신 처리

- Maps 메인 페이지에 날씨와 미세먼지 두 개의 버튼 생성
- useState 사용으로 boolean 값으로 날씨와 미세먼지 데이터를 그려줌

[날씨]

- data로 들어오는 키값을 구조분해할당으로 선언
- 날씨 버튼 클릭 시, API를 호출해 switch문에 맞는 weather condition을 svg 이미지로 표시
- 절대 온도로 받아지는 데이터를 섭씨 온도로 변환하는 로직 구현

[미세먼지]

- 첫 렌더링 화면에 서울의 미세먼지 데이터 호출
- Mock data로 도시 버튼을 나열하고 클릭 시, 해당 id를
- 각 도시를 클릭 시, 해당 stationcode와 atmosphereValue를 호출해 useState에 담고, 중복 클릭 시, 각 도시의 데이터가 객체 배열에 추가
- 초기화 버튼 생성으로 클릭 시, 데이터가 reset 되는 함수 생성

<br/>

#### 3. Outfit 페이지

![bachartaoutfits](https://user-images.githubusercontent.com/97820540/203570404-8a28439f-c38e-42c8-953b-31048f7374bc.gif)

<br/>

#### 4. Login, Nav 페이지

![bachartalogin](https://user-images.githubusercontent.com/97820540/203570552-8f03da9f-f8ea-4d67-acce-eb641d939af2.gif)

- Oauth를 통한 소셜로그인.

![image](https://user-images.githubusercontent.com/97820540/197142154-f48bc93b-2523-45ca-b91d-6fd7c687405c.png)
로그인 버튼 클릭시 카카오 로그인 페이지로 이동.

![image](https://user-images.githubusercontent.com/97820540/197142000-499a9cca-1f9c-46cb-9993-7a86b0abb1d4.png)

로그인 성공시 redirect 페이지에서 인가코드 추출.

![image](https://user-images.githubusercontent.com/97820540/197142411-e25c4d41-eeab-48dd-9715-4890ac7fd3f9.png)
![image](https://user-images.githubusercontent.com/97820540/197142537-94637541-fad8-4952-b623-a0cd101c481c.png)

인가코드가 있을때만 토큰을 요청하는 로직 구현. (react-query의 enabled 옵션 활용)

![image](https://user-images.githubusercontent.com/97820540/197143017-a0b0df03-41f5-4cd6-bcf9-527c62ab962a.png)

token이 있는경우에 카카오에 프로필 get 요청 (마찬가지로 react-query의 enabled 옵션 활용.)

<br/>
