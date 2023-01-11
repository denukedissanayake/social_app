import "./profile.scss";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PinterestIcon from '@mui/icons-material/Pinterest';
import LanguageIcon from '@mui/icons-material/Language';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import Posts from "../../components/post/posts";
import { apiRequest } from "../../utils/axios";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useLocation } from "react-router-dom";
import Update from "../../components/update-user/update";

const Profile = () => {

  const {currentUser} = useContext(AuthContext);
  const queryClient = useQueryClient();
  const [update, setUpdate] =useState(false);

  const userId = useLocation().pathname.split("/")[2];

  const { isLoading, error, data : userData } = useQuery(["user"], () =>
    apiRequest.get(`/user/${userId}`).then(res=> res?.data)
  );

  const { data : followData } = useQuery(["follow"], () =>
    apiRequest.get(`/follow?userid=${currentUser.id}`).then(res=> res?.data)
  );

  const folowUserMutation = useMutation((followed : any) => {
    if(followed) return apiRequest.delete('/follow', {data: {followeduserid: userId}});
    return apiRequest.post('/follow', {followeduserid: userId});
  }, {
      onSuccess: () => {
          queryClient.invalidateQueries(["follow"]);
      },
  });

  const followUser = () => {
    folowUserMutation.mutate(followData?.includes(parseInt(userId)));
  }

  return (
    <div className="profile">
      {update && <Update setUpdate={setUpdate} update={update}/>}
      { isLoading? "Loading... Please Wait" : 
      <>
        <div className="images">
          <img className="cover" src={userData?.coverpic}/>
          <img className="profile" src={userData?.profilepic}/>
        </div>
        <div className="profileinfo">
          <div className="infocontainer">
            <div className="social">
              <a href="#">
                <FacebookIcon fontSize="large"/>
              </a>
              <a href="#">
                <InstagramIcon fontSize="large"/>
              </a>
              <a href="#">
                <TwitterIcon fontSize="large"/>
              </a>
              <a href="#">
                <LinkedInIcon fontSize="large"/>
              </a>
              <a href="#">
                <PinterestIcon fontSize="large"/>
              </a>
            </div>
            <div className="info">
              <span className="name">{userData?.name}</span>
              <div className="items">
                <div>
                  <LanguageIcon/>
                  <span>USA</span>
                </div>
                <div>
                  <LocationOnIcon/>
                  <span>social.com</span>
                </div>
              </div>
            </div>
            <div className="contact">
              <EmailIcon fontSize="large" style={{cursor: "pointer"}}/>
              <MoreVertIcon fontSize="large" style={{cursor: "pointer"}}/>
            </div>
          </div>
          {userId == currentUser.id ? 
            <button onClick={() => setUpdate(true)}>Update</button> : 
            <button onClick={followUser}>{followData?.includes(parseInt(userId)) ? "Following" : "Follow"}</button>}
        </div>
        <Posts userid={userId}/>
      </>}
    </div>
  )
}

export default Profile