import React from 'react';

const names = ['a', 'bb', 'c'];
const Arr = () => {
  return names.map((name, i) => <p key={i}>{name}</p>);
};

export default Arr;