import styled from '@emotion/styled';
import Setting from '/src/assets/svg/setting.svg?react';

const SettingButton = () => {
  return (
    <Container>
      <SettingsButton>
        <SettingIcon />
        <SettingText>설정</SettingText>
      </SettingsButton>
    </Container>
  );
};
export default SettingButton;

const Container = styled.div`
  width: 100%;
  max-width: 480px;
  margin: 0 auto;
`;

const SettingsButton = styled.div`
  width: 65px;
  display: flex;
  padding: 8px;

  gap: 5px;
  white-space: nowrap;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  border: 1px solid ${(props) => props.theme.colors.black400};
  cursor: pointer;
`;

const SettingIcon = styled(Setting)`
  fill: ${(props) => props.theme.colors.black600};
`;

const SettingText = styled.p`
  font-size: 14px;
  font-weight: 400;
`;
