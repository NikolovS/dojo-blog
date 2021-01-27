import { useHistory, useParams } from 'react-router-dom'
import useFetch from './useFetch'
const BlogDetails = () => {
  const { id }= useParams();
  const {data:blog, isLoading,error} = useFetch('http://localhost:8000/blogs/'+ id);
  const history = useHistory();

const clickHandler = () =>{
    fetch('http://localhost:8000/blogs/'+ blog.id,{
        method: "DELETE"
    }).then(()=>{
        console.log('Post was deleted!');
        history.push('/')
    })
}


    return (
<div className="blog-details">
     {isLoading && <div>Loading...</div>}
     {error && <div>{error}</div>}
     {blog && (
         <article>
             <h2>{blog.title}</h2>
             <p>{blog.body}</p>
             <p>Writen by: {blog.author}</p>
             <button onClick={clickHandler}>Delete</button>
         </article>
     )}
</div>
      );
}
 
export default BlogDetails;