import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Game } from './routes/Game';
import Result from './routes/Result';
import { MantineProvider } from '@mantine/core';

function App() {
  return (
    <MantineProvider>
      <Routes>
        <Route path="/game" element={<Game />} />
        <Route path="/result" element={<Result />} />
      </Routes>
    </MantineProvider>
  );
}

export default App;
