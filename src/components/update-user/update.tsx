import Modal from '@mui/material/Modal';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { Dispatch, SetStateAction, useContext, useState } from "react";
import { AuthContext } from '../../context/AuthContext';
import { apiRequest } from '../../utils/axios';
import "./update.scss";

const Update = ({setUpdate, update} : {setUpdate: Dispatch<SetStateAction<boolean>>, update: boolean}) => {

    const queryClient = useQueryClient();
    const {currentUser, setCurrentUser} = useContext(AuthContext);

    const [inputs, setInputs] = useState({
        name: currentUser?.name,
        city: currentUser?.city,
        website: currentUser?.website,
    });

    const [profilePic , setProfilePic] = useState(null);
    const [coverPic , setCoverPic] = useState(null);
    const [error, setError] = useState(false);

    const updateProfileMutation = useMutation((user : any) => {
        return apiRequest.put(`/user/`, user);
    }, {
        onSuccess: () => {
            setCurrentUser({...currentUser, name: inputs.name, website: inputs.website});
            setUpdate(false);
            queryClient.invalidateQueries(["user"]);
        },
        onError: () => {
            setError(true);
        }
    });

    const inputChangeHandler = (e : React.ChangeEvent<HTMLInputElement>) => {
        setInputs(prev => ({...prev, [e.target.name]: e.target.value}))
    }

    const updateprofile = (e: any) =>{
        e.preventDefault();
        let profilePicUrl = currentUser?.profilepic;
        let coverPicUrl = currentUser?.coverpic;

        //Uploda the images and get the new URL

        updateProfileMutation.mutate({...inputs, profilepic : profilePicUrl, coverpic: coverPicUrl});
    }

    return (
        <Modal open={update} onClose={()=>setUpdate(false)}>
            <div className='update-container'>
                <form>
                   <div className='file-upload-container'>
                        <div className='file-upload'>
                            <input type="file" style={{display: "none"}} id="profilepic" onChange={(e: any) => setProfilePic(e.target.files[0])}/>
                            <label htmlFor="profilepic" className="icon">
                                {profilePic ?  <img src={URL.createObjectURL(profilePic)}/> : <img src= {currentUser?.profilepic}/>}
                                {profilePic ? <span onClick={() => setProfilePic(null)}>Remove Profile Picture</span> : <span>Change Profile Picture</span>}
                            </label>
                        </div>

                        <div className='file-upload'>
                            <input type="file" style={{display: "none"}} id="coverpic" onChange={(e: any) => setCoverPic(e.target.files[0])}/>
                            <label htmlFor="coverpic" className="icon">
                                {coverPic ?  <img src={URL.createObjectURL(coverPic)}/> : <img src= {currentUser?.coverpic}/>} 
                                {coverPic? <span onClick={() => setCoverPic(null)}>Remove Cover Picture</span> : <span>Change Cover Picture</span>}
                            </label>
                        </div>
                   </div>
                    <input type="text" name='name' onChange={inputChangeHandler} placeholder="Update Name" value={inputs?.name}/>
                    <input type="text" name='city' onChange={inputChangeHandler} placeholder="Update City" value={inputs?.city}/>
                    <input type="text" name='website' onChange={inputChangeHandler} placeholder="Update Web Site" value={inputs?.website}/>
                    {error && <span className='error-banner'>Unexpected Error Occured.</span>}
                    <div className='buttons'>
                        <button onClick={updateprofile}>Update</button>
                        <button onClick={()=>setUpdate(false)}>Cancel</button>
                    </div>
                </form>
            </div>
        </Modal>
    )
}

export default Update