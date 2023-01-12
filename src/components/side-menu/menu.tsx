import { useMutation, useQueryClient } from "@tanstack/react-query";
import { apiRequest } from "../../utils/axios";
import "./menu.scss";

const Menu = ({post, user} : any) => {

  const queryClient = useQueryClient();

  const deletePostMutation = useMutation((post:any) => {
    return apiRequest.delete(`/post/${post.id}`);
  }, {
      onSuccess: () => {
          queryClient.invalidateQueries(["posts"]);
      },
  });

  const deletePost = () => {
    deletePostMutation.mutate(post);
  }

  return (
    <div className="menu">
        {user.id == post.userid && <button onClick={deletePost}>Delete</button>}
        <button>Hide</button>
        {user.id != post.userid && <button>Report</button>}
    </div>
  )
}

export default Menu