import { useEffect, useState } from "react"

function UseOnlineStatus() {

    const [onLineStatus, setOnlineStatus ] = useState(true)

    useEffect(()=>{
    window.addEventListener("offline",()=>{
        setOnlineStatus(false)
    })
    window.addEventListener("online",()=>{
        setOnlineStatus(true)
    })
    },[])

  return onLineStatus
}

export default UseOnlineStatus