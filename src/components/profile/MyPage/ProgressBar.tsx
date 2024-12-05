/** @jsxImportSource @emotion/react */
import * as Progress from '@radix-ui/react-progress';
import styled from '@emotion/styled';

interface ProgressBarProps {
  progress: number;
}

const ProgressBar = ({ progress }: ProgressBarProps) => {
  return (
    <StyledProgressRoot value={progress}>
      <StyledProgressIndicator progress={progress} />
    </StyledProgressRoot>
  );
};

export default ProgressBar;

const StyledProgressRoot = styled(Progress.Root)`
  position: relative;
  overflow: hidden;
  background: ${(props) => props.theme.colors.black300};
  border-radius: 9999px;
  width: 90%;
  height: 10px;
  transform: translateZ(0);
`;

const StyledProgressIndicator = styled(Progress.Indicator)<{ progress: number }>`
  background-color: ${(props) => {
    if (props.progress <= 40) {
      return props.theme.colors.black700;
    } else if (props.progress <= 70) {
      return props.theme.colors.primary4;
    } else {
      return props.theme.colors.tertiary;
    }
  }};

  width: ${(props) => props.progress}%;
  height: 100%;
  transition: width 660ms cubic-bezier(0.65, 0, 0.35, 1);
`;
