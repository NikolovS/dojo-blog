 import BlogList from './BlogList'
 import  useFetch from './useFetch'
const Home  = () => {
const {data:blogs,isLoading,error} = useFetch('http://localhost:8000/blogs')
    return ( 
        <div className="home"> 
        {error && <div>{error}</div>}
        {isLoading && <div>Loading...</div> }
{/* пишем прост JS Код в кръгли скоби,където проверяваме дали имаме блогс, и понеже && евалюейтва първо в ляво,затова това работи */}
      {blogs && <BlogList blogs={blogs} title="All blogs!" />}
  </div>
     );
}
 
export default Home;