import styled from '@emotion/styled';
import { useState } from 'react';

interface ExtraImageSectionProps {
  images?: string[];
  showUploadButton?: boolean;
}

const ExtraImageSection = ({ images = [], showUploadButton = true }: ExtraImageSectionProps) => {
  const [localImages, setLocalImages] = useState<string[]>(images);

  const handleUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0];
      const imageUrl = URL.createObjectURL(file);
      setLocalImages((prev) => [...prev, imageUrl]);
    }
  };

  return (
    <Container>
      <Label>추가 사진</Label>
      {showUploadButton && (
        <>
          <HiddenInput type="file" id="upload-input" accept="image/*" onChange={handleUpload} />
          <StyledLabel htmlFor="upload-input">+ 등록</StyledLabel>
        </>
      )}
      <ImageContainer>
        {localImages.map((url, index) => (
          <Image key={index} style={{ backgroundImage: `url(${url})` }} />
        ))}
      </ImageContainer>
    </Container>
  );
};

export default ExtraImageSection;

const Container = styled.div`
  width: 100%;
  padding: 0 20px;
`;

const Label = styled.p`
  font-size: 14px;
  font-weight: 500;
  color: ${(props) => props.theme.colors.black700};
`;

const ImageContainer = styled.div`
  width: 100%;
  display: flex;
  gap: 10px;
  justify-content: center;
  margin: 10px 0;
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
  border: 1px solid ${(props) => props.theme.colors.black300};
  border-radius: 8px;
  color: ${(props) => props.theme.colors.black800};
  background-color: ${(props) => props.theme.colors.black0};
  text-align: center;
  line-height: 45px;
  cursor: pointer;
`;
