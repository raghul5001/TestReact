import React from 'react';

export default function App() {
  let a = 2;
  let b = 3;
  let c = 5;

  if (a > b && a > c) {
    console.log('a is greater');
  } else if (b > a && b > c) {
    console.log('b is greater');
  } else {
    console.log('c is greater');
  }

  return <div>Open the browser console to see the output.</div>;
}
