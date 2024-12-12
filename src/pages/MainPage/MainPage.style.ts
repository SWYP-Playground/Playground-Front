import styled from '@emotion/styled';
import { Flex } from '@radix-ui/themes';
import BannerImg from '@/assets/png/banner.png';
import LogoIcon from '@/assets/svg/logo-horizon.svg?react';

export const Container = styled(Flex)`
  width: 100%;
  height: calc(100dvh -106px);

  flex-direction: column;
`;

export const Logo = styled(LogoIcon)`
  width: 150px;
  height: 30px;
`;

export const Banner = styled.div`
  width: 100%;
  height: 100px;
  background-image: url(${BannerImg});
  background-size: contain;
  background-repeat: no-repeat;
  background-color: ${(props) => props.theme.colors.secondary};
  background-position: center;
`;

export const TitleContainer = styled.div`
  width: 100%;
  display: flex;
  padding: 0 16px;
  margin-top: 30px;
  justify-content: space-between;
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
