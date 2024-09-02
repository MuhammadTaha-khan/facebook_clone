import React, { } from 'react'
import "./Feed.js"
import "./css/msgsendcss.css"
import { Avatar, } from '@mui/material'
import VideoCameraFrontOutlinedIcon from '@mui/icons-material/VideoCameraFrontOutlined';
import PhotoLibraryOutlinedIcon from '@mui/icons-material/PhotoLibraryOutlined';
import SentimentSatisfiedOutlinedIcon from '@mui/icons-material/SentimentSatisfiedOutlined';
function Msgsendder() {
  //   const[open,setOpen] = useState(true)
  //   const handleClose=()=>{
  //     setOpen(false)
  // }
  return (
    <>
      {/* <Modal open={open} onClose={handleClose}>
      hahajdhud
    </Modal> */}
    
      <div className='msgsend'>
        <div className="msg__top">
          <Avatar />
          <form>
            <input type="text" placeholder="what's on your mind Muhammad Taha" />
          </form>
        </div>
        <div className="msg__buttom">
          <div className="opetion">
            <VideoCameraFrontOutlinedIcon style={{ color: 'red' }} fontSize='large' />
            <p>Live vedio</p>
          </div>
          <div className="opetion">
            <PhotoLibraryOutlinedIcon style={{ color: 'lightgreen' }} fontSize='large' />
            <p>Photo/video</p>
          </div>
          <div className="opetion">
            <SentimentSatisfiedOutlinedIcon style={{ color: '#ffb100' }} fontSize='large' />
            <p>Felling/activity</p>
          </div>
        </div>
      </div>
            
    </>
  )
}

export default Msgsendder
