import { useState, useEffect } from 'react';
import BlogList from './BlogList';

const Home = () => {

  const [blogs, setBlogs] = useState([
    { title: 'My new website', body: 'lorem ipsum...', author: 'Bananaly', id: 1},
    { title: 'Welcome party!', body: 'lorem ipsum...', author: 'Orangely', id: 2},
    { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'Bananaly', id: 3},
  ]);

  /*  */
  const [name, setName] = useState('mario');

  const handleDelete = (id) => {
    const newBlogs = blogs.filter(blog => blog.id !== id);
    setBlogs(newBlogs);
  }

  /* empty dependency array causes useEffect to run only on initialization */
  useEffect(() => {
    console.log('use effect ran')
    console.log(name)
  }, [name]);


  return (
    <div className="home">
      <BlogList blogs={blogs} title="All Blogs!" handleDelete={handleDelete} />
      <button onClick={() => setName('luigi')}>change name</button>
      <p>{ name }</p>
    </div>
  );
}
 
export default Home;