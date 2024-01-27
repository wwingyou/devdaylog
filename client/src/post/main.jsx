import React from 'react';
import ReactDOM from 'react-dom/client';
import 'reset-css'
import '../assets/fonts/fira_code.css'
import '../theme.css'
import '../index.css'
import '../component.css'
import Post from './Post.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Post />
  </React.StrictMode>,
); 
