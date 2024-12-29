'use client';

import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import { Button, Form, Input } from '@/components/common';
import type { SignupRequest } from '@/types/auth';
import { signup } from '@/lib/api/auth';
import styled from '@emotion/styled';

const SignupPage = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SignupRequest>();

  const onSubmit = async (data: SignupRequest) => {
    try {
      await signup(data);
      router.push('/login');
    } catch (error) {
      console.error('회원가입 실패:', error);
    }
  };

  return (
    <Container>
      <Title>회원가입</Title>
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
            minLength: {
              value: 6,
              message: '비밀번호는 최소 6자 이상이어야 합니다',
            },
          })}
        />
        <Input
          label="닉네임"
          error={errors.nickname?.message}
          fullWidth
          {...register('nickname', {
            required: '닉네임을 입력해주세요',
            minLength: {
              value: 2,
              message: '닉네임은 최소 2자 이상이어야 합니다',
            },
          })}
        />
        <Button type="submit" fullWidth disabled={isSubmitting}>
          {isSubmitting ? '가입 중...' : '가입하기'}
        </Button>
      </Form>
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

export default SignupPage; 