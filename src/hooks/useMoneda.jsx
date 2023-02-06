import { useState } from 'react'

function useMoneda (label, stateInicial, opciones) {
  const [state, actualizarState] = useState(stateInicial)
  const Seleccionar = () => {
    return (
      <>
        <label>Moneda</label>
        <select
          onChange={e => actualizarState(e.target.value)}
          value={state}
        >
          <option value=''> {label} </option>
          {opciones.map(moneda => {
            return (
              <option key={moneda.codigo} value={moneda.codigo}> {moneda.nombre} </option>
            )
          })}
        </select>
      </>
    )
  }

  return [state, Seleccionar, actualizarState]
}

export default useMoneda
