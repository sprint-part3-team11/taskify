import Button from '@/components/common/button/Button';
import { BUTTON_TYPE } from '@/constants/BUTTON_TYPE';

function sh() {
  return (
    <>
      <Button size="S" styleType={BUTTON_TYPE.DESTRUCTIVE}>
        삭제
      </Button>
      <Button
        size="L"
        styleType={BUTTON_TYPE.PRIMARY}
        style={{ width: '30rem' }}
        disabled
      >
        버튼
      </Button>
      <Button
        size="L"
        styleType={BUTTON_TYPE.PRIMARY}
        style={{ width: '30rem' }}
      >
        버튼
      </Button>
      <Button styleType={BUTTON_TYPE.SECONDARY}>취소</Button>
    </>
  );
}

export default sh;
