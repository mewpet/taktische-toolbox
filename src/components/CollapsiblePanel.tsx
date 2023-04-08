import { useEffect, useRef, useState } from "react";

//Assets
import { CHEVRON_LEFT } from "../assets/exports";

interface CollapsiblePanelProps {
    title: string,
    text: string
}

const CollapsiblePanel = (props: CollapsiblePanelProps) => {
    const [ open, setOpen ] = useState<boolean>(false);
    const [ showText, setShowText ] = useState<boolean>(false);
    const [ height, setHeight ] = useState<string>();
    const [ initialHeight, setInitialHeight ] = useState<string>();
    const contentRef = useRef(null);
    
    useEffect(() => {
        if (contentRef && contentRef.current) {
            console.log((contentRef.current as HTMLElement).getBoundingClientRect().height)
            setInitialHeight((contentRef.current as HTMLElement).clientHeight/10 + "rem")
            setHeight("0px")
        }
    }, [contentRef])

    
    const handleResize = () => {
        if(!open) {
            setOpen(false)
            setShowText(false);
            setTimeout(() => {
                setHeight("0px")
            }, 200)
        }
        if (contentRef && contentRef.current) {
            setInitialHeight((contentRef.current as HTMLElement).clientHeight/10 + "rem")
        }
    }
    useEffect(() => {
        window.addEventListener("resize", handleResize, false);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    function animateCollapse() {
        if (open) {
            setShowText(false);
            setOpen(false)
            setTimeout(() => {
                setHeight("0px")
            }, 200);
        }
        else {
            setHeight(initialHeight)
            setOpen(true)
            setTimeout(() => {
            setShowText(true);
            }, 200);
        }
    }

    return (
        <div onClick={() => animateCollapse()} className="collapsible-panel">
            <div className="visible-row">
                <div className="title">{props.title}</div>
                <div className="button-container">
                    <img style={{transform: !open ? "rotate(-90deg)" : "rotate(90deg)"}} className="button" src={CHEVRON_LEFT} alt="" />
                </div>
            </div>
            <div style={{ height: height }} className="text-container">
                <div ref={contentRef} style={{ opacity: showText ? "1" : "0"}} className="text">{props.text}</div>
            </div>
        </div>
    )
}

export default CollapsiblePanel