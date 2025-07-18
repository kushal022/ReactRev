import React, { useCallback, useRef, useState } from 'react'

const LikeCounter = () => {
    const [likes, setLikes] = useState(0);

    const canClickRef = useRef(true); // stores Throttle State
    const timeoutRef = useRef(null); // stores setTimeout ID
    
    const handleLike = useCallback(()=>{
        if(!canClickRef.current){
            console.log('Please wait before clicking again...')
            return;
        }
        //Proceed to like
        setLikes(prev => prev+1);
        canClickRef.current = false; // prevent immediate next click

        //Reset after 2 seconds
        timeoutRef.current = setTimeout(()=>{
            canClickRef.current = true;
            console.log('You can like again');
        },2000)
    },[])
    
    return (
    <div>
        <h4>Likes: {likes} </h4>
        <button onClick={handleLike} >Like</button>
    </div>
  )
}

export default LikeCounter