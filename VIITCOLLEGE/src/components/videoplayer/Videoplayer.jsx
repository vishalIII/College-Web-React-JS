import React,{useRef} from 'react'
import './Videoplayer.css'
import video from '../../assets/screen-capture.mp4'

const Videoplayer = ({playstate,setplaystate}) => {
   const player = useRef(null);
   const closeplayer=(e)=>{
       if(e.target === player.current){
           setplaystate(false);
       }
   }
   return (
    <div>
         <div className={`video-player ${playstate?'':'hide'}`} ref={player} onClick={closeplayer}>
            <video src={video} autoPlay muted controls></video>
        </div>
    </div>
  )
}

export default Videoplayer
