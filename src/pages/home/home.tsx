import Createpost from "../../components/createPost/createpost";
import Posts from "../../components/post/posts";
import Stories from "../../components/story/story";
import "./home.scss";

const Home = () => {
  return (
    <div className="home">
      <Stories/>
      <Createpost/>
      <Posts/>
    </div>
  )
}

export default Home;