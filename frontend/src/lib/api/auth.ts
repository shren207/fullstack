import { apiClient } from '../api-client';
import type { LoginRequest, LoginResponse, SignupRequest, User } from '@/types/auth';
import { setCookie, deleteCookie } from 'cookies-next';

export const signup = async (data: SignupRequest): Promise<User> => {
  const response = await apiClient.post<User>('/auth/signup', data);
  return response.data;
};

export const login = async (data: LoginRequest): Promise<LoginResponse> => {
  const response = await apiClient.post<LoginResponse>('/auth/login', data);
  const { access_token } = response.data;
  
  // 토큰을 쿠키에 저장 (7일 유효)
  setCookie('token', access_token, { 
    maxAge: 60 * 60 * 24 * 7,
    path: '/',
  });
  
  return response.data;
};

export const logout = () => {
  deleteCookie('token');
}; 