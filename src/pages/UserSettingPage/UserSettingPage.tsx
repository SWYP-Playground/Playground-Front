import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/layout/Header/Header.tsx';
import LeftIcon from '@/assets/svg/left-icon.svg?react';
import { useUserSettingForm } from '../../hooks/mypage/useUserSettingForm.ts';
import DeletePopup from '../../components/popUp/DeletePopup.tsx';
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
  EmailContainer,
  EmailText,
  DeleteButton,
} from './UserSettingPage.style.ts';
import { PATH } from '../../constants/path.ts';

const UserSettingPage = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    errors,
    isSubmitting,
    isValid,
    onSubmit,
    newPassword,
    popupState,
    handleDeleteClick,
    handlePopupClose,
    handleDeleteConfirm,
  } = useUserSettingForm();

  const [email, setEmail] = useState<string>('playground@naver.com');

  useEffect(() => {
    const fetchEmail = async () => {
      const response = await new Promise((resolve) => {
        setTimeout(() => resolve({ email: 'playground@naver.com' }), 1000);
      });
      setEmail((response as { email: string }).email);
    };

    fetchEmail();
  }, []);

  const handleDeleteComplete = () => {
    navigate(PATH.ROOT);
  };

  return (
    <Container>
      <Header title="설정" leftIcon={<LeftIcon />} onLeftClick={() => navigate(-1)} />
      <Title>회원정보</Title>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <EmailContainer>
          <Label>이메일</Label>
          <EmailText>{email}</EmailText>
        </EmailContainer>
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
          <Label htmlFor="currentPassword">비밀번호 변경</Label>
          <Input
            id="currentPassword"
            type="password"
            placeholder="현재 비밀번호를 입력해 주세요"
            {...register('currentPassword', {
              required: '현재 비밀번호를 입력해 주세요.',
              minLength: { value: 6, message: '비밀번호는 최소 6자 이상이어야 합니다.' },
            })}
            hasError={!!errors.currentPassword}
          />
          {errors.currentPassword && <ErrorMessage>{errors.currentPassword.message}</ErrorMessage>}
        </InputContainer>
        <InputContainer>
          <Input
            id="newPassword"
            type="password"
            placeholder="새 비밀번호를 입력해 주세요"
            {...register('newPassword', {
              required: '새 비밀번호를 입력해 주세요.',
              pattern: {
                value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>]).{6,20}$/,
                message: '6-20자 이내 *영문 대소문자, 숫자, 특수문자 필수',
              },
            })}
            hasError={!!errors.newPassword}
          />
          {errors.newPassword && <ErrorMessage>{errors.newPassword.message}</ErrorMessage>}
        </InputContainer>
        <InputContainer>
          <Input
            id="confirmNewPassword"
            type="password"
            placeholder="새 비밀번호를 다시 입력해 주세요"
            {...register('confirmNewPassword', {
              required: '비밀번호를 재입력해 주세요.',
              validate: (value) => value === newPassword || '새 비밀번호와 일치하지 않습니다.',
            })}
            hasError={!!errors.confirmNewPassword}
          />
          {errors.confirmNewPassword ? (
            <ErrorMessage>{errors.confirmNewPassword.message}</ErrorMessage>
          ) : (
            <HintMessage>6-20자 이내 *영문 대소문자, 숫자, 특수문자 필수</HintMessage>
          )}
        </InputContainer>
        <Title>회원 탈퇴</Title>
        <DeleteButton onClick={handleDeleteClick}>탈퇴</DeleteButton>
        <SubmitButton type="submit" disabled={!isValid || isSubmitting}>
          수정하기
        </SubmitButton>
      </Form>

      {popupState === 'CONFIRM_DELETE' && (
        <DeletePopup
          title="정말 탈퇴하시겠어요?"
          subtitle="탈퇴 버튼 클릭 시, 회원정보 및 기존의 모든 기록이 삭제돼요."
          buttonText="탈퇴하기"
          buttonColor="#FF5A5A"
          onClick={handleDeleteConfirm}
          onClose={handlePopupClose}
        />
      )}

      {popupState === 'DELETE_COMPLETE' && (
        <DeletePopup
          title="탈퇴 완료"
          subtitle="탈퇴가 완료되었습니다."
          buttonText="홈으로"
          buttonColor="#FFE135"
          textColor="#212529"
          onClick={handleDeleteComplete}
          onClose={handlePopupClose}
        />
      )}
    </Container>
  );
};

export default UserSettingPage;
