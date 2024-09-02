import React from 'react'
import "./css/Feedcss.css"
import Storyreel from './Storyreel'
import Msgsendder from './Msgsendder'
import Post from './Post'
// import Popup from './Popup'


function Feed() {
  return (
    <div className='feed'>
      <Storyreel/>
      <Msgsendder/>
      {/* <Popup/> */}
      <Post photoURL="" image="https://scontent.fmux1-1.fna.fbcdn.net/v/t39.30808-6/448996515_122121922832306935_6364806842966600023_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_ohc=HcH10hiNf6IQ7kNvgGFhe1L&_nc_ht=scontent.fmux1-1.fna&oh=00_AYAabOnjyXWUslA49F2iq0S7qMrpG6IOqk5YNJ8ArJybYw&oe=667F339F" 
      username="Muhammad Taha" timestamp="9:15 AM" message="This is test msg" />
      <Post photoURL="" image="https://scontent.fmux1-1.fna.fbcdn.net/v/t39.30808-6/448993772_122185826000064259_476589327529358281_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_ohc=-1gYRJpvSB8Q7kNvgGeAuKU&_nc_ht=scontent.fmux1-1.fna&oh=00_AYCWKlBo7eCNn8j420FPj3qEnawQcu88VW2gJKs8PUt9CQ&oe=667F30E3" 
      username="Muhammad Taha" timestamp="9:15 AM" message="This is test msg" />
      <Post photoURL="" image="https://scontent.fmux1-1.fna.fbcdn.net/v/t39.30808-6/448945210_122185826852064259_375556213269314762_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_ohc=t0kLnmu9dAMQ7kNvgEewbqT&_nc_ht=scontent.fmux1-1.fna&oh=00_AYA4C6TNDTT7MITAB2NBDoAhnBt9DIBT6NzK4z-dqGMebg&oe=667F202B" 
      username="Muhammad Taha" timestamp="9:15 AM" message="This is test msg" />
      <Post photoURL="" image="https://scontent.fmux1-1.fna.fbcdn.net/v/t39.30808-6/449073496_122185826570064259_2873265177455519268_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_ohc=FM180kjchTMQ7kNvgFNPBGm&_nc_ht=scontent.fmux1-1.fna&oh=00_AYAIHpkF5NYSmPn80JUO6B8htbuuB1EChZUQDxpK1H74gA&oe=667F29CC" 
      username="Muhammad Taha" timestamp="9:15 AM" message="This is test msg" />
      <Post photoURL="" image="https://scontent.fmux1-1.fna.fbcdn.net/v/t39.30808-6/448960415_1180918566272795_3044524806813815074_n.jpg?stp=dst-jpg_s640x640&_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_ohc=tpqy5W4U6RAQ7kNvgHGTCXM&_nc_ht=scontent.fmux1-1.fna&oh=00_AYCk-2ZKOEvMIjmeeqQdngZp6In6cuihQFBPlfScQYY3Ag&oe=667F02EB" 
      username="Muhammad Taha" timestamp="9:15 AM" message="This is test msg" />
      <Post photoURL="" image="https://scontent.fmux1-1.fna.fbcdn.net/v/t39.30808-6/285489570_321044536868282_4283764395048223244_n.jpg?stp=dst-jpg_p180x540&_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_ohc=lcjFxai7xKsQ7kNvgFZGCvy&_nc_ht=scontent.fmux1-1.fna&oh=00_AYAFyJZziftnButuYJsKGbsEnPH_NUt_9hv7X4IS_K6BLQ&oe=667F2709" 
      username="Muhammad Taha" timestamp="9:15 AM" message="This is test msg" />
    </div>
    
  )
}
export default Feed
