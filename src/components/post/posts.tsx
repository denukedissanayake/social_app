import Post from "./post";
import "./posts.scss";

import { useQuery } from '@tanstack/react-query';
import { apiRequest } from "../../utils/axios";

const Posts = () => {

  const { isLoading, error, data } = useQuery(["posts"], () =>
    apiRequest.get("/post").then(res=> res?.data)
  );

  return (
    <div className="posts">
      {error && "Something Went Wrong"}
      {!error && (isLoading ? "Loading... Please Wait" : data?.map((post : any) => (
          <Post post={post} key={post?.id}/>
      )))}
    </div>
  )
}

export default Posts