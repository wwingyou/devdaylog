import { useState, useEffect } from 'react';
import './App.css'

function App() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const response = await fetch('http://localhost:8000/api/posts');
      const json = await response.json();
      console.log(json);
      setPosts(json);
    }
    fetchData();
  }, []);

  return (
    <>
      <header>
        <h1>🌇 devday.log</h1>
        <hr/>
      </header>
      <main>
        <p>main blog content here</p>
        <ul>
          {posts.map((post) => 
            <li key={post.id}>
              <div className="card">
                <h2>{post.title}</h2>
                <p>{post.content}</p>
                <p>{post.created_date}</p>
              </div>
            </li>
          )}
        </ul>
      </main>
    </>
  )
}

export default App
