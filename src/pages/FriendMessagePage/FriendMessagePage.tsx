import { useNavigate, useParams } from 'react-router-dom';

import Header from '@/components/layout/Header/Header';
import { FriendMessageFlex } from '@/pages/FriendMessagePage/FriendMessagePage.style';
import LeftIcon from '@assets/svg/left-icon.svg?react';
import Card from '@/components/common/Card/Card';
import { useNoteQuery } from '@/hooks/api/useNoteQuery';

const FriendMessagePage = () => {
  const navigate = useNavigate();
  const params = useParams();
  const { noteId } = params;
  const { NoteData } = useNoteQuery(Number(noteId));

  const goToBack = () => {
    navigate(-1);
  };

  return (
    <FriendMessageFlex>
      <Header title="쪽지 내용" leftIcon={<LeftIcon />} onLeftClick={goToBack} />
      {NoteData && <Card content={NoteData.content} id={String(NoteData.writerId)} />}
    </FriendMessageFlex>
  );
};

export default FriendMessagePage;
