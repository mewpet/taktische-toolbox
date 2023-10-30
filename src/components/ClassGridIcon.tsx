import { useState } from "react";
import { transform } from "typescript";

interface ClassGridIconProps {
    icon: string
    enabled: boolean
    scaleThis?: number
    setEnabled: (bool: boolean) => void
}

const ClassGridIcon = (props: ClassGridIconProps) => {

    function toggleEnabled(current: boolean) {
        props.setEnabled(!current)
    }

    return (
        <img 
            onClick={() => toggleEnabled(props.enabled)}
            style={{ 
                filter: props.enabled ? "none" : "grayscale(100%)",
                transform: props.enabled ? "scale(1)" : `scale(${props.scaleThis})`
            }}
            src={props.icon}
            className="class-grid-icon"
        />
    )
}

export {
    ClassGridIcon
}