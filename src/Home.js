import { useState, useEffect } from 'react';
import BlogList from './BlogList';

const Home = () => {

  const [blogs, setBlogs] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);


  /* Returns a 'promise'*'. Can't make this async i.e., use a 'wait' */
  useEffect(() => {
    setTimeout(() => {
        fetch('http://localhost:8000/blogs')
        .then(res => {
          console.log(res);
          if (!res.ok) {
            throw Error('could not fetch the data for that resource');
          }
          return res.json();
        })
        .then(data =>{
          setBlogs(data);
          setIsPending(false);
          setError(null);
        })
        .catch(err => {
          setIsPending(false);
          setError(err.message);
          // console.log(err.message);
        }) // catches network error, fires function
    }, 1000);
  }, []);


  /* Conditional rendering */
  return (
    <div className="home">
      { error && <div>{ error }</div> }
      { isPending && <div>Loading...</div>}
      {blogs && <BlogList blogs={blogs} title="All Blogs!" />}
    </div>
  );
}
 
export default Home;