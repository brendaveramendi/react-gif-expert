import React, { useState } from 'react';

export const AddCategory = ({onNewValue}) => {

  const [inputValue, setInputValue] = useState('');

  const onInputChange = ({ target }) => {
    setInputValue(target.value);
  };

  const onSubmit = (event)=>{
    event.preventDefault();
    if (inputValue.trim().length <= 1 ) return;
    onNewValue(inputValue.trim())
    //Para que no se inserte elementos en blanco al menos una letra debe tener
    setInputValue('');
  }

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Buscar gifs"
        value={inputValue}
        onChange={onInputChange}
      />
    </form>
  );
};
