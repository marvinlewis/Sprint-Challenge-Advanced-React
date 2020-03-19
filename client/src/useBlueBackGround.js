import React, { useState, useEffect } from "react";

export const useBlueBackGround = () => {

    const [ blue, setBlue ] = useState(false);

    useEffect(() => {
        if(blue === true){
            return document.body.classList.add("blue")
        }
        else {
            return document.body.classList.remove("blue")
        }
    }, [blue])

    return [ blue, setBlue ]

}



