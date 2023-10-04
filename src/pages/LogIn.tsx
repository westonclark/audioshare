import React from 'react';
import { useState } from 'react';

export default function LogIn() {
  return (
    <div className="flex justify-center mx-auto min-h-screen max-w-screen-xl px-6 py-40 font-sans md:px-12 md:py-20 lg:px-24 lg:py-60 font-inter">
      <div className="flex flex-col gap-4">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl text-center">Audioshare.com</h1>
        <form className="flex flex-col gap-4">
          <input type="text" placeholder="email"></input>
          <input type="text" placeholder="password"></input>
          <button type="submit" className="border border-black rounded bg-slate-600 text-slate-100">
            Log In
          </button>
        </form>

        <div className="flex items-center gap-4">
          <hr className="h-px border-0  bg-slate-600 w-full"></hr> <p className="text-center">or</p>
          <hr className="h-px border-0 bg-slate-600 w-full"></hr>
        </div>
        <a className="border border-black rounded bg-slate-300 text-center" href="/signup">
          Sign Up
        </a>
      </div>
    </div>
  );
}
