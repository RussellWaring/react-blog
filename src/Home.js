import { useState } from 'react';

const Home = () => {

  const [blogs, setBlogs] = useState([
    { title: 'My new website', body: 'lorem ipsum...', author: 'Bananaly', id: 1},
    { title: 'Welcome party!', body: 'lorem ipsum...', author: 'Orangely', id: 2},
    { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'Plumly', id: 3},
  ]);


  /* Map method fires a callback function for each item (in array) */
  return (
    <div className="home">

      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <h2>{ blog.title }</h2>
          <p>Written by { blog.author }</p>

        </div>

      ))};


    </div>
  );
}
 
export default Home;