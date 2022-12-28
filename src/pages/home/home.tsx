import Posts from "../../components/post/posts";
import Stories from "../../components/story/story";
import "./home.scss";

const Home = () => {
  return (
    <div className="home">
      <Stories/>
      <Posts/>
    </div>
  )
}

export default Home;