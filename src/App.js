import React from 'react';
import { Panel } from './components/Panel';

function App() {
  return (
    <div className="app">
      <Panel cards={[
        { text: 'alo blyad' },
        { text: 'alo blyad_2' },
        { text: 'alo blyad_3' },
        { text: 'alo blyad_4' },
      ]} />
      <Panel cards={null} />
    </div>
  );
}

export default App;
