import React from 'react'
import Sidebaroption from './Sidebaroption'
import "./css/Sidebarcss.css"
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';

function Sidebar() {
  return (
    <div className='Sidebarcss'>
      <Sidebaroption src="https://scontent.fmux1-1.fna.fbcdn.net/v/t39.30808-1/326800362_499219842380839_1310115305067218940_n.jpg?stp=dst-jpg_p200x200&_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeFym2ROCJF0ghg4uI_PDnEoWk4lgSvQkgdaTiWBK9CSB4czSRNffqw8p2GjpYCAFegHz_TQgGI7yZHdJiOKntL5&_nc_ohc=6sQ8mQPUy6IAX8RSpqD&_nc_ht=scontent.fmux1-1.fna&oh=00_AfACNfuxrYpFkwu4TfqFW8bQMLFELl2UrRhl_Xg_15k8qA&oe=6605A881" title="Muhammad Taha"/> 
      <Sidebaroption src="https://www.facebook.com/marketplace/?ref=bookmark" title="Friends"/>
      <Sidebaroption src="https://www.facebook.com/marketplace/?ref=bookmark" title="Feed"/>
      <Sidebaroption src="https://www.facebook.com/marketplace/?ref=bookmark" title="Groups"/>
      <Sidebaroption src="https://www.facebook.com/marketplace/?ref=bookmark" title="Maretplace"/>
      <Sidebaroption src="https://www.facebook.com/marketplace/?ref=bookmark" title="Vedio"/>
      <Sidebaroption src="https://www.facebook.com/marketplace/?ref=bookmark" title="Memories"/>
      <Sidebaroption src="https://www.facebook.com/marketplace/?ref=bookmark" title="Saved"/>
      <Sidebaroption src="https://www.facebook.com/marketplace/?ref=bookmark" title="Pages"/>
      <Sidebaroption src="https://www.facebook.com/marketplace/?ref=bookmark" title="Events"/>
      <Sidebaroption Icon={ExpandMoreOutlinedIcon} title="See More"/>
      
    </div>
  )
}
export default Sidebar
