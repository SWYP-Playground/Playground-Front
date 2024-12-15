import styled from '@emotion/styled';

interface RadioButtonProps {
  options: { value: string; label: string; icon: React.ReactNode }[];
  selectedValue: string;
  onChange: (value: string) => void;
}

const RadioButtonGroup = ({ options, selectedValue, onChange }: RadioButtonProps) => {
  return (
    <Container>
      {options.map((option) => (
        <RadioButtonWrapper key={option.value}>
          <RadioCircle isSelected={selectedValue === option.value}>
            <InnerRadioCircle isSelected={selectedValue === option.value} />
          </RadioCircle>
          <RadioButton
            type="radio"
            value={option.value}
            checked={selectedValue === option.value}
            onChange={() => onChange(option.value)}
          />
          <RadioIconContainer
            isSelected={selectedValue === option.value}
            onClick={() => onChange(option.value)}
          >
            {option.icon}
          </RadioIconContainer>
          <Label>{option.label}</Label>
        </RadioButtonWrapper>
      ))}
    </Container>
  );
};

export default RadioButtonGroup;

const Container = styled.div`
  display: flex;
  gap: 16px;
  justify-content: center;
`;

const RadioButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const RadioButton = styled.input`
  display: none;
`;

const RadioIconContainer = styled.div<{ isSelected: boolean }>`
  width: 100px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid ${(props) => (props.isSelected ? props.theme.colors.black800 : 'transparent')};
  background-color: ${(props) => props.theme.colors.black100};
  border-radius: 8px;
  cursor: pointer;

  svg {
    width: 100%;
    height: 100%;
    border-radius: 8px;
  }
`;

const RadioCircle = styled.div<{ isSelected: boolean }>`
  width: 20px;
  height: 20px;
  border: 2px solid
    ${(props) => (props.isSelected ? props.theme.colors.black800 : props.theme.colors.black300)};
  background-color: ${(props) => props.theme.colors.black0};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 8px;
`;

const InnerRadioCircle = styled.div<{ isSelected: boolean }>`
  width: 10px;
  height: 10px;
  background-color: ${(props) => (props.isSelected ? props.theme.colors.black800 : 'transparent')};
  border-radius: 50%;
`;

const Label = styled.span`
  margin-top: 8px;
  font-size: 14px;
  font-weight: 500;
  color: ${(props) => props.theme.colors.black800};
`;
