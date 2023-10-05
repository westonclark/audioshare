import React from 'react';

export default function Home() {
  return (
    <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-16 font-sans md:px-12 md:py-16 lg:px-24 lg:py-0 font-inter">
      <div className="flex flex-col items-center lg:items-start md:flex-row md:justify-between md:gap-4 md:py-36">
        <main className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:gap-8 ">
          <div>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl ">Audioshare.com</h1>
            <h2 className="mt-3 text-lg font-medium tracking-tight sm:text-xl">Send audio files and recieve notes all in one place</h2>
            {/* ADD DEMO GIF HERE */}
          </div>
        </main>
        <header className="flex gap-4 h-min py-4 justify-end">
          <a href="/login" className="border border-black rounded py-0.5 px-3 text-lg bg-slate-400 text-slate-50 ">
            Login
          </a>
          <a href="/signup" className="border border-black dark:border-slate-50 rounded py-0.5 px-2 text-lg">
            Signup
          </a>
        </header>
      </div>
    </div>
  );
}
