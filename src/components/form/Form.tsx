import { ReactNode } from 'react';
import Button from '@/components/common/button/Button';

interface FormProps {
  children?: ReactNode;
  buttonText: string;
}

function Form({ children, buttonText }: FormProps) {
  return (
    <form>
      {children}
      <Button type="submit">{buttonText}</Button>
    </form>
  );
}

export default Form;
