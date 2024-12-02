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
} from './FindAccountPage.style';
import Header from '@/components/layout/Header/Header.tsx';
import LeftIcon from '@/assets/svg/left-icon.svg?react';
import { PATH } from '@/constants/path.ts';

interface FormData {
  email: string;
}

const FindAccountPage = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isValid },
  } = useForm<FormData>({ mode: 'onChange' });

  const onSubmit = (data: FormData) => {
    console.log('계정 찾기:', data);
    setTimeout(() => {}, 1000);
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
