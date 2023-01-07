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

    const comments = [
        {
            id: "1",
            comment: "here are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary",
            user_name: "Michel Knight",
            user_id: 1,
            profileImage: "https://static.independent.co.uk/s3fs-public/thumbnails/image/2017/09/27/08/jennifer-lawrence.jpg?quality=75&width=982&height=726&auto=webp"
        },
        {
            id: "1",
            comment: "here are many variations of passages of Lorem Ipsum .",
            user_name: "Nora Bing",
            user_id: 2,
            profileImage: "https://a.foxdcg.com/dpp-uploaded/images/credits/6132686704feab0021d5dfd3/our_kind_of_people_rhyon_nicole_brown_2x.jpg?fit=inside%7C*:278"
        }
    ]

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