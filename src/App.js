import React, { useState } from 'react';
import Button from './components/button';
import './App.css';

function App() {
  const [message, setMessage] = useState("");

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="mb-4 text-2xl font-bold">GitReact</h1>
      <div className="flex">
        <Button label="Yes" onClick={() => setMessage('You pressed Yes')} />
        <Button label="No" onClick={() => setMessage('You pressed No')} />
      </div>
      {message && <p className="mt-4 text-xl">{message}</p>}
    </div>
  );
}

export default App;
