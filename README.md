# bacharta

#### OPEN API를 활용하여 날씨별 옷차림 추천, 지역별 날씨 + 미세먼지, 일일 환율 데이터+ 코로나 추이 등 다양한 생활 정보 제공 웹 어플리케이션

<br/>

# 목차

- [실행](#1-실행)

<br/>
<br/>

## 팀원

| 이름                                  | 역할       |
| ------------------------------------- | ---------- |
| [백광현](https://github.com/rmawogns) | 로그인,Nav |
| [이후경](https://github.com/ch4md0m)  |            |
| [김인태](https://github.com/jiye-7)   |            |
| [박보현](https://github.com/EEOOOO)   |            |

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

- bla bla.
- bla bla.

<br/>

#### 2. Map 페이지

-

<br/>

#### 3. Outfit 페이지

- bla bla.
- bla bla.

<br/>

#### 4. Login, Nav 페이지

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
