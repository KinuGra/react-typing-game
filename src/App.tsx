import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Game } from './routes/Game';
import Result from './routes/Result';

function App() {
  return (
    <Routes>
      <Route path="/game" element={<Game />} />
      <Route path="/result" element={<Result />} />
    </Routes>
  );
}

export default App;
