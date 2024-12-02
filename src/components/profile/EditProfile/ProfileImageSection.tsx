import React, { useState } from 'react';
import {
  Container,
  InputContainer,
  Label,
  Input,
  ProfileImageContainer,
  ProfileImageLabel,
  ProfileImage,
  PencilIcon,
  DuplicateCheckButton,
  DuplicateContainer,
  HintMessage,
  ErrorMessage,
  SearchIcon,
  SearchIconWrapper,
} from '../../../pages/EditProfilePage/EditProfilePage.style';

interface Props {
  register: any;
  errors: any;
}

const ProfileImageSection = ({ register, errors }: Props) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedImage(URL.createObjectURL(file));
    }
  };
  const [isNicknameChecked, setIsNicknameChecked] = useState(false);

  const checkEmailDuplicate = () => {
    console.log('이메일 중복 확인');
    setIsNicknameChecked(true);
  };

  return (
    <Container>
      {/* 숨겨진 파일 입력 */}
      <ProfileImage
        type="file"
        id="profileImage"
        accept="image/*"
        onChange={handleFileChange}
        {...register('additionalPhoto')}
      />

      {/* 프로필 이미지 컨테이너 */}
      <ProfileImageContainer htmlFor="profileImage">
        {selectedImage ? (
          <img
            src={selectedImage}
            alt="Selected profile"
            style={{
              width: '100%',
              height: '100%',
              borderRadius: '50%',
              objectFit: 'cover',
            }}
          />
        ) : null}
        {!selectedImage && <PencilIcon />}
        <ProfileImageLabel>프로필 이미지 수정</ProfileImageLabel>
      </ProfileImageContainer>

      <InputContainer>
        <Label htmlFor="nickname">닉네임</Label>
        <DuplicateContainer>
          <Input
            id="nickname"
            placeholder="닉네임을 입력해 주세요"
            {...register('nickname', {
              required: '닉네임을 입력해 주세요.',
              maxLength: { value: 10, message: '닉네임은 10자 이내여야 합니다.' },
              pattern: {
                value: /^[^\s!@#$%^&*(),.?":{}|<>]+$/,
                message: '특수문자는 사용할 수 없습니다.',
              },
            })}
          />
          <DuplicateCheckButton
            disabled={isNicknameChecked}
            onClick={checkEmailDuplicate}
            variant="solid"
          >
            {isNicknameChecked ? '확인 완료' : '중복 확인'}
          </DuplicateCheckButton>
        </DuplicateContainer>
        {errors.nickname ? (
          <ErrorMessage>{errors.nickname.message}</ErrorMessage>
        ) : (
          <HintMessage>10자 이내 *특수문자 제외</HintMessage>
        )}
      </InputContainer>

      <InputContainer>
        <Label htmlFor="phoneNumber">휴대폰 번호</Label>
        <DuplicateContainer>
          <Input
            id="phoneNumber"
            placeholder="010-0000-0000"
            {...register('phoneNumber', {
              required: '휴대폰 번호를 입력해 주세요.',
              pattern: {
                value: /^01[0-9]-\d{3,4}-\d{4}$/,
                message: '올바른 휴대폰 번호를 입력해 주세요.',
              },
            })}
          />
          <DuplicateCheckButton
            disabled={isNicknameChecked}
            onClick={checkEmailDuplicate}
            variant="solid"
          >
            {isNicknameChecked ? '확인 완료' : '중복 확인'}
          </DuplicateCheckButton>
        </DuplicateContainer>
        {errors.phoneNumber && <p>{errors.phoneNumber.message}</p>}
      </InputContainer>

      <InputContainer>
        <Label htmlFor="phoneNumber">휴대폰 번호</Label>
        <DuplicateContainer>
          <Input
            id="phoneNumber"
            placeholder="010-0000-0000"
            {...register('phoneNumber', {
              required: '휴대폰 번호를 입력해 주세요.',
              pattern: {
                value: /^01[0-9]-\d{3,4}-\d{4}$/,
                message: '올바른 휴대폰 번호를 입력해 주세요.',
              },
            })}
          />
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
        </DuplicateContainer>
        {errors.phoneNumber && <p>{errors.phoneNumber.message}</p>}
      </InputContainer>
    </Container>
  );
};

export default ProfileImageSection;
