import { useState, useEffect } from 'react';
import './App.css'

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    
  }, []);

  return (
    <>
      <div className="main">
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
          <h2>Blog</h2>
          <section className="list">
            <div className="card">
              <a href="/">
                <img className="card_image" alt="card_image" src="https://www.waveon.io/_ipx/f_webp,w_700,size_100vw+md:700px/static/img/blog/_posting/ilya-pavlov-OqtafYT5kTw-unsplash.jpg"/>
                <div className="card_inner">
                  <p className="card_date">2024/01/16 12:35</p>
                  <div className="tagstack">
                    <div className="tag">
                      <span className="tag_name">devday.log</span>
                      <span className="tag_trail"></span>
                    </div>
                    <div className="tag">
                      <span className="tag_name">개발 일지</span>
                      <span className="tag_trail"></span>
                    </div>
                    <div className="tag">
                      <span className="tag_name">웹 개발</span>
                      <span className="tag_trail"></span>
                    </div>
                  </div>
                  <h3 className="card_title"><a href="/">devday.log 개발 일지 1</a></h3>
                  <p className="card_content">Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor minim nulla est proident. Nostrud officia pariatur ut officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit commodo officia dolor Lorem duis laboris cupidatat officia voluptate. Culpa proident adipisicing id nulla nisi laboris ex in Lorem sunt duis officia eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim. Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis.</p>
                </div>
              </a>
            </div>
          </section>
        </main>
      </div>
      <footer>
        <a href='https://github.com/wwingyou'>visit my github 🚀</a>
      </footer>
    </>
  )
}

export default App
