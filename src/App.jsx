/* eslint-disable import/no-extraneous-dependencies */
import * as React from 'react';
import { Route, Routes } from 'react-router-dom';
import FootBar from './components/FootBar';
import MenuAppBar from './components/navbar';
import Content from './components/content';
import Detail from './components/detail';

export default function App() {
  return (
    <>
      <header>
        <MenuAppBar />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Content />} />
          <Route path="/detail" element={<Detail />} />
        </Routes>
      </main>
      <footer>
        <FootBar />
      </footer>
    </>
  );
}
