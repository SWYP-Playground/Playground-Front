import styled from '@emotion/styled';
import { useLogOutMutation } from '@/hooks/api/useLogOutMutation';

const ContactUs = () => {
  const logOutMutation = useLogOutMutation();

  const handleContactClick = () => {
    window.open(
      'https://docs.google.com/forms/d/e/1FAIpQLSc2_iMdxDubVh2ACwSP5URQUVhLZQlqDeTvuGfoDALv-2DXNA/viewform',
      '_blank',
    );
  };

  const handleLogoutClick = () => {
    logOutMutation.mutate();
  };

  return (
    <>
      <ContactUsButton onClick={handleContactClick}>문의하기</ContactUsButton>
      <ContactUsButton onClick={handleLogoutClick}>로그아웃</ContactUsButton>
    </>
  );
};

export default ContactUs;

export const ContactUsButton = styled.div`
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 16px;

  color: ${(props) => props.theme.colors.black800};
  font-weight: 500;

  border: 1px solid ${(props) => props.theme.colors.black300};
  border-radius: 8px;
  margin-top: 20px;

  cursor: pointer;
`;
