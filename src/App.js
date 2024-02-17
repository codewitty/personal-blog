import React from 'react';
import BlogPost from './Blogpost';

const App = () => {
  const blogPosts = [
    { title: 'First Post', content: 'This is the first post.' },
    { title: 'Second Post', content: 'This is the second post.' },
    // Add more blog posts here
  ];

  return (
    <div>
      <h1>Welcome to My Blog</h1>
      {blogPosts.map((post, index) => (
        <BlogPost key={index} title={post.title} content={post.content} />
      ))}
    </div>
  );
};

export default App; 