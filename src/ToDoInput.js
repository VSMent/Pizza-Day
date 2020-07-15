import React, {useEffect, useRef, useState} from "react";
import T from 'prop-types';

export const ToDoInput = ({onAdd, initialValue}) => {
  const [value, setValue] = useState(initialValue);
  const textInput = useRef();

  const onChange = e => setValue(e.target.value);
  const onSubmit = e => {
    e.preventDefault();
    if (value === '') return;
    onAdd(value);
    setValue('');
  };

  useEffect(() => textInput.current.focus(), [])

  return (
    <form onSubmit={onSubmit}>
      <input value={value} onChange={onChange} ref={textInput}/>
    </form>
  );
};

ToDoInput.propTypes = {
  onAdd: T.func.isRequired,
  initialValue: T.string
};

ToDoInput.defaultProps = {
  initialValue: ''
}