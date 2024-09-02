import React from 'react'
import "./css/Popup.css"
import { Avatar, IconButton } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close';
import PhotoLibraryOutlinedIcon from '@mui/icons-material/PhotoLibraryOutlined';
import SentimentSatisfiedOutlinedIcon from '@mui/icons-material/SentimentSatisfiedOutlined';
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import GifBoxOutlinedIcon from '@mui/icons-material/GifBoxOutlined';
function Popup() {
    return (
        <div className="popup">
            <form>
                <div className="popup-box">
                    <h3>Creat post</h3>
                    <IconButton>
                        <CloseIcon />
                    </IconButton>
                </div>
                <div className="personal__info">
                    <Avatar src='https://scontent.fmux1-1.fna.fbcdn.net/v/t39.30808-1/366533725_979561769976122_6170322973349041250_n.jpg?stp=cp0_dst-jpg_p40x40&_nc_cat=102&
                     ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeEjAC8Ox5kNJNuAzPtC912kM4bHyxdih6kzhsfLF2KHqcf2do7cC6iU4eXJ8Idb2y1b-grEciq-b9xy__2ctWSf&_nc_ohc=Bh8C3fCT_oYAX89HTi-&_nc_ht=scontent.fmux1-1.fna&oh=00_AfCyITtdxm7jbJcHoshUjCnY7rKZj2UL8vPmUfFnju_5nw&oe=6610AF22'/>
                    <h4>Taha khan</h4>
                </div>

                <div className="popup-body">
                    <textarea rows="5" placeholder="what's on your mind, Muhammad Taha" />
                </div>

                <div className="popup-buttom">
                    <div className="bot-left">
                        <h4>Add to your post</h4>
                    </div>
                    <div className="bot-right">
                        <IconButton>
                            <PhotoLibraryOutlinedIcon fontSize='large' style={{color: 'lightgreen'}}/>
                        </IconButton>
                        <IconButton>
                            <SentimentSatisfiedOutlinedIcon fontSize='large' style={{color: '#ffb100'}}/>
                        </IconButton>
                        <IconButton>
                            <FmdGoodOutlinedIcon fontSize='large' style={{color: 'red'}}/>
                        </IconButton>
                        <IconButton>
                            <GifBoxOutlinedIcon fontSize='large' style={{color: 'green'}}/>
                        </IconButton>
                        <IconButton>
                            <MoreHorizOutlinedIcon fontSize='large' style={{color: 'gray'}}/>
                        </IconButton>
                        
                    </div>
                </div>

                <input type="submit" className='submit' value="post" />
            </form>
        </div>

    )
}

export default Popup
