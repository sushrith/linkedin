import React from 'react'
import './Sidebar.css'
import {Avatar} from '@material-ui/core'
import { selectUser } from './features/userSlice'
import { useSelector } from 'react-redux'
function Sidebar() {
    
    const recentItem=(topic)=>{
        return <div className="sidebar__recentItem">
            <span className="sidebar__hash">#</span>
            <p>{topic}</p>
        </div>
    }

    const user=useSelector(selectUser);
    
    
    return (
        <div className="sidebar">
            <div className="sidebar__top">

                <img src="https://images.unsplash.com/photo-1579546929518-9e396f3cc809?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" alt=""/>
                <Avatar className="sidebar__avatar" src={user.photoUrl}>
                    {
                        user.email[0]
                    }
                </Avatar>
                <h2>{user.displayName}</h2>
              <h4>{user.email}</h4>
              </div>
            <div className="sidebar__stats">
                <div className="sidebar__stat">
                    <p>Who viewed you</p> 
                    <p className="sidebar__statNumber">136</p>   
                </div>
                <div className="sidebar__stat">
                <p>views on post</p> 
                    <p className="sidebar__statNumber">12,576</p>      
                </div>

            </div>
           

            <div className="sidebar__bottom">
            <p>Recent</p>
            {recentItem('reactjs')}
            {recentItem('programming')}
            {recentItem('softwareengineering')}
            {recentItem('design')}
            {recentItem('developer')}
            </div>


        </div>
    )
}

export default Sidebar
