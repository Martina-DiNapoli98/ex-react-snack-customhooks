import { useState } from "react"

export default function useSwitch(InitialValue = false){

    const [isOn, setIsOn] = useState(InitialValue)
    

   
    function toggle(){
        setIsOn(!isOn)
    }
    return [isOn, toggle]

}