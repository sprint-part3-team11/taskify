import { ReactNode } from 'react';
import Button from '@/components/common/button/Button';

interface FormProps {
  children?: ReactNode;
  buttonText: string;
}

    trigger,
  return (
        onBlur={() => trigger('email')}
        onBlur={() => trigger('password')}
      <Button type="submit">{buttonText}</Button>
    </form>
  );
}

export default Form;
