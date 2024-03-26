import { useState, Suspense, lazy } from 'react'
import { BrowserRouter, Routes, Route, Navigate, Link } from 'react-router-dom';
// import { Home } from './Views';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const Home = lazy(()=> import('./Views/Home/Home'))

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
          <Route path = '/sex' element={
            <div>
              <div className="tv-image-slider tv-moduleid-9969222"></div>
              <div>
              {/* <div className="tv-image-slider tv-moduleid-9969155"></div> */}
                <a href="https://vitejs.dev" target="_blank">
                  <img src={viteLogo} className="logo" alt="Vite logo" />
                </a>
                <a href="https://react.dev" target="_blank">
                  <img src={reactLogo} className="logo react" alt="React logo" />
                </a>
              </div>
              <h1>Vite + React</h1>
              <div className="card">
                <button onClick={() => setCount((count) => count + 1)}>
                  count is {count}
                </button>
                <Link to='/tmdnw'>link</Link>
                <p>
                  Edit <code>src/App.jsx</code> and save to test HM
                </p>
              </div>
              <p className="read-the-docs">
                Click on the Vite and React logos to learn more
              </p>
            </div>}>
          </Route>
          <Route path = "/*" element={<Suspense fallback={<div></div>}><Home/></Suspense> }/>
        
      </Routes>
    </BrowserRouter>
  )
}

export default App
