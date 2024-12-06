import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/layout/Header/Header.tsx';
import LeftIcon from '@/assets/svg/left-icon.svg?react';
import {
  Container,
  Form,
  InputContainer,
  Label,
  Input,
  SubmitButton,
  ErrorMessage,
  HintMessage,
  Title,
  Section,
  DeleteButton,
} from './UserSettingPage.style.ts';

interface FormValues {
  name: string;
  currentPassword: string;
  newPassword: string;
  confirmNewPassword: string;
}

const UserSettingPage = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting, isValid },
  } = useForm<FormValues>();
  const [email, setEmail] = useState<string>('');

  // API 나오면 axios로 수정
  useEffect(() => {
    const fetchEmail = async () => {
      const response = await new Promise((resolve) => {
        setTimeout(() => resolve({ email: 'playground@naver.com' }), 1000);
      });
      setEmail((response as { email: string }).email);
    };

    fetchEmail();
  }, []);

  const onSubmit = async (data: FormValues) => {
    try {
      console.log('Submitted data:', data);
      alert('정보가 성공적으로 업데이트되었습니다!');
    } catch (error) {
      console.error('Error updating user info:', error);
    }
  };

  return (
    <Container>
      <Header title="설정" leftIcon={<LeftIcon />} onLeftClick={() => navigate(-1)} />
      <Title>회원정보</Title>

      <Form onSubmit={handleSubmit(onSubmit)}>
        <Section>
          <Label>이메일</Label>
          <Input type="text" value={email} readOnly />
        </Section>

        <InputContainer>
          <Label htmlFor="name">이름</Label>
          <Input
            id="name"
            placeholder="이름을 입력해 주세요"
            {...register('name', { required: '이름을 입력해 주세요.' })}
            hasError={!!errors.name}
          />
          {errors.name && <ErrorMessage>{errors.name.message}</ErrorMessage>}
        </InputContainer>

        <InputContainer>
          <Label htmlFor="currentPassword">현재 비밀번호</Label>
          <Input
            id="currentPassword"
            type="password"
            placeholder="현재 비밀번호 입력"
            {...register('currentPassword', { required: '현재 비밀번호를 입력해 주세요.' })}
            hasError={!!errors.currentPassword}
          />
          {errors.currentPassword && <ErrorMessage>{errors.currentPassword.message}</ErrorMessage>}
        </InputContainer>

        <InputContainer>
          <Label htmlFor="newPassword">새 비밀번호</Label>
          <Input
            id="newPassword"
            type="password"
            placeholder="새 비밀번호 입력"
            {...register('newPassword', {
              required: '새 비밀번호를 입력해 주세요.',
              pattern: {
                value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>]).{6,20}$/,
                message: '6-20자 이내 *영문 대소문자, 숫자, 특수문자 필수',
              },
            })}
            hasError={!!errors.newPassword}
          />
          {errors.newPassword ? (
            <ErrorMessage>{errors.newPassword.message}</ErrorMessage>
          ) : (
            <HintMessage>6-20자 이내 *영문 대소문자, 숫자, 특수문자 필수</HintMessage>
          )}
        </InputContainer>

        <InputContainer>
          <Label htmlFor="confirmNewPassword">새 비밀번호 재입력</Label>
          <Input
            id="confirmNewPassword"
            type="password"
            placeholder="새 비밀번호 재입력"
            {...register('confirmNewPassword', {
              required: '비밀번호를 재입력해 주세요.',
              validate: (value) =>
                value === watch('newPassword') || '비밀번호가 일치하지 않습니다.',
            })}
            hasError={!!errors.confirmNewPassword}
          />
          {errors.confirmNewPassword && (
            <ErrorMessage>{errors.confirmNewPassword.message}</ErrorMessage>
          )}
        </InputContainer>

        <Section>
          <Title>회원 탈퇴</Title>
          <DeleteButton type="button" onClick={() => alert('회원 탈퇴 요청이 처리되었습니다.')}>
            탈퇴
          </DeleteButton>
        </Section>

        <SubmitButton type="submit" disabled={!isValid || isSubmitting}>
          수정하기
        </SubmitButton>
      </Form>
    </Container>
  );
};

export default UserSettingPage;
