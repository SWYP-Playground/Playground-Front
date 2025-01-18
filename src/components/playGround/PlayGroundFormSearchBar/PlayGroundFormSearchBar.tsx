import { Flex } from '@radix-ui/themes';
import { ChangeEvent, useCallback, useEffect, useRef, useState } from 'react';
import { UseFormSetValue } from 'react-hook-form';

import {
  FormAlertName,
  FormSearchButton,
  FormSearchFlex,
  FormSearchInput,
  FormSearchInputFlex,
  SelectButton,
  SuggestionFlex,
} from '@/components/playGround/PlayGroundFormSearchBar/PlayGroundFormSearchBar.style';
import { FormValues } from '@/components/playGround//PlayGroundForm/PlayGroundForm';
import { useDebounce } from '@/hooks/common/useDebounce';
import SearchIcon from '@/assets/svg/search.svg?react';
import ResetSearchIcon from '@/assets/svg/reset-search.svg?react';
import { usePlaygroundsQuery } from '@/hooks/api/usePlaygroundsQuery';
import { PlaygroundData } from '@/types/playground';
import VectorIcon from '@/assets/svg/vector.svg?react';
import CancelIcon from '@/assets/svg/cancel.svg?react';

interface PlayGroundFormSearchBarProps {
  setValue: UseFormSetValue<FormValues>;
  playgroundName?: string;
}

const PlayGroundFormSearchBar = ({ setValue, playgroundName }: PlayGroundFormSearchBarProps) => {
  const [inputValue, setInputValue] = useState<string>(playgroundName ?? '');
  const [selectedPlayground, setSelectedPlayground] = useState<string>('');
  const [isFocused, setIsFocused] = useState(false);
  const searchContainerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const debouncedInputValue = useDebounce(inputValue, 250);
  const { playgroundsData, isLoading } = usePlaygroundsQuery(debouncedInputValue);
  const filteredSuggestions = isFocused && debouncedInputValue ? playgroundsData : [];

  const focusInput = () => {
    inputRef.current?.focus();
  };

  const handleInputChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    const value = event.currentTarget.value;
    setInputValue(value);
  }, []);

  const handleInputClear = () => {
    setInputValue('');
    focusInput();
  };

  const handleSelectedClear = () => {
    const initialPlayground = {
      id: '',
      name: '',
      address: '',
      latitude: '',
      longitude: '',
      distance: '',
    };
    setSelectedPlayground('');
    setValue('playgroundName', initialPlayground);
  };

  const handlePlaygroundSelect = (playground: PlaygroundData) => {
    setSelectedPlayground(playground.name);
    setInputValue(playground.name);
    setIsFocused(false);

    setValue('playgroundName', playground);
  };

  useEffect(() => {
    if (debouncedInputValue === playgroundName) {
      if (playgroundName && playgroundsData.length > 0) {
        setValue('playgroundName', playgroundsData[0]);
        setSelectedPlayground(playgroundsData[0].name);
      }
    }
  }, [playgroundName, playgroundsData]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        searchContainerRef.current &&
        !searchContainerRef.current.contains(event.target as Node)
      ) {
        setIsFocused(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
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
        {(filteredSuggestions.length > 0 || isFocused) && (
          <SuggestionFlex direction="column" gap="3">
            {/* 최근 검색어 섹션 */}
            {debouncedInputValue === '' && (
              <Flex>
                <FormAlertName>놀이터 이름을 정확히 입력해 주세요</FormAlertName>
              </Flex>
            )}

            {/* 검색 결과 목록 */}
            {debouncedInputValue && filteredSuggestions.length === 0 && !isLoading && (
              <Flex>해당하는 놀이터가 없습니다</Flex>
            )}
            {filteredSuggestions.map((playground) => (
              <Flex
                key={playground.id}
                onClick={() => handlePlaygroundSelect(playground)}
                gap="2"
                align="center"
              >
                <VectorIcon />
                <span>{playground.name}</span>
              </Flex>
            ))}
          </SuggestionFlex>
        )}
      </FormSearchFlex>

      {selectedPlayground && (
        <SelectButton onClick={handleSelectedClear}>
          <VectorIcon />
          {selectedPlayground}
          <CancelIcon />
        </SelectButton>
      )}
    </>
  );
};

export default PlayGroundFormSearchBar;
