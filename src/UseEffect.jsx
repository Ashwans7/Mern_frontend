import { useEffect, useState } from "react"


function LearningUseEffect(){
    //first type
    // useEffect(()=>{
    //     console.log("useEffect triggered")
    //     // data fetch logic

    // },[])
    //second type
    const [count,setCount] = useState(0)
    const [like,setLike] = useState(1)
    const [latitude,setLatitude] = useState()
    const [longitude,setLongitude] = useState()
    const increaseCount =()=>{
        setCount(count+1)
    }
    const decreaseCount = ()=>{
        setCount(count-1)
    }
    const increaseLike =()=>{
        setLike(like+1)
    }
    // useEffect(()=>{
    //     console.log('count and like updated')

    // },[count,like])
    //type 2 sending it in backend
    // useEffect(()=>{
    //     console.log('like triggered')

    // },[like])

    //third  type
    useEffect(()=>{
        console.log("render all")
        setLaltitude(latitude+0.1)
        setLongitude(longitude+0.1)
    })
    return(
        <>
        <h1>{count} </h1>
        <button onClick={increaseCount}>+</button>
        <button onClick={decreaseCount}>-</button>

        <h2>{like}</h2>
        <button onClick={increaseLike}>Like me</button>
        
        </>
    )
}

export default LearningUseEffect