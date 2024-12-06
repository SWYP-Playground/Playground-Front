import styled from '@emotion/styled';

interface ChildCardProps {
  name: string;
  gender: 'male' | 'female';
}

const ChildCard = ({ name, gender }: ChildCardProps) => {
  return (
    <CardContainer>
      <Icon>
        {gender === 'female' ? (
          <span role="img" aria-label="female">
            👧🏻
          </span>
        ) : (
          <span role="img" aria-label="male">
            👦🏻
          </span>
        )}
      </Icon>
      <Name>{name}</Name>
    </CardContainer>
  );
};

export default ChildCard;

const CardContainer = styled.div`
  width: 150px;
  height: 75px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.colors.black200};
  border-radius: 8px;
  margin: 10px;
  padding: 16px;
`;

const Icon = styled.div`
  font-size: 20px;
`;

const Name = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: ${(props) => props.theme.colors.black800};
`;
