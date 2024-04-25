import Image from 'next/image';
import { useRouter } from 'next/router';
import { useState } from 'react';
import styled from 'styled-components';
import AvatarImage from '@/components/common/AvatarImage';
import Button from '@/components/common/button/Button';
import useDeleteMembersMutation from '@/hooks/query/dashboards/useDeleteMembersMutation';
import useMembersListQuery from '@/hooks/query/dashboards/useMembersListQuery';
import useWindowSize, { Size } from '@/hooks/useWindowSize';
import { BUTTON_TYPE } from '@/constants/BUTTON_TYPE';
import MEDIA_QUERIES from '@/constants/MEDIAQUERIES';
import ArrowLeft from '@/public/icon/arrowLeft.svg';
import ArrowRight from '@/public/icon/arrowRight.svg';

const S = {
  MemberListLayout: styled.div`
    width: 62rem;
    height: 40rem;
    padding: 3.2rem 2.8rem;
    border-radius: 0.8rem;
    background-color: ${({ theme }) => theme.color.white};
    overflow: auto;

    ${MEDIA_QUERIES.onMobile} {
      width: calc(100% - 10px);
    }
  `,

  MemberListHeader: styled.div`
    display: flex;
    justify-content: space-between;
  `,

  Title: styled.p`
    font-size: 2.4rem;
    font-weight: 700;

    ${MEDIA_QUERIES.onMobile} {
      font-size: 2rem;
    }
  `,

  CurrentPageBox: styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;
  `,
  CurrentPage: styled.p`
    font-size: 1.4rem;
    ${MEDIA_QUERIES.onMobile} {
      font-size: 1.2rem;
    }
  `,
  ButtonBox: styled.div`
    margin-top: 0.2rem;
  `,

  MemberListContainer: styled.div`
    margin-top: 3rem;
  `,

  NameTitle: styled.p`
    color: ${({ theme }) => theme.color.gray};
  `,

  MemberListBox: styled.ul`
    margin-top: 2rem;
  `,

  MemberItem: styled.li`
    display: flex;
    justify-content: space-between;

    padding: 1.5rem 0 1.5rem 0;
    &:not(:last-child) {
      border-bottom: 1px solid ${({ theme }) => theme.color.grayLight};
    }
  `,
  ImageAndNameContainer: styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
  `,

  AvatarImage: styled(AvatarImage)``,
  Nickname: styled.p`
    ${MEDIA_QUERIES.onMobile} {
      font-size: 1.4rem;
    }
  `,
  Button: styled(Button)`
    color: ${({ theme }) => theme.color.main};
    font-weight: 500;

    ${MEDIA_QUERIES.onMobile} {
      width: 5.2rem;
      padding: 0.5rem 1.3rem;
    }
  `,
};

function MemberList() {
  const { width }: Size = useWindowSize();
  const isMobile: boolean = width !== undefined && width < 768;

  const router = useRouter();
  const { id } = router.query;
  const { data } = useMembersListQuery(id);
  const members = data?.members;
  const [list, setList] = useState(members);
  const { mutate: responseDeleteCommentMutate } = useDeleteMembersMutation();

  const remove = (id: number) => {
    const updatedList = list && list.filter((member) => member.id !== id);
    responseDeleteCommentMutate({ memberId: id });
    setList(updatedList);
  };

  return (
    <S.MemberListLayout>
      <S.MemberListHeader>
        <S.Title>구성원</S.Title>
        <S.CurrentPageBox>
          <S.CurrentPage>1페이지 중 1 </S.CurrentPage>
          <S.ButtonBox>
            <ArrowLeft />
            <ArrowRight />
          </S.ButtonBox>
        </S.CurrentPageBox>
      </S.MemberListHeader>

      <S.MemberListContainer>
        <S.NameTitle>이름</S.NameTitle>
        <S.MemberListContainer>
          {members &&
            members.map((member) => (
              <>
                <S.MemberItem key={member.id}>
                  <S.ImageAndNameContainer>
                    {member.profileImageUrl && (
                      <S.AvatarImage
                        src={member.profileImageUrl || ''}
                        width={isMobile ? '3.4rem' : '3.8rem'}
                        height={isMobile ? '3.4rem' : '3.8rem'}
                      />
                    )}
                    <S.Nickname>{member.nickname}</S.Nickname>
                  </S.ImageAndNameContainer>
                  <S.Button
                    onClick={() => remove(member.id)}
                    size="S"
                    styleType={BUTTON_TYPE.DESTRUCTIVE}
                  >
                    삭제
                  </S.Button>
                </S.MemberItem>
              </>
            ))}
        </S.MemberListContainer>
      </S.MemberListContainer>
    </S.MemberListLayout>
  );
}

export default MemberList;
