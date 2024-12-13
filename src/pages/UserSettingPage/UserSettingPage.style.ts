import styled from '@emotion/styled';

export const Container = styled.div`
  width: 100%;
  max-width: 480px;
  height: calc(100dvh - 106px);

  margin: 0 auto;
  padding: 16px;
`;

export const Title = styled.h2`
  font-size: 18px;
  font-weight: 600;
  color: ${(props) => props.theme.colors.black800};
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const EmailContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const EmailText = styled.p`
  padding: 8px 0;
  border: none;
  font-size: 16px;
  font-weight: 500;
  color: ${(props) => props.theme.colors.black800};
`;

export const DeleteContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const Label = styled.label`
  font-size: 14px;
  font-weight: 500;
  color: ${(props) => props.theme.colors.black800};
  margin-top: 15px;
`;

export const Input = styled.input<{ hasError?: boolean }>`
  width: 100%;
  height: 48px;
  padding: 12px 16px;
  border: 1px solid ${(props) => (props.hasError ? props.theme.colors.red : 'transparent')};
  border-radius: 5px;

  color: ${(props) => props.theme.colors.black800};
  background-color: ${(props) => props.theme.colors.black100};

  font-size: 14px;
  margin-top: 0px;

  &:focus {
    border: 2px solid
      ${(props) => (props.hasError ? props.theme.colors.red : props.theme.colors.primary4)};
    outline: none;
  }
`;

export const SubmitButton = styled.button`
  padding: 16px;
  border-radius: 8px;
  background-color: ${(props) => props.theme.colors.primary1};
  color: ${(props) => props.theme.colors.black900};

  font-size: 16px;
  font-weight: 600;
  border: none;
  cursor: pointer;
  &:disabled {
    background-color: ${(props) => props.theme.colors.black300};
    cursor: not-allowed;
  }
`;

export const DeleteButton = styled.button`
  width: 100%;
  padding: 12px;
  background-color: ${(props) => props.theme.colors.black0};
  color: ${(props) => props.theme.colors.black800};
  font-size: 16px;
  font-weight: 500;
  border-radius: 8px;
  border: 1px solid ${(props) => props.theme.colors.black300};
  margin-bottom: 30px;
  cursor: pointer;
`;

export const ErrorMessage = styled.p`
  font-size: 12px;
  font-weight: 500;
  color: ${(props) => props.theme.colors.red};
`;

export const HintMessage = styled.p`
  font-size: 12px;
  color: ${(props) => props.theme.colors.black600};
  margin-bottom: 20px;
`;
