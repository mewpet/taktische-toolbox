import { ReactNode } from "react";
import { useNavigate } from "react-router-dom";


interface NavButtonProps {
    text: string
    link?: string
    children?: ReactNode
}

const NavButton = (props: NavButtonProps) => {
    let navigate = useNavigate();

    return (    
        <div onClick={() => props.link ? navigate(props.link) : {}} className="nav-button">
            {props.children}
            <div className="title">{props.text}</div>
        </div>
    )
}

export {
    NavButton
}