import { useState } from 'react'
import reactLogo from './assets/react.svg'
import wasmLogo from './assets/wasm.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Test from './components/Counter'
import Counter from './components/Counter'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <a href="https://webassembly.org" target="_blank">
          <img src={wasmLogo} className="logo webassembly" alt="WebAssembly logo" />
        </a>
      </div>
      <h1>Vite + React + WebAssembly</h1>
      <div className="card">
        <Counter/>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite, React and Wasm logos to learn more
      </p>
    </>
  )
}

export default App
