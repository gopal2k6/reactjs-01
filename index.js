import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import Parent from './Parent';
import Child from './Child';
import Mother from './Mother';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <div>
    <Parent name="Gopal Gautam" child="Madhav" />
    <App />
    <Child />
    <Mother />
    
    


  </div>
);
