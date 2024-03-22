import PostCard from "@/components/postCard/postCard";
import styles from "./blog.module.css";
import { getPosts } from "@/lib/data";

//FETCH DATA USING API
/*
const getData = async () => {
  // await fetch("https://jsonplaceholder.typicode.com/posts" , {cache : "no-store"})
  //This will prevent caching the data everytime we make changes to code , increases initial loading speed
  
  // await fetch("https://jsonplaceholder.typicode.com/posts" , {next : {revalidate : 3600}})
  //Its is to refresh our data in every 3600 secs(1 hr)

  const res = await fetch("http://localhost:3000/api/blog" , {next : {revalidate : 3600}});

  if (!res.ok) {
    throw new Error("Something went wrong!");
  }

  return res.json();
}
*/

export const metadata = {
  title: 'Blog Page',
  description: 'Blog Web Blogs Page',
}

const BlogPage = async () => {

  //FETCH DATA USING API
  // const posts = await getData();

  //FETCH DATA WITHOUT USING API
  const posts = await getPosts();

  return (
    <div className={styles.container}>
      {posts.map((post) => (
        <div className={styles.post} key={post.id}>
          <PostCard post={post} />
        </div>
      ))}
    </div>
  );
};

export default BlogPage;