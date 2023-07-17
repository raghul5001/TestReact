import React from 'react';

const Person = (props) => {
  return (
    <div>
      <h2>Name:{props.name} </h2>
      <p>Age: {props.age}</p>
      <p>Role:{props.role}</p>
    </div>
  );
};

export default Person;
