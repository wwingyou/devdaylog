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
          <a href='/'>
            🌇 <span className="header_text">devday.log</span>
            <span className="header_cursor"></span>
          </a>
        </h1>
        <hr/>
      </header>
      <main>
        main blog content here
        <p><a href='https://github.com/wwingyou'>visit my github 🚀</a></p>
      </main>
    </>
  )
}

export default App
