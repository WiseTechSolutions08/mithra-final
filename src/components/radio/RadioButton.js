import { Radio } from 'antd';
import React from 'react';

const RadioButton = () => {
    const [value, setValue] = React.useState(0);
  
    const onChange = e => {
      console.log('radio checked', e.target.value);
      setValue(e.target.value);
    };
  
    return (
    <div className='radio'>
      <div>
      <Radio.Group onChange={onChange} value={value}>
        <Radio value={1}>1/4</Radio>
        <Radio value={2}>1/10</Radio>
        <Radio value={3}>7/15</Radio>
        <Radio value={4}>8/15</Radio>
      </Radio.Group>
      </div>
    </div>
      
    );
  };
  
  export default RadioButton;