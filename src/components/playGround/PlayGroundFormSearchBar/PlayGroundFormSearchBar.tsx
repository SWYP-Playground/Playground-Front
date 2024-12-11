import { ChangeEvent, useEffect, useRef, useState } from 'react';
import { UseFormSetValue } from 'react-hook-form';

import {
  FormAlertName,
  FormSearchButton,
  FormSearchFlex,
  FormSearchInput,
  FormSearchInputFlex,
  SuggestionFlex,
} from '@/components/playGround/PlayGroundFormSearchBar/PlayGroundFormSearchBar.style';
import { FormValues } from '@/components/playGround//PlayGroundForm/PlayGroundForm';
import { useDebounce } from '@/hooks/common/useDebounce';
import SearchIcon from '@/assets/svg/search.svg?react';
import ResetSearchIcon from '@/assets/svg/reset-search.svg?react';

const playgrounds = [
  {
    id: 1,
    name: '중앙 어린이 놀이터',
    address: '서울시 강남구 테헤란로 123',
    distance: '0.3km',
  },
  {
    id: 2,
    name: '숲속 놀이터',
    address: '서울시 강남구 선릉로 456',
    distance: '0.7km',
  },
  {
    id: 3,
    name: '무지개 놀이터',
    address: '서울시 강남구 역삼로 789',
    distance: '1.2km',
  },
];

interface PlayGroundType {
  id: number;
  name: string;
  address: string;
  distance: string;
}

interface PlayGroundFormSearchBarProps {
  setValue: UseFormSetValue<FormValues>;
}

const PlayGroundFormSearchBar = ({ setValue }: PlayGroundFormSearchBarProps) => {
  const [inputValue, setInputValue] = useState<string>('');
  const [suggestions, setSuggestions] = useState<PlayGroundType[]>([]);
  const [selectedPlayground, setSelectedPlayground] = useState<string>('');
  const [isFocused, setIsFocused] = useState(false);
  const searchContainerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const debouncedInputValue = useDebounce(inputValue, 150);

  const focusInput = () => {
    inputRef.current?.focus();
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.currentTarget.value;
    setInputValue(value);
  };

  const handleInputClear = () => {
    setInputValue('');
    setSuggestions([]);
    focusInput();
  };

  const handlePlaygroundSelect = (playground: PlayGroundType) => {
    setSelectedPlayground(playground.name);
    setInputValue(playground.name);
    setSuggestions([]);
    setIsFocused(false);

    setValue('playgroundName', playground.name);
  };

  useEffect(() => {
    if (isFocused && debouncedInputValue) {
      const filteredPlaygrounds = playgrounds.filter((playground) =>
        playground.name.toLowerCase().includes(debouncedInputValue.toLowerCase()),
      );
      setSuggestions(filteredPlaygrounds);
    } else {
      setSuggestions([]);
    }
  }, [debouncedInputValue, isFocused]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        searchContainerRef.current &&
        !searchContainerRef.current.contains(event.target as Node)
      ) {
        setIsFocused(false);
        setSuggestions([]);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <>
      <FormSearchFlex ref={searchContainerRef}>
        <FormSearchInputFlex>
          <FormSearchInput
            type="text"
            placeholder="놀이터를 검색해 주세요"
            value={inputValue}
            onChange={handleInputChange}
            onFocus={() => setIsFocused(true)}
            ref={inputRef}
          />
          {debouncedInputValue && (
            <ResetSearchIcon
              style={{ cursor: 'pointer' }}
              width="20"
              height="20"
              onClick={handleInputClear}
            />
          )}
          <FormSearchButton disabled>
            <SearchIcon width="20" height="20" />
          </FormSearchButton>
        </FormSearchInputFlex>
        {(suggestions.length > 0 || isFocused) && (
          <SuggestionFlex>
            {/* 최근 검색어 섹션 */}
            {debouncedInputValue === '' && (
              <div>
                <FormAlertName>놀이터 이름을 정확히 입력해 주세요</FormAlertName>
              </div>
            )}

            {/* 검색 결과 목록 */}
            <div>
              {suggestions.map((playground) => (
                <div key={playground.id} onClick={() => handlePlaygroundSelect(playground)}>
                  <div>
                    <div>
                      <div>
                        <div>{playground.name}</div>
                      </div>
                    </div>
                  </div>
                  <hr />
                </div>
              ))}
            </div>
          </SuggestionFlex>
        )}
      </FormSearchFlex>

      {selectedPlayground && <div>선택된 놀이터 : {selectedPlayground}</div>}
    </>
  );
};

export default PlayGroundFormSearchBar;
