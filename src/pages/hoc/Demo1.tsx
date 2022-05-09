import * as React from 'react';

interface Props {
  title: string;
}

 const Demo1:React.FC<Props> = props => {
  return (
  <div>
    {props.title}
  </div>
  );
};

export default Demo1;