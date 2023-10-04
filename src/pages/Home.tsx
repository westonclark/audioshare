import React from 'react';

export default function Home() {
  return (
    <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0 font-inter">
      <div className="md:flex md:justify-between md:gap-4 md:py-36">
        <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:gap-8">
          <div>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl ">Audioshare.com</h1>
            <h2 className="mt-3 text-lg font-medium tracking-tight sm:text-xl">Send audio files and recieve notes all in one place</h2>
            {/* ADD DEMO GIF HERE */}
          </div>
        </header>
        <main className="flex  gap-8 h-min">
          <a href="/login">Login</a>
          <a href="/signup">Signup</a>
        </main>
      </div>
    </div>
  );
}
