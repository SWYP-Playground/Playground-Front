import { Flex, Button, Text } from '@radix-ui/themes';

import { ButtonStyling } from '@pages/MainPage/MainPage.style';

const MainPage = () => {
  return (
    <Flex direction="column" gap="20px">
      <Text>임시 메인 페이지</Text>
      <Button radius="full">radix-ui 문서에 있는 스타일링만 적용한 버튼</Button>
      <ButtonStyling>radix-ui 문서에 적혀있는 설정 이외에 커스텀 설정을 추가한 버튼</ButtonStyling>
    </Flex>
  );
};

export default MainPage;
