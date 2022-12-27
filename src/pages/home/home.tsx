import Post from "../../components/post/post";
import Story from "../../components/story/story";
import "./home.scss";

const Home = () => {
  return (
    <div className="home">
      <Story/>
      <Post/>
    </div>
  )
}

export default Home;