import { useState } from 'react';
import './App.css'
import Card from './components/card/Card';
import Layout from './components/layout/Layout';

function App() {
  const [posts, setPosts] = useState([
    {
      date: '2024/01/16 12:35',
      tags: ['devday.log', '개발 일지', '웹 개발'],
      title: 'devday.log 개발 일지 1',
      desc: 'Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor minim nulla est proident. Nostrud officia pariatur ut officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit commodo officia dolor Lorem duis laboris cupidatat officia voluptate. Culpa proident adipisicing id nulla nisi laboris ex in Lorem sunt duis officia eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim. Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis.',
      url: '/post/'
    }
  ]);
  return (
    <>
      <Layout>
        <h2>Blog</h2>
        <section className="list">
          {posts.map((post, i) => <Card 
            key={i}
            date={post.date} 
            tags={post.tags} 
            title={post.title} 
            desc={post.desc}
            url={post.url}
          ></Card>
          )}
        </section>
      </Layout>
    </>
  )
}

export default App
