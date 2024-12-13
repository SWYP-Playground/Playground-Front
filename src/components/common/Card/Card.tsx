import {
  CardFlex,
  CardMain,
  CardAvatar,
  CardHeader,
  CardContent,
  CardUser,
  CardNickname,
  CardInfo,
} from '@/components/common/Card/Card.style';

interface CardProps {
  onClick?: () => void;
  nickname: string;
  status: string;
  address: string;
  image: string;
  content?: string;
}

const Card = ({ onClick, nickname, status, address, image, content }: CardProps) => {
  return (
    <CardFlex onClick={onClick}>
      <CardMain>
        <CardHeader>
          <CardUser>
            <CardNickname>{nickname}</CardNickname>
            <CardInfo>
              {status}·{address}
            </CardInfo>
          </CardUser>
          <CardAvatar size="5" src={image} fallback="A" radius="full" />
        </CardHeader>
        <CardContent>{content}</CardContent>
      </CardMain>
    </CardFlex>
  );
};

export default Card;
