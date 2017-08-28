import React from 'react';

const Filter = ({onChangeFilter}) => (
  <div>
    <select onChange={(e) => {onChangeFilter(e.target.value)}} >
      <option value="all" > All </option>
      <option value="todo"> Todo </option>
      <option value="done"> Done </option>
    </select>
  </div>
);

export default Filter;
