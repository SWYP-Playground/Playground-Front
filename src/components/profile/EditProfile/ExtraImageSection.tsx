import styled from '@emotion/styled';
import Close from '@/assets/svg/bg-close.svg?react';
import { useExtraImage } from '@/hooks/mypage/useExtraImage';

interface ExtraImageSectionProps {
  images?: string[];
  isEditable?: boolean;
}

const ExtraImageSection = ({ images = [], isEditable = true }: ExtraImageSectionProps) => {
  const { images: localImages, handleUpload, handleDelete } = useExtraImage(images);

  return (
    <Container>
      <Label>
        추가 사진<Gray> (선택)</Gray>
      </Label>
      {isEditable && (
        <>
          <HiddenInput type="file" id="upload-input" accept="image/*" onChange={handleUpload} />
          <StyledLabel htmlFor="upload-input">+ 등록</StyledLabel>
        </>
      )}
      <ImageContainer>
        {localImages.map((url, index) => (
          <ImageWrapper key={index}>
            <Image style={{ backgroundImage: `url(${url})` }} />
            {isEditable && <CloseIcon onClick={() => handleDelete(index)} />}
          </ImageWrapper>
        ))}
      </ImageContainer>
    </Container>
  );
};

export default ExtraImageSection;

const Container = styled.div`
  width: 100%;
  padding: 20px 0;
`;

const Label = styled.p`
  font-size: 14px;
  font-weight: 500;
  color: ${(props) => props.theme.colors.black800};
`;

const ImageContainer = styled.div`
  width: 100%;
  display: flex;
  gap: 15px;
  justify-content: center;
  margin: 10px 0;
`;

const ImageWrapper = styled.div`
  position: relative;
  width: 100px;
  height: 100px;
`;

const Image = styled.div`
  width: 100px;
  height: 100px;
  border: 1px solid ${(props) => props.theme.colors.black300};
  border-radius: 50%;
  background-color: ${(props) => props.theme.colors.black200};
  background-size: cover;
  background-position: center;
`;

const HiddenInput = styled.input`
  display: none;
`;

const StyledLabel = styled.label`
  display: inline-block;
  width: 100%;
  height: 45px;
  margin: 20px 0;
  font-size: 14px;
  font-weight: 600;
  border: 1px solid ${(props) => props.theme.colors.black300};
  border-radius: 8px;
  color: ${(props) => props.theme.colors.black800};
  background-color: ${(props) => props.theme.colors.black0};
  text-align: center;
  line-height: 45px;
  cursor: pointer;
`;

const Gray = styled.a`
  font-weight: 500;
  color: ${(props) => props.theme.colors.black500};
`;

const CloseIcon = styled(Close)`
  width: 18px;
  position: absolute;
  top: -8px;
  right: -8px;
  cursor: pointer;
`;
