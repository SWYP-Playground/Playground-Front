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
import { PATH } from '@/constants/path';

interface PlayGroundSearchBarProps {
  query?: string;
  onSearchChange?: (query: string) => void;
}

const PlayGroundSearchBar = ({ query, onSearchChange }: PlayGroundSearchBarProps) => {
  // const [searchParams, setSearchParams] = useSearchParams();
  const [searchParams, _] = useSearchParams();
  const [word, setWord] = useState<string>(query || '');
  const inputRef = useRef<HTMLInputElement>(null);
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const goToSearchPage = () => {
    if (pathname === PATH.PLAYGROUND_SEARCH) return;

    if (query) return navigate({ pathname: PATH.PLAYGROUND_SEARCH, search: `?query=${query}` });

    navigate(PATH.PLAYGROUND_SEARCH);
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const word = event.currentTarget.value;
    setWord(word);
    onSearchChange?.(word);
  };

  const handleSubmitForm = (event: FormEvent) => {
    event.preventDefault();
    if (word.trim()) {
      navigate({
        pathname: PATH.FIND_PLAYGROUND_FRIEND,
        search: createSearchParams({ query: word }).toString(),
      });
    }
  };

  const handleInputClear = () => {
    setWord('');
    onSearchChange?.('');
    if (query) {
      searchParams.delete('query');
      // setSearchParams(searchParams, { replace: true });
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
      setWord(query);
    }
  }, [query]);

  return (
    <PlayGroundSearchFlex position="relative" direction="column">
      <PlayGroundSearchBarForm onSubmit={handleSubmitForm}>
        <SearchInput
          type="text"
          placeholder="놀이터를 검색해 주세요"
          value={word}
          onChange={handleInputChange}
          ref={inputRef}
          onClick={goToSearchPage}
        />
        {word && (
          <ResetSearch
            style={{ cursor: 'pointer' }}
            width="20"
            height="20"
            onClick={handleInputClear}
          />
        )}
        <SearchButton disabled={!word} type="submit">
          <SearchIcon width="20" height="20" />
        </SearchButton>
      </PlayGroundSearchBarForm>
      <AlertName>놀이터 이름을 정확히 입력해 주세요</AlertName>
    </PlayGroundSearchFlex>
  );
};

export default PlayGroundSearchBar;
