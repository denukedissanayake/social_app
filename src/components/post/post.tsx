import './post.scss';
import { Link } from 'react-router-dom';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import CommentOutlinedIcon from '@mui/icons-material/CommentOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useState } from 'react';
import Comments from '../comments/comments';
import moment from 'moment';

const Post = ({post} : any) => {
    const [liked, setLiked] = useState(false);
    const [commentBoxOpen, setCommentBoxOpen] = useState(false);

    const toggleLike = () => {
        setLiked(!liked);
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
                    {liked ? <FavoriteIcon/> : <FavoriteBorderOutlinedIcon/> }
                    1 like
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