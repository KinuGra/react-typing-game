import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Game } from './routes/Game';
import Result from './routes/Result';
import { MantineProvider } from '@mantine/core';
import { Top } from './routes/Top';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Top />} />
      <Route path="/game" element={<Game />} />
      <Route path="/result" element={<Result />} />
    </Routes>
  );
}

export default App;
