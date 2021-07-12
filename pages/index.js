import axios from "axios";
import Link from "next/link";

const Index = ({ data, mood }) => {
  return (
    <div>
      <h1>{mood} page</h1>
      {data.map((posts) => (
        <Link href="/posts" key={posts.id}>
          <li>{posts.title}</li>
        </Link>
      ))}
    </div>
  );
};

export const getStaticProps = async () => {
  const { data } = await axios.get(
    "https://jsonplaceholder.typicode.com/posts"
  );
  return {
    props: {
      data,
      mood: "happy",
    },
  };
};

export default Index;
