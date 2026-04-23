import { useState } from "react"

function UseState (){
    // var count = 0
    // const increaseCount = ()=>{
    //     count++
    //     console.log("Clicked add button")
    //     console.log(count)
    // }
    // const decreaseCount=()=>{
    //     count--
    //     console.log("Clicked minus button")
    //     console.log(count)

    // }
    // // const bucket = useState("Ashwan")

    // // const [momo,setMomo] = useState(10)
    // // console.log(momo)
    // // console.log(setMomo)

    const [count,setCount] = useState(0)
    const increaseCount=()=>{
        setCount(count+1)

    }
    const decreaseCount=()=>{
        setCount(count-1)

    }
    return(
        <>
        <h1>{count}</h1>
        <button onClick={increaseCount}>+</button>
        <button onClick={decreaseCount}>-</button>

        </>
    )
}

export default UseState