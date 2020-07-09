import React, {useState} from "react";
import T from 'prop-types';

export const ToDoInput = ({onAdd}) => {
  const [value, setValue] = useState('');

  const onChange = e => setValue(e.target.value);
  const onSubmit = e => {
    e.preventDefault();
    if (value === '') return;
    onAdd(value);
    setValue('');
  };

  return (
    <form onSubmit={onSubmit}>
      <input value={value} onChange={onChange}/>
    </form>
  );
};

ToDoInput.propTypes = {
  onAdd: T.func.isRequired
};