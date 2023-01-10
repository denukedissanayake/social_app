import Post from "./post";
import "./posts.scss";

import { useQuery } from '@tanstack/react-query';
import { apiRequest } from "../../utils/axios";


const Posts = ({userid} : {userid? : string}) => {

  const { isLoading, error, data } = useQuery(["posts"], () =>
    !userid ? apiRequest.get("/post").then(res=> res?.data) : apiRequest.get("/post?userid=" + userid).then(res=> res?.data)
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