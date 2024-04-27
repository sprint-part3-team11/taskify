import styled from 'styled-components';
import CommentForm from '@/components/common/modal/card-detail/CommentForm';
import CommentList from '@/components/common/modal/card-detail/CommentList';

const S = {
  CommentContainer: styled.ul`
    list-style: none;
    padding: 0;
  `,
};

interface CommentProps {
  card_Id: number;
}
function Comment({ card_Id }: CommentProps) {
  return (
    <S.CommentContainer>
      <CommentForm card_Id={card_Id} />
      <CommentList card_Id={card_Id} />
    </S.CommentContainer>
  );
}

export default Comment;
