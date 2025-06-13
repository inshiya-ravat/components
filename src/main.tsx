// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import MyApp from './MyApp'
import App from './App.tsx'

// render method takes two arguments, first: what to add, second: where to insert
createRoot(document.getElementById('root')!).render(
  // <StrictMode>
    <App />
)
