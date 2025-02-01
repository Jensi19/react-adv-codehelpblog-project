import React, { useContext, useEffect } from 'react';
import Header from './components/Header';
import Blog from './components/Blog';
import Footer from './components/Footer';
import { AppContext } from './context/AppContext';

export default function App() {
  const { fetchPosts } = useContext(AppContext);

  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);

  return (
    <div>
      <Header />
      <main>
        <Blog />
      </main>
      <Footer />
    </div>
  );
}