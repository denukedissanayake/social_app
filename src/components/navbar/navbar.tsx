import { Link } from 'react-router-dom';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import Brightness5OutlinedIcon from '@mui/icons-material/Brightness5Outlined';
import WidgetsOutlinedIcon from '@mui/icons-material/WidgetsOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import "./navbar.scss";

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="left">
        <Link to="/" style={{textDecoration: "none"}}>
          <span>SOCIAL APP</span>
        </Link>
        <HomeOutlinedIcon/>
        <Brightness5OutlinedIcon/>
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
          <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/User_icon-cp.svg/1200px-User_icon-cp.svg.png'/>
          <span>John Doe</span>
        </div>
      </div>
    </div>
  )
}

export default Navbar;