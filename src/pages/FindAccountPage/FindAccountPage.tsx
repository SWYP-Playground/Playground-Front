import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import {
  Container,
  HeaderContainer,
  LeftIcon,
  Title,
  ToHome,
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
      <HeaderContainer>
        <LeftIcon src="/src/assets/svg/left-icon.svg" alt="LeftIcon" onClick={() => navigate(-1)} />
        <Title>계정찾기</Title>
        <ToHome to="/">홈으로</ToHome>
      </HeaderContainer>

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
