/* Creare un custom hook per alternare un valore booleano tra true e false.

Cosa deve fare?

Inizialmente false.
Ritorna il valore attuale e una funzione toggle() per cambiarlo.
Quando toggle() viene chiamato, il valore passa da true → false e viceversa. */

import useSwitch from "./Components/useSwitch"
function App(){

  const [isOn, toggle] = useSwitch()
  return (
    <>
      <div className="container">
        <h1>ON/OFF</h1>
        <p>{isOn ? "OFF" : "ON"}</p>
        <button onClick={toggle}>Change</button>
      </div>
    </>
  )
}

export default App