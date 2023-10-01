import React from 'react';
import { useState } from 'react';
import { Outlet } from 'react-router-dom';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Page</h1>
      <Outlet />
    </>
  );
}

export default App;
