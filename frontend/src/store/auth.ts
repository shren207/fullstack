import { atom } from 'jotai';

export const isAuthenticatedAtom = atom<boolean>(false);

// 초기 상태 설정
if (typeof window !== 'undefined') {
  const token = localStorage.getItem('token');
  if (token) {
    isAuthenticatedAtom.init = true;
  }
} 