import { useState, useEffect } from 'react';
import BlogList from './BlogList';

const Home = () => {

  const [blogs, setBlogs] = useState([
    { title: 'My new website', body: 'lorem ipsum...', author: 'Bananaly', id: 1},
    { title: 'Welcome party!', body: 'lorem ipsum...', author: 'Orangely', id: 2},
    { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'Bananaly', id: 3},
  ]);

  const handleDelete = (id) => {
    const newBlogs = blogs.filter(blog => blog.id !== id);
    setBlogs(newBlogs);
  }

  /* hook: useEffect - runs func every render of the component (initial, whenever state changes) */
  useEffect(() => {
    console.log('use effect ran')
    console.log(blogs)
  });


  /* Filtering */
  return (
    <div className="home">
      <BlogList blogs={blogs} title="All Blogs!" handleDelete={handleDelete} />
    </div>
  );
}
 
export default Home;