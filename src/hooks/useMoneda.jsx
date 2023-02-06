import { useState } from 'react'
import styled from '@emotion/styled'

const Label = styled.label`
  font-family: 'Bebas Neue', cursive;
  color: #FFF;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 2.4rem;
  margin-top: 2rem;
  display: block;
`
const Select = styled.select`
  width: 100%;
  display: block;
  padding: 1rem;
  -webkit-appearance: none;
  border-radius: 10px;
  border: none;
  font-size: 1.2rem
`

function useMoneda (label, stateInicial, opciones) {
  const [state, actualizarState] = useState(stateInicial)
  const Seleccionar = () => {
    return (
      <>
        <Label>Moneda</Label>
        <Select
          onChange={e => actualizarState(e.target.value)}
          value={state}
        >
          <option value=''> {label} </option>
          {opciones.map(moneda => {
            return (
              <option key={moneda.codigo} value={moneda.codigo}> {moneda.nombre} </option>
            )
          })}
        </Select>
      </>
    )
  }

  return [state, Seleccionar, actualizarState]
}

export default useMoneda
