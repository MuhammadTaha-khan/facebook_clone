import React from 'react'
import PropTypes from 'prop-types';
import './css/Postcss.css'
import { Avatar } from '@mui/material'
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import PublicOutlinedIcon from '@mui/icons-material/PublicOutlined';
import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';

function Post({photoURL, image, username, timestamp, message}) {
  return (
    <div className='post'>
      <div className="post__top">
            <div className="post__left">
              <Avatar src={photoURL}/>
              <div className="userinfo">
                <h4>{username}</h4>
                <p>{timestamp} <PublicOutlinedIcon/></p>
              </div>
            </div>
          <MoreHorizOutlinedIcon/>
      </div>

      {/* middle part */}
      <div className="post__midle" >
        <p style={{paddingBottom:'15px'}}> {message}</p>
        {image && <img src={image}/>}
      </div>

      {/* buttom part */}
      <div className="post__buttom">
        <div className="post__buttomoption">
            <ThumbUpAltOutlinedIcon/> <p>Like</p>
        </div>
        <div className="post__buttomoption">
            <ChatBubbleOutlineOutlinedIcon/> <p>Comment</p>
        </div>
        <div className="post__buttomoption">
            <ShareOutlinedIcon/> <p>Share</p>
        </div>
      </div>
    </div>
  )
}
  Post.propTypes = {
    photoURL: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    timestamp: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired
  };


export default Post
