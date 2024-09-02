import React from 'react'
import "./css/Cssnav.css"
import SearchIcon from '@mui/icons-material/Search';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import StorefrontIcon from '@mui/icons-material/Storefront';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import SportsEsportsOutlinedIcon from '@mui/icons-material/SportsEsportsOutlined';
import { Avatar, IconButton } from '@mui/material';
import AppsOutlinedIcon from '@mui/icons-material/AppsOutlined';
import CommentOutlinedIcon from '@mui/icons-material/CommentOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';

function navbar() {
  return (
    <div className='navbar'>
      <div className="nav-left">
        <nav class="navbar navbar-light bg-light">
          <div className="container">
            <img src="https://1000logos.net/wp-content/uploads/2017/02/Facebook-Logosu.png?w=512&h=512" alt="A description of the image"/>
            <div className="nav-search">
              < SearchIcon />
              <input type="text" placeholder='Search Facebook' />
            </div>
          </div>
        </nav>
      </div>
      <div className="nav-midel">
        <div className="nav-option option--active">
        <HomeOutlinedIcon />
        </div>
        <div className="nav-option">
        <OndemandVideoIcon/>
        </div>
        <div className="nav-option">
        <StorefrontIcon/>
        </div>
        <div className="nav-option">
        <PeopleOutlineIcon/>
        </div>
        <div className="nav-option">
        <SportsEsportsOutlinedIcon/>
        </div>
      </div>

      <div className="nav-right">
        <div className="info">
          <Avatar src='https://scontent.fmux1-1.fna.fbcdn.net/v/t39.30808-1/326800362_499219842380839_1310115305067218940_n.jpg?stp=dst-jpg_p200x200&_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_ohc=W-fzSK6eBUkQ7kNvgH_k2x4&_nc_ht=scontent.fmux1-1.fna&oh=00_AYAYWe3JOqU1kM8ZtAJFrvDKHV0zI3WPxBHXujKG4whKbQ&oe=667F2AC1'/>
          <h5>Muhammad Taha</h5>
        </div>
        <IconButton>
              <AppsOutlinedIcon/>
        </IconButton>
        <IconButton>
             <CommentOutlinedIcon/>
        </IconButton>
        <IconButton>
             <NotificationsNoneOutlinedIcon/>
        </IconButton>
        {/* <Avatar/> */}

      </div>

    </div>

  )
}

export default navbar
