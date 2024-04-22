import AvatarImage from '@/components/common/AvatarImage';
import FormInput from '@/components/form/FormInput';
import FormLayout from '@/components/form/FormLayout';


function js() {
  // const URL =
  //   'https://file3.instiz.net/data/file3/2023/08/07/9/7/b/97bd8a476822cba2e5cd1fe8ef7be321.jpg';

  return (
    <div>
      <FormLayout pageType="signIn">
        {/* <AvatarImage src={URL} width="10rem" height="10rem" /> */}
        <FormInput formType="signIn" />
      </FormLayout>    
    </div>
  );
}

export default js;
