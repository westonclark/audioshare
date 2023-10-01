import React from 'react';
import { useState } from 'react';
import App from '../App';
import { Outlet } from 'react-router-dom';

export default function Home() {
  return (
    <>
      <header>header</header>
      <App />
    </>
  );
}
