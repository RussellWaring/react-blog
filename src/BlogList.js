/**
 * 20250821
 * Video 11 - Props
 * A way to pass data from a parent component to a child component
 */
// const BlogList = ({props}) => {
const BlogList = ({blogs,title}) => {

  // const blogs = props.blogs;
  // const title = props.title;
  // console.log(props,blogs);

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