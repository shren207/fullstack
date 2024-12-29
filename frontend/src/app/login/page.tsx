'use client';

import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useSetAtom } from 'jotai';
import { Button, Form, Input } from '@/components/common';
import type { LoginRequest } from '@/types/auth';
import { login } from '@/lib/api/auth';
import { isAuthenticatedAtom } from '@/store/auth';
import styled from '@emotion/styled';

const LoginPage = () => {
  const router = useRouter();
  const setIsAuthenticated = useSetAtom(isAuthenticatedAtom);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginRequest>();

  const onSubmit = async (data: LoginRequest) => {
    try {
      await login(data);
      setIsAuthenticated(true);
      router.push('/');
      router.refresh();
    } catch (error) {
      console.error('로그인 실패:', error);
    }
  };

  return (
    <Container>
      <Title>로그인</Title>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Input
          label="이메일"
          type="email"
          error={errors.email?.message}
          fullWidth
          {...register('email', {
            required: '이메일을 입력해주세요',
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: '올바른 이메일 주소를 입력해주세요',
            },
          })}
        />
        <Input
          label="비밀번호"
          type="password"
          error={errors.password?.message}
          fullWidth
          {...register('password', {
            required: '비밀번호를 입력해주세요',
          })}
        />
        <Button type="submit" fullWidth disabled={isSubmitting}>
          {isSubmitting ? '로그인 중...' : '로그인'}
        </Button>
      </Form>
      <SignupLink>
        계정이 없으신가요? <Link href="/signup">회원가입</Link>
      </SignupLink>
    </Container>
  );
};

const Container = styled.div`
  max-width: 400px;
  margin: 0 auto;
  padding: 40px 20px;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 600;
  text-align: center;
  margin-bottom: 32px;
`;

const SignupLink = styled.p`
  text-align: center;
  margin-top: 24px;
  font-size: 14px;
  color: #6B7280;

  a {
    color: #3B82F6;
    text-decoration: none;
    font-weight: 500;
    margin-left: 4px;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export default LoginPage; 