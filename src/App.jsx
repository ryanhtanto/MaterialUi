import * as React from 'react';
import FootBar from './components/FootBar';
import MenuAppBar from './components/navbar';
import BasicTextFields from './components/Form';
import Content from './components/content';

export default function App() {
  return (
    <>
      <header>
        <MenuAppBar />
      </header>
      <main>
        <BasicTextFields />
        <Content />
      </main>
      <footer>
        <FootBar />
      </footer>
    </>
  );
}
