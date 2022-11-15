import { atom } from 'recoil';

export const KakaoProfile = atom({
  key: 'Profile',
  default: {
    userNickname: '',
    userProfile: '',
  },
});

export const LoadingState = atom({
  key: 'loading',
  default: true,
});
