import { useState, useEffect } from 'react';
import BlogList from './BlogList';

const Home = () => {

  const [blogs, setBlogs] = useState(null);
  const [isPending, setIsPending] = useState(true);


  /* Returns a 'promise'*'. Can't make this async i.e., use a 'wait' */
  useEffect(() => {
    setTimeout(() => {
      fetch('http://localhost:8000/blogs')
      .then(res => {
        return res.json();
      })
      .then(data =>{
        setBlogs(data);
        setIsPending(false);
      })
    }, 1000)
  }, []);


  /* Conditional templating
  Logical and evaluates the left first. If evaluates false, does not regard the right-side */
  return (
    <div className="home">
      { isPending && <div>Loading...</div>}
      {blogs && <BlogList blogs={blogs} title="All Blogs!" />}
    </div>
  );
}
 
export default Home;