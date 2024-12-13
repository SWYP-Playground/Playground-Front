import styled from '@emotion/styled';

export const Container = styled.div`
  width: 100%;
  height: calc(100dvh - 106px);
  max-width: 480px;
  margin: 0 auto;
`;

export const Background = styled.div`
  background-color: ${(props) => props.theme.colors.black100};
`;

export const ProfileContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ProfileImage = styled.label`
  width: 100px;
  height: 100px;

  display: flex;
  margin: 0 auto;
  margin-top: 20px;
  margin-bottom: 20px;
  background-color: ${(props) => props.theme.colors.black300};
  border: 1px solid ${(props) => props.theme.colors.black300};
  border-radius: 50%;
`;

export const ProfileLabel = styled.label`
  font-size: 16px;
  font-weight: 600;
  color: ${(props) => props.theme.colors.black800};
`;

export const ProfileSubLabel = styled.label`
  font-size: 14px;
  font-weight: 500;
  color: ${(props) => props.theme.colors.black600};
`;

export const SummaryText = styled.label`
  font-size: 14px;
  font-weight: 500;
  color: ${(props) => props.theme.colors.black800};
  text-align: center;
  padding: 10px 50px;
`;

export const ProgressBarContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 10px 0;
  margin-top: 10px;
  width: 90%;
`;

export const ProgressLabel = styled.p`
  font-size: 14px;
  font-weight: 500;
  color: ${(props) => props.theme.colors.black700};
`;

export const ProgressTemp = styled.div<{ progress: number }>`
  color: ${(props) => {
    if (props.progress <= 40) {
      return props.theme.colors.black700;
    } else if (props.progress <= 70) {
      return props.theme.colors.primary4;
    } else {
      return props.theme.colors.tertiary;
    }
  }};
  font-weight: 600;
`;

export const ChildCardContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin: 10px;
  padding: 0 10px;
`;

export const ProfileButton = styled.button`
  width: 90%;
  border-radius: 8px;
  border: 1px solid ${(props) => props.theme.colors.black300};
  padding: 12px 0;
  color: ${(props) => props.theme.colors.black800};
  font-weight: 600;
  background-color: ${(props) => props.theme.colors.black0};
  margin-bottom: 10px;

  &:last-of-type {
    margin-bottom: 40px;
  }
`;

export const TitleText = styled.p`
  font-size: 20px;
  font-weight: 600;
  white-space: nowrap;
`;

export const ViewMore = styled.p`
  font-size: 14px;
  font-weight: 500;
  color: ${(props) => props.theme.colors.black500};
  white-space: nowrap;
`;

export const TitleContainer = styled.div`
  width: 100%;
  display: flex;
  padding: 0 16px;
  margin-top: 30px;
  justify-content: space-between;
`;

export const ContactUsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 0 16px;
  margin-top: 30px;
  justify-content: space-between;
`;

export const RecentFriendsContainer = styled.div`
  display: flex;
  justify-content: center;
`;
