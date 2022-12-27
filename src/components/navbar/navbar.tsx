import { Link } from 'react-router-dom';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import Brightness5OutlinedIcon from '@mui/icons-material/Brightness5Outlined';
import WidgetsOutlinedIcon from '@mui/icons-material/WidgetsOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import "./navbar.scss";
import { useContext } from 'react';
import { DarkModeContext } from '../../context/DarkmodeContext';
import { AuthContext } from '../../context/AuthContext';

const Navbar = () => {

  const {darkmode, toggleMode} = useContext(DarkModeContext);
  const {currentUser} = useContext(AuthContext);
  
  return (
    <div className='navbar'>
      <div className="left">
        <Link to="/" style={{textDecoration: "none"}}>
          <span>SOCIAL APP</span>
        </Link>
        <HomeOutlinedIcon/>
        {darkmode === 'false' ? 
          <DarkModeOutlinedIcon onClick = {toggleMode} style={{cursor: 'pointer'}}/> : 
          <Brightness5OutlinedIcon onClick = {toggleMode} style={{cursor: 'pointer'}}/>
        }
        <WidgetsOutlinedIcon/>
      </div>

      <div className="search">
        <SearchOutlinedIcon/>
        <input type="text" placeholder='Search'/>
      </div>

      <div className="right">
        <AccountCircleOutlinedIcon/>
        <EmailOutlinedIcon/>
        <NotificationsNoneOutlinedIcon/>
        <div className="user">
          <img src={currentUser?.profileImage}/>
          <span>{currentUser?.name}</span>
        </div>
      </div>
    </div>
  )
}

export default Navbar;