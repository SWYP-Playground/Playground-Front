import React, { useState } from 'react';
import AddressSearchModal from '@/components/profile/EditProfile/AddressSearchModal';
import {
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
  SearchIconWrapper,
  SearchIcon,
  HorizonLine,
  ComponentContainer,
  Blue,
  HiddenInput,
} from '@/pages/EditProfilePage/EditProfilePage.style';

interface ProfileImageSectionProps {
  register: any;
  errors: any;
  onFileChange: (file: File | null) => void;
  onChange: (key: string, value: string) => void;
}

const ProfileImageSection = ({
  register,
  errors,
  onFileChange,
  onChange,
}: ProfileImageSectionProps) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isNicknameChecked, setIsNicknameChecked] = useState(false);
  const [isPhoneChecked, setIsPhoneChecked] = useState(false);
  const [isPostcodeVisible, setIsPostcodeVisible] = useState(false);
  const [address, setAddress] = useState('');

  const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedImage(URL.createObjectURL(file));
      onFileChange(file);
    }
  };

  const checkNicknameDuplicate = () => {
    console.log('닉네임 중복 확인');
    setIsNicknameChecked(true);
  };

  const checkPhoneDuplicate = () => {
    console.log('휴대폰 번호 중복 확인');
    setIsPhoneChecked(true);
  };

  const handleAddressSelection = (data: any) => {
    const placeName = data.address;
    setAddress(placeName);
    onChange('address', placeName);
    setIsPostcodeVisible(false);
  };

  return (
    <ComponentContainer>
      <ProfileImage>
        {selectedImage && (
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
        )}
      </ProfileImage>
      <ProfileImageContainer>
        <ProfileImageLabel>
          <PencilIcon />
          프로필 이미지 수정
        </ProfileImageLabel>
        <HiddenInput type="file" id="upload-input" accept="image/*" onChange={handleUpload} />
      </ProfileImageContainer>

      <InputContainer>
        <Label htmlFor="nickname">
          닉네임 <Blue>*</Blue>
        </Label>
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
            onChange={(e) => onChange('nickname', e.target.value)}
          />
          <DuplicateCheckButton
            disabled={isNicknameChecked}
            onClick={checkNicknameDuplicate}
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
        <Label htmlFor="phoneNumber">
          휴대폰 번호 <Blue>*</Blue>
        </Label>
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
            onChange={(e) => onChange('phoneNumber', e.target.value)}
          />
          <DuplicateCheckButton
            disabled={isPhoneChecked}
            onClick={checkPhoneDuplicate}
            variant="solid"
          >
            {isPhoneChecked ? '확인 완료' : '중복 확인'}
          </DuplicateCheckButton>
        </DuplicateContainer>
        {errors.phoneNumber && <ErrorMessage>{errors.phoneNumber.message}</ErrorMessage>}
      </InputContainer>

      <InputContainer>
        <Label htmlFor="address">
          주소 <Blue>*</Blue>
        </Label>
        <DuplicateContainer>
          <Input
            id="address"
            value={address}
            placeholder="주소를 검색해 주세요"
            {...register('address')}
            disabled
          />
          <SearchIconWrapper onClick={() => setIsPostcodeVisible(true)}>
            <SearchIcon />
          </SearchIconWrapper>
        </DuplicateContainer>
        {errors.address && <ErrorMessage>{errors.address.message}</ErrorMessage>}
      </InputContainer>

      {isPostcodeVisible && (
        <AddressSearchModal
          onComplete={handleAddressSelection}
          onClose={() => setIsPostcodeVisible(false)}
        />
      )}

      <HorizonLine />
    </ComponentContainer>
  );
};

export default ProfileImageSection;
