import './post.scss';
import { Link } from 'react-router-dom';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import CommentOutlinedIcon from '@mui/icons-material/CommentOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useContext, useState } from 'react';
import Comments from '../comments/comments';
import moment from 'moment';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { apiRequest } from '../../utils/axios';
import { AuthContext } from '../../context/AuthContext';

const Post = ({post} : any) => {
    const [liked, setLiked] = useState(false);
    const [commentBoxOpen, setCommentBoxOpen] = useState(false);
    const {currentUser} = useContext(AuthContext);

    const queryClient = useQueryClient();

    const { isLoading, error, data } = useQuery(["likes", post.id], () =>
        apiRequest.get(`/like/${post.id}`).then(res=> res?.data)
    );

    const likePostMutation = useMutation((liked :any) => {
        if(liked) return apiRequest.delete('/like?postid='+post.id);
        return apiRequest.post(`/like`, {postid: post.id});
    }, {
        onSuccess: () => {
            queryClient.invalidateQueries(["likes"]);
        },
    });

    const toggleLike = () => {
        likePostMutation.mutate(data?.includes(currentUser?.id));
    }

    const toggleCommentBox = () => {
        setCommentBoxOpen(!commentBoxOpen);
    }

    return (
        <div className='post'>
            <div className="user">
                <div className="userinfo">
                    <img src={post?.profilepic}/>
                    <div className="details">
                        <Link to={`/profile/${post?.id}`} style={{textDecoration: 'none', color: 'inherit' }}>
                            <span>{post?.name}</span>
                        </Link>
                        <span className='date'>{moment(post?.createdAt).fromNow()}</span>
                    </div>
                </div>
                <MoreHorizOutlinedIcon/>
            </div>
            <div className="content">
                <p>{post?.description}</p>
                {post?.image && <img src={post?.image}/>}
            </div>
            <div className="reactions">
                <div className="react" onClick={toggleLike}>
                    {data?.includes(currentUser?.id) ? <FavoriteIcon style={{color: "red"}}/> : <FavoriteBorderOutlinedIcon/> }
                    {data?.length}
                </div>
                <div className="react" onClick={toggleCommentBox}>
                    <CommentOutlinedIcon/>
                    3 comments
                </div>
                <div className="react">
                    <ShareOutlinedIcon/>
                    2 shares
                </div>
            </div>
            {commentBoxOpen && <Comments postid={post.id}/>}
        </div>
    )
}

export default Post