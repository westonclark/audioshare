import React from 'react';
import { useState } from 'react';

export default function LogIn() {
  return (
    <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-36 lg:px-24 lg:py-0 font-inter">
      <div className="flex flex-col items-center md:py-36">
        <main className="flex lg:w-1/2 flex-col justify-center items-center">
          <div className="flex flex-col justify-center gap-4 lg:w-3/4">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl pb-4 text-center">Audioshare.com</h1>
            <form className="flex flex-col gap-4 ">
              <input type="text" placeholder="email" className="p-1 rounded"></input>
              <input type="text" placeholder="password" className="p-1"></input>
              <button type="submit" className="border border-black rounded bg-slate-400 text-slate-50 p-0.5">
                Log In
              </button>
            </form>

            <div className="flex items-center gap-4">
              <hr className="h-px border-0  bg-slate-600 w-full"></hr> <p className="text-center">or</p>
              <hr className="h-px border-0 bg-slate-600 w-full"></hr>
            </div>
            <a className="border border-black rounded bg-slate-200 dark:text-black text-center p-0.5" href="/signup">
              Sign Up
            </a>
          </div>
        </main>
      </div>
    </div>
  );
}
