import './post.scss';
import { Link } from 'react-router-dom';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import CommentOutlinedIcon from '@mui/icons-material/CommentOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useState } from 'react';
import Comments from '../comments/comments';

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
                    <img src={post?.profileImage}/>
                    <div className="details">
                        <Link to={`/profile/${post?.id}`} style={{textDecoration: 'none', color: 'inherit' }}>
                            <span>{post?.name}</span>
                        </Link>
                        <span className='date'>1 min Ago</span>
                    </div>
                </div>
                <MoreHorizOutlinedIcon/>
            </div>
            <div className="content">
                <p>{post?.post_desc}</p>
                {post?.post_image && <img src={post?.post_image}/>}
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
            {commentBoxOpen && <Comments/>}
        </div>
    )
}

export default Post