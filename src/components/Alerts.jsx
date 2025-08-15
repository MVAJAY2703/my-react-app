import React from "react";
export default function Alerts(props) {
    return (
        <>
        
            {props.alert && <div className={`alert alert-${props.alert.type.toLowerCase()}`} role="alert">
                <strong>{props.alert.type}</strong> : {props.alert.message}
            </div>}
            </>
         
    

    )
}