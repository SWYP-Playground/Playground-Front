import { TextField } from '@radix-ui/themes';
import { PlayGroundSearchBarDiv, SearchButton } from './PlayGroundSearchBar.style';

const PlayGroundSearchBar = () => {
  return (
    <PlayGroundSearchBarDiv>
      <TextField.Root placeholder="놀이터를 검색해 주세요" />
      <SearchButton>검색</SearchButton>
    </PlayGroundSearchBarDiv>
  );
};

export default PlayGroundSearchBar;
