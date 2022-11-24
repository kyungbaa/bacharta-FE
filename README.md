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
| [이후경](https://github.com/ch4md0m)  | Outfits, 404 Not Found, Footer, Design |
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

같은 온도일지라도, 사람마다 체감하는 온도가 다르기에 사용자별 체감 온도에 따른 그날의 옷차림을 추천함.
5일간의 일기 예보를 3시간 간격으로, 알아보기 쉽게 기온과 아이콘화한 그날의 날씨 상태(맑음, 흐림, 비 등)을 ```slick-slider``` 를 사용하여 carousel로, 
```chart js```를 사용하여 온도와 습도를 chart로 보여줌.


[지역과, 체감 온도 입력]

- 로그인 token이 없을 경우, 로그인 페이지로 이동.

- 지역명을 input창에 입력하면 입력값이 ```locar-storage``` 저장되고 다음 모달창 (체감 온도)이동 버튼이 활성화

- 활성화 된 다음 버튼 클릭 시, 입력된 지역명을 바탕으로 지역날씨 API에 날씨 정보를 요청
    - 입력된 지역명이 올바른 지역명이 아닐 경우 경고창을 화면에 보여주고 2초 뒤 사라짐
    - 받은 날씨 정보를 recoil에 저장하고 해당 날의 날씨를 ```switch```문을 사용하여, 그 날의 맞는 날씨 이미지를 체감 온도 모달창에서 보여줌
    
- 지역 선택 모달창 대신, 체감 온도 선택 모달창 활성화

- 저장한 날씨 데이터 아이콘(맑음, 흐림, 비 등) 화면에 보여줌 

- 사용자가 선택하는 체감온도(추워요, 조금추워요, 적당해요, 조금 더워요, 더워요)에 맞게 미리 상수로 저장해 둔 ± 5~0℃로 저장


[옷차림 추천 및 날씨 예보]

- result페이지 이동 시, recoil에 저장된 날씨 데이터와 사용자 체감 온도를 계산하여, 그 온도를 기준으로 ```switch``` 문을 사용하여, 추천하는 옷차림 결과 출력 
  (해당하는 옷차림은 미리 상수데이터로 저장)

- 지역 입력 모달창에서 저장한 날씨 데이터에서 위도와 경도로 다시 날씨예보 API요청하여 받아온 데이터를 recoil로 저장

- 날씨 예보 데이터를 원하는 데이터에 맞게 사용하기 위해 데이터 정리 

- 정리한 데이터를 기반으로 화면에 ```slick-slider```로 시간대별로 ```carousel```로 보여줌

- ```Chart js```의 옵션과 데이터를 사용하여, 날씨 예보 중 온도와 습도를 차트로 시간대별로 나누어 보여줌

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
