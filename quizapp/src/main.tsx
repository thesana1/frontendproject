import React from 'react'
import ReactDOM from 'react-dom/client'
// Import the quiz App — App.jsx contains all quiz logic in plain JavaScript/JSX
// App.tsx re-exports from App.jsx so both .tsx and .jsx resolution work
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
