"use client";
import { ReactNode, useState } from "react";

interface SlidePanelProps{
    title: string;
    children: ReactNode;
}

const SlidePanel = (
    {title, children} : SlidePanelProps
) => {

    const [contentVisible, setContentVisible] = useState(false);
    const [iconWay, setIconWay] = useState("down");

    return (
        <div className="slide-panel">

            <div className="title">
            <h2>{title}</h2>
            <button
                onClick={(e) => {
                    if(contentVisible){
                        setContentVisible(false);
                        setIconWay("down");
                    }
                    else{
                        setContentVisible(true);
                        setIconWay("up");
                    }
                }}
            >
                <i className={`bx bx-chevrons-${iconWay} bx-tada`} />
            </button>
            </div>
            

            <div className="content"
                style={contentVisible ? {display: "flex"} : {display: "none"}}
            >
                {children}
                
            </div>

        </div>
    );
}
export default SlidePanel;