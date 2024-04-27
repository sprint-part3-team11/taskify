import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import {
  ColorSelector,
  resultColorState,
} from '@/components/common/ColorSelector';
import Button from '@/components/common/button/Button';
import InputField from '@/components/common/form/LabeledInput';
import useDetailDashboardQuery from '@/hooks/query/dashboards/useDetailDashboardQuery';
import useEditDashboardMutation from '@/hooks/query/dashboards/useEditDashboardMutation';
import MEDIA_QUERIES from '@/constants/MEDIAQUERIES';

const ERROR_MESSAGE = '대시보드 이름 또는 색상 값이 비어있습니다.';

const S = {
  DashboardForm: styled.form``,

  ContentContainer: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    width: 60rem;
    height: 25.6rem;
    padding: 3.2rem 2.8rem;
    border-radius: 0.8rem;

    background-color: ${({ theme }) => theme.color.white};

    ${MEDIA_QUERIES.onMobile} {
      width: calc(100% - 10px);
    }
  `,

  NameAndColorBox: styled.div`
    display: flex;
    justify-content: space-between;

    margin-bottom: 1.5rem;

    ${MEDIA_QUERIES.onMobile} {
      display: flex;
      gap: 1.5rem;
      flex-direction: column;
      align-items: flex-start;
    }
  `,

  DashboardName: styled.div`
    font-size: 20px;
    font-weight: 700;
  `,

  TitleInput: styled(InputField)`
    ${MEDIA_QUERIES.onMobile} {
      height: 4.2rem;
      padding: 0.8rem 0.9rem;

      font-size: 1.4rem;

      &:placeholder-shown {
        text-overflow: ellipsis;
      }
    }
  `,

  ButtonBox: styled.div<ButtonBoxProps>`
    display: flex;
    justify-content: ${({ isError }) => (isError ? 'space-between' : 'end')};
    align-items: center;

    ${MEDIA_QUERIES.onMobile} {
      gap: 1rem;
      font-size: 1.2rem;
    }
  `,

  ErrorMessage: styled.div`
    color: ${({ theme }) => theme.color.red};

    ${MEDIA_QUERIES.onMobile} {
      margin-top: 1rem;
    }
  `,

  Button: styled(Button)`
    ${MEDIA_QUERIES.onMobile} {
      width: 7rem;
      height: 2.8rem;
      padding: 0.5rem 0.8rem;
      margin-top: 1rem;

      font-size: 1.2rem;
    }
  `,
};

interface ButtonBoxProps {
  isError: boolean;
}
function NameAndColorChangeBox() {
  const colorState = useRecoilValue(resultColorState);
  const [dashboardName, setDashboardName] = useState('');
  const [isError, setIsError] = useState(false);
  const router = useRouter();
  const { id } = router.query;
  const { data } = useDetailDashboardQuery(id);

  const { mutate: responseEditDashboardMutate } = useEditDashboardMutation();
  const title = data?.title;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDashboardName(e.target.value);
  };

  const handleClickChangeBtn = (e) => {
    e.preventDefault();

    if (!colorState || !dashboardName) {
      return setIsError(!isError);
    }
    responseEditDashboardMutate({
      dashboardId: id,
      title: dashboardName,
      color: colorState,
    });
  };
  return (
    <S.DashboardForm>
      <S.ContentContainer>
        <S.NameAndColorBox>
          <S.DashboardName>{title}</S.DashboardName>
          <ColorSelector />
        </S.NameAndColorBox>
        <S.TitleInput
          label="대시보드 이름"
          id="dashboardName"
          placeholder="대시보드 이름을 입력하세요."
          value={dashboardName}
          onChange={handleInputChange}
        />
        <S.ButtonBox isError={isError}>
          {isError && <S.ErrorMessage>{ERROR_MESSAGE}</S.ErrorMessage>}
          <S.Button onClick={handleClickChangeBtn} size="S">
            변경
          </S.Button>
        </S.ButtonBox>
      </S.ContentContainer>
    </S.DashboardForm>
  );
}
export default NameAndColorChangeBox;
