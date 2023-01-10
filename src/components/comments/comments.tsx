import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { Link } from 'react-router-dom';
import "./comments.scss";
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { apiRequest } from "../../utils/axios";
import moment from "moment";

const Comments = ({postid} : {postid : string}) => {

    const {currentUser} = useContext(AuthContext);
    const [description, setDescription] = useState("");

    const queryClient = useQueryClient();

    const { isLoading, error, data } = useQuery(["comments"], () =>
        apiRequest.get("/comment/"+postid).then(res=> res?.data)
    );


    const createCommentMutation = useMutation((newComment : any) => {
        return apiRequest.post('/comment', newComment);
    }, {
        onSuccess: () => {
            queryClient.invalidateQueries(["comments"]);
        },
    });
 
    const addComment = (e :any) => {
        e.preventDefault();
        createCommentMutation.mutate({description, postid});
        setDescription("");
    }

    return (
        <div className="comments">
            <div className="add-comment">
                <img src={currentUser.profileImage}/>
                <input type="text" placeholder="Write a Commet..." 
                        onChange={(e: any) => setDescription(e.target.value)} value={description}/>
                <button onClick={addComment}>Send</button>
            </div>
            {error && "Unexpected Error Occured. Please Refresh Again."}
            {!error && (isLoading ? "Loading..." : data.map((comment : any) => (
                <div className="comment" key={comment.id}>
                    <img src={comment.profilepic}/>
                    <div className="info">
                        <Link to={`/profile/${comment?.user_id}`} style={{textDecoration: 'none', color: 'inherit' }}>
                            <span>{comment.name}</span>
                        </Link>
                        <p>{comment.description}</p>
                    </div>
                    <span className="date">{moment(comment.createdAt).fromNow()}</span>
                </div>
            )))}
        </div>
    )
}

export default Comments