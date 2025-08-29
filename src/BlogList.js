// command for initiating the pseudo-database
// npx json-server --watch data/db.json --port 8000
const BlogList = ({blogs,title}) => {

  return ( 
    <div className="blog-list">
      <h2>{ title }</h2>
      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <h2>{ blog.title }</h2>
          <p>Written by { blog.author }</p>
        </div>
      ))}
    </div>
   );
}
 
export default BlogList;