import logo from './logo.svg';
import './App.css';

// Custom Components
import NavBar from './components/NavBar';
import Main from './components/Main';
import ArticlesGallery from './components/ArticlesGallery';
import ArticleEdit from './components/ArticleEdit';
import BirthChart from './components/BirthChart';

import { useState, useEffect } from 'react';

import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  const [ articles, setArticles ] = useState([]);

  function getArticles() {
    fetch('http://localhost:3001/articles')
    .then(r => r.json())
    .then(setArticles);
  }

  useEffect(() => {
    // Update the document title using the browser API
    getArticles();
  }, []);
  
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        {/* <nav>
          <Link to="/">Home</Link> | <Link to="/articles">Articles</Link>
        </nav> */}
        <Routes>
          <Route index element={<Main />} />
          <Route path="birthchart" element={<BirthChart />} />
          <Route path="articles" element={
            <ArticlesGallery 
              articles={articles}
              // setArticles={setArticles}
              getArticles={getArticles}
            />}
          />
          <Route path="articles/:id" element={
            <ArticleEdit 
              articles={articles}
              // setArticles={setArticles}
              getArticles={getArticles}
            />
          } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
