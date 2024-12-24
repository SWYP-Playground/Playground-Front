import styled from '@emotion/styled';

interface ToggleButtonProps {
  options: string[];
  selectedValue: string;
  onChange: (value: string) => void;
}

const ToggleButtonGroup = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 8px;
  margin-top: 10px;
`;

const ToggleButton = styled.button<{ isSelected: boolean }>`
  height: 50px;
  flex: 1;
  padding: 10px 20px;
  font-size: 14px;
  font-weight: 600;
  border-radius: 8px;
  border: 2px solid
    ${(props) => (props.isSelected ? props.theme.colors.black800 : props.theme.colors.black400)};
  background-color: ${(props) => props.theme.colors.black0};
  color: ${(props) =>
    props.isSelected ? props.theme.colors.black900 : props.theme.colors.black500};
  cursor: pointer;
`;

const ToggleButtonGroupComponent = ({ options, selectedValue, onChange }: ToggleButtonProps) => {
  return (
    <ToggleButtonGroup>
      {options.map((option) => (
        <ToggleButton
          type="button"
          key={option}
          isSelected={selectedValue === option}
          onClick={() => {
            onChange(option);
          }}
        >
          {option}
        </ToggleButton>
      ))}
    </ToggleButtonGroup>
  );
};

export default ToggleButtonGroupComponent;
