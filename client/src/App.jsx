import { useState, useEffect } from 'react';
import './App.css'

function App() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    
  }, []);

  return (
    <>
      <header>
        <h1 className="header_title">
          🌇 <span className="header_text">devday.log</span>
          <span className="header_cursor"></span>
        </h1>
        <hr/>
      </header>
      <main>
        <p>main blog content here</p>
      </main>
    </>
  )
}

export default App
