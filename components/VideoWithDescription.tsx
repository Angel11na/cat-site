import React from "react";

interface VideoWithDescriptionProps{
    title:string;
    text: string;
    videoSrc:string;
}

const VideoWithDescription: React.FC<VideoWithDescriptionProps> =(
{  title, text, videoSrc}

)=>{

    return(
        <div className="text-video-block">
            <h1>{title}</h1>
            <div className="video-and-text">
            <video src={videoSrc}
            controls
            style={{width: "400" , height: "400px"}}/>
            <p>
                {text}</p>
            </div>
        </div>

    );
}


export default VideoWithDescription;