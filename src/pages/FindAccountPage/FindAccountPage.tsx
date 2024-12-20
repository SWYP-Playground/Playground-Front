import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import {
  Container,
  Form,
  Label,
  Input,
  WarningMessageContainer,
  WarningMessage,
  ButtonContainer,
  FindButton,
  FooterLinkContainer,
  FooterLink,
  ServerMessageContainer,
  ServerMessage,
} from './FindAccountPage.style';
import Header from '@/components/layout/Header/Header.tsx';
import LeftIcon from '@/assets/svg/left-icon.svg?react';
import { PATH } from '@/constants/path.ts';
import { postResetPassword } from '@/api/user/postResetPassword';
import { useState } from 'react';

interface FormData {
  email: string;
}

const FindAccountPage = () => {
  const navigate = useNavigate();
  const [serverMessage, setServerMessage] = useState<string | null>(null);
  const [isSuccess, setIsSuccess] = useState<boolean | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isValid },
  } = useForm<FormData>({ mode: 'onChange' });

  const onSubmit = async (data: FormData) => {
    try {
      const response = await postResetPassword({ email: data.email });
      setServerMessage(response.data.message);
      setIsSuccess(true);
    } catch (error: any) {
      setServerMessage(error.response?.data?.message || '오류가 발생했습니다. 다시 시도해 주세요.');
      setIsSuccess(false);
    }
  };

  return (
    <Container>
      <Header
        title="계정찾기"
        leftIcon={<LeftIcon />}
        onLeftClick={() => navigate(-1)}
        rightIcon="홈으로"
        onRightClick={() => navigate(PATH.ROOT)}
      />
      <Form onSubmit={handleSubmit(onSubmit)} noValidate>
        <Label>
          이메일
          <Input
            type="email"
            placeholder="이메일을 입력해 주세요"
            {...register('email', {
              required: '이메일을 입력해 주세요.',
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: '올바른 이메일 형식이 아닙니다.',
              },
            })}
            hasError={!!errors.email}
          />
          <WarningMessageContainer>
            {errors.email && <WarningMessage>{errors.email.message}</WarningMessage>}
          </WarningMessageContainer>
        </Label>
        {serverMessage && (
          <ServerMessageContainer>
            <ServerMessage style={{ color: isSuccess ? 'green' : 'red' }}>
              {serverMessage}
            </ServerMessage>
          </ServerMessageContainer>
        )}
        <ButtonContainer>
          <FindButton type="submit" disabled={!isValid || isSubmitting}>
            찾기
          </FindButton>
          <FooterLinkContainer>
            <FooterLink to="/sign-in">로그인</FooterLink>
          </FooterLinkContainer>
        </ButtonContainer>
      </Form>
    </Container>
  );
};

export default FindAccountPage;
