import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { Link } from 'react-router-dom';
import "./comments.scss";

const Comments = () => {

    const {currentUser} = useContext(AuthContext);

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

    return (
        <div className="comments">
            <div className="add-comment">
                <img src={currentUser.profileImage}/>
                <input type="text" placeholder="Write a Commet..."/>
                <button>Send</button>
            </div>
            {comments.map((comment) => (
                <div className="comment">
                    <img src={comment.profileImage}/>
                    <div className="info">
                        <Link to={`/profile/${comment?.user_id}`} style={{textDecoration: 'none', color: 'inherit' }}>
                            <span>{comment.user_name}</span>
                        </Link>
                        <p>{comment.comment}</p>
                    </div>
                    <span className="date">1 hour ago</span>
                </div>
            ))}
        </div>
    )
}

export default Comments