import * as React from 'react';
import { NextPage } from 'next';

import Button from 'my-react/src/components/Button';

const Page: NextPage = () => {
  return (
    <div>
      About Page!
      <Button label="hello world" />
    </div>
  );
};

export default Page;
