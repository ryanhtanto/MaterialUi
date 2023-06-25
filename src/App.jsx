import * as React from 'react';
import Article from './components/article';
import Navbar from './components/navbar';

export default function App() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <Article />
      </main>
    </>
  );
}
