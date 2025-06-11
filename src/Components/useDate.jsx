import { useEffect, useState } from "react"


export default function useDate(){
    const [now, setNow] = useState(new Date())

   useEffect(()=>{
   const interval = setInterval(()=>{
        setNow(new Date())
    }, 1000)

    return clearInterval(interval)
   }, [])

   const date = now.toLocaleDateString()
   const time = now.toLocaleTimeString()

   return [date, time]
}