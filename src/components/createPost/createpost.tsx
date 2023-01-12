import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useContext, useState } from "react"
import { AuthContext } from "../../context/AuthContext"
import { apiRequest } from "../../utils/axios";
import "./createpost.scss"

const Createpost = () => {

    const {currentUser} = useContext(AuthContext);
    const [postImage, setPostImage] = useState(null);
    const [description, setDescription] = useState("");

    const queryClient = useQueryClient();

    const createPostMutation = useMutation((newPost : any) => {
        return apiRequest.post('/post', newPost);
    }, {
        onSuccess: () => {
            queryClient.invalidateQueries(["posts"]);
        },
    });
 
    const creatPost = (e :any) => {
        e.preventDefault();
        createPostMutation.mutate({description});
        setDescription("");
        setPostImage(null);
    }

  return (
    <div className="createpost">
        <div className="top">
            <div className="left">
                <img src={currentUser?.profilepic}/>
                <textarea placeholder="What's on your mind? Do share..." 
                        onChange={(e: any) => setDescription(e.target.value)} value={description}/>
            </div>
            {postImage && <div className="right">
                <img className="uploadedimage" src={URL.createObjectURL(postImage)}/>
            </div>}
        </div>
        <div className="bottom">
            <div className="icons">
                <input type="file" id="file" style={{display: "none"}} 
                        onChange={(e: any) => setPostImage(e.target.files[0])}/>
                <label htmlFor="file" className="icon">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQT_WKyyNnOrQmFvwBTHwbnEY0kaCgFM98Lxg&usqp=CAU"/>
                    <span>Add Image</span>
                </label>
                <div className="icon">
                    <img src="https://cdn4.iconfinder.com/data/icons/iconsimple-places/512/pin_plus-512.png"/>
                    <span>Add Place</span>
                </div>
                <div className="icon">
                    <img src="https://cdn.iconscout.com/icon/free/png-256/tag-friends-5522016-4605348.png"/>
                    <span>Tag Friends</span>
                </div>
            </div>
            <button disabled={!description} onClick={creatPost}>Post</button>
        </div> 
    </div>
  )
}

export default Createpost