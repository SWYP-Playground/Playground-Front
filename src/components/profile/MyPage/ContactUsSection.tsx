import styled from '@emotion/styled';

const ContactUs = () => {
  return <ContactUsButton>문의하기</ContactUsButton>;
};

export default ContactUs;

export const ContactUsButton = styled.div`
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 16px;

  color: 1px solid ${(props) => props.theme.colors.black800};
  font-weight: 500;

  border: 1px solid ${(props) => props.theme.colors.black300};
  border-radius: 8px;
  margin: 20px 0;
`;
