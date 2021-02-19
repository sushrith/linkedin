import React from 'react'
import './header.css'
import SearchIcon from '@material-ui/icons/Search';
import HeaderOption from './HeaderOption.';
import HomeIcon from '@material-ui/icons/Home';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import ChatIcon from '@material-ui/icons/Chat';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { useDispatch, useSelector } from 'react-redux';
import { logout, selectUser } from './features/userSlice';
import { auth } from './firebase';
import userEvent from '@testing-library/user-event';
function Header() {
    const dispatch = useDispatch();
    const logoutOfApp=()=>{
      dispatch(logout())
      auth.signOut();   
    }
    const user=useSelector(selectUser);
    return (
        <div className="header">
        <div className="header__left">
        <img src="https://www.flaticon.com/svg/static/icons/svg/174/174857.svg" 
        alt=""/>
        <div className="header__search">
         <SearchIcon/>
         <input type="text" placeholder="Search"/>   
         </div>   
        </div>

        <div className="header__right">
        <HeaderOption title="Home" Icon={HomeIcon}/>
        <HeaderOption title="My Network" Icon={SupervisorAccountIcon}/>

        <HeaderOption title="Jobs" Icon={BusinessCenterIcon}/>
        <HeaderOption title="Messaging" Icon={ChatIcon}/>
        <HeaderOption title="Notifications" Icon={NotificationsIcon}/>
        <HeaderOption  avatar={true}
        title="me"
        onClick={logoutOfApp}/>
        </div>
        </div>
    )
}

export default Header
