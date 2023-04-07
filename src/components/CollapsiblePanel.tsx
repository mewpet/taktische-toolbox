import { useEffect, useRef, useState } from "react";

//Assets
import { CHEVRON_LEFT } from "../assets/exports";


const CollapsiblePanel = () => {
    const [ open, setOpen ] = useState<boolean>(false);
    const [ showText, setShowText ] = useState<boolean>(false);
    const [ height, setHeight ] = useState<string>();
    const [ initialHeight, setInitialHeight ] = useState<string>();
    const contentRef = useRef(null);
    
    useEffect(() => {
        console.log(open)
        if (contentRef && contentRef.current) {
            setInitialHeight((contentRef.current as HTMLElement).clientHeight/10 + "rem")
            setHeight("0px")
        }
    }, [contentRef])

    
    const handleResize = () => {
        if (contentRef && contentRef.current) {
            setInitialHeight((contentRef.current as HTMLElement).clientHeight/10 + "rem")
            if (!open) 
                setHeight(initialHeight)
        }
    }
    useEffect(() => {
        window.addEventListener("resize", handleResize, false);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        console.log(open)
    }, [open]);

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
                <div className="title">How things work here!</div>
                <div className="button-container">
                    <img style={{transform: !open ? "rotate(-90deg)" : "rotate(90deg)"}} className="button" src={CHEVRON_LEFT} alt="" />
                </div>
            </div>
            <div style={{ height: height }} className="text-container">
                <div ref={contentRef} style={{ opacity: showText ? "1" : "0"}} className="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit incidunt officia labore molestiae pariatur impedit repellendus, iure maiores quas voluptatum? Autem consequuntur, dolorum aperiam corporis rem inventore accusantium fugit exercitationem odio, molestias tempora quasi repellendus consequatur placeat ea, cupiditate obcaecati quia recusandae hic distinctio labore laudantium! Minus corporis fuga vero ullam reiciendis cupiditate quisquam nemo atque, animi iusto saepe laudantium!</div>
            </div>
        </div>
    )
}

export default CollapsiblePanel