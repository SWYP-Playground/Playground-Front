import styled from '@emotion/styled';

export const Container = styled.div`
  width: 100%;
  max-width: 480px;
  margin: 0 auto;
  padding: 16px;
`;

export const Title = styled.h2`
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 16px;
  color: ${(props) => props.theme.colors.black800};
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const Section = styled.div`
  margin-top: 24px;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const Label = styled.label`
  font-size: 14px;
  font-weight: 500;
  color: ${(props) => props.theme.colors.black700};
`;

export const Input = styled.input<{ hasError?: boolean }>`
  padding: 12px;
  border: 1px solid
    ${(props) => (props.hasError ? props.theme.colors.red : props.theme.colors.black300)};
  border-radius: 8px;
  font-size: 14px;
  color: ${(props) => props.theme.colors.black800};
  &:focus {
    outline: none;
    border-color: ${(props) => props.theme.colors.primary4};
  }
`;

export const SubmitButton = styled.button`
  padding: 16px;
  border-radius: 8px;
  background-color: ${(props) => props.theme.colors.primary4};
  color: white;
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
  font-size: 14px;
  border-radius: 8px;
  border: 1px solid ${(props) => props.theme.colors.black800};
  cursor: pointer;
`;

export const ErrorMessage = styled.p`
  font-size: 12px;
  color: ${(props) => props.theme.colors.red};
`;

export const HintMessage = styled.p`
  font-size: 12px;
  color: ${(props) => props.theme.colors.black600};
`;
