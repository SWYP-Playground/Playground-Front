import { ChangeEvent, FormEvent, useEffect, useRef, useState } from 'react';
import { createSearchParams, useLocation, useNavigate, useSearchParams } from 'react-router-dom';

import {
  AlertName,
  PlayGroundSearchBarForm,
  PlayGroundSearchFlex,
  SearchButton,
  SearchInput,
} from '@/components/playGround/PlayGroundSearchBar/PlayGroundSearchBar.style';
import ResetSearch from '@/assets/svg/reset-search.svg?react';
import SearchIcon from '@/assets/svg/search.svg?react';
import { useDebounce } from '@/hooks/common/useDebounce';
import { PATH } from '@/constants/path';

const PlayGroundSearchBar = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');
  const [playgroundWord, setPlaygroundWord] = useState<string>(query || '');
  const inputRef = useRef<HTMLInputElement>(null);
  const debouncedPlaygroundWord = useDebounce(playgroundWord, 500);
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const goToSearchPage = async () => {
    if (pathname === PATH.PLAYGROUND_SEARCH) return;

    if (query) return navigate({ pathname: PATH.PLAYGROUND_SEARCH, search: `?query=${query}` });

    navigate(PATH.PLAYGROUND_SEARCH);
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const word = event.currentTarget.value;
    setPlaygroundWord(word);
  };

  const handleSubmitForm = (event: FormEvent) => {
    event.preventDefault();
    if (playgroundWord.trim()) {
      navigate({
        pathname: PATH.FIND_PLAYGROUND_FRIEND,
        search: createSearchParams({ query: playgroundWord }).toString(),
      });
    }
  };

  const handleInputClear = () => {
    setPlaygroundWord('');
    if (query) {
      searchParams.delete('query');
      setSearchParams(searchParams, { replace: true });
    }
    focusInput();
  };

  const focusInput = () => {
    inputRef.current?.focus();
  };

  useEffect(() => {
    if (pathname === PATH.PLAYGROUND_SEARCH) focusInput();
  }, [pathname]);

  useEffect(() => {
    if (query) {
      setPlaygroundWord(query);
    }
  }, [query]);

  console.log(query, debouncedPlaygroundWord, location);

  return (
    <PlayGroundSearchFlex position="relative" direction="column">
      <PlayGroundSearchBarForm onSubmit={handleSubmitForm}>
        <SearchInput
          type="text"
          placeholder="놀이터를 검색해 주세요"
          value={playgroundWord}
          onChange={handleInputChange}
          ref={inputRef}
          onClick={goToSearchPage}
        />
        {playgroundWord && (
          <ResetSearch
            style={{ cursor: 'pointer' }}
            width="20"
            height="20"
            onClick={handleInputClear}
          />
        )}
        <SearchButton disabled={!playgroundWord} type="submit">
          <SearchIcon width="20" height="20" />
        </SearchButton>
      </PlayGroundSearchBarForm>
      <AlertName>놀이터 이름을 정확히 입력해 주세요</AlertName>
    </PlayGroundSearchFlex>
  );
};

export default PlayGroundSearchBar;
