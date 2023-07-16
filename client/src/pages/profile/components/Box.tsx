import React from "react";

export interface boxProp {
    id: number,
    name: string,
    location: string,
    airbnbLink?: string,
    vrboLink?: string,
    CoverImage?: any,
}

export const Box: React.FC<boxProp> = (props) => {
    return (
        <div className={"stdBox"}>
            <h4>{props.name}</h4>
            <h4>{props.location}</h4>
        </div>
    )
}
