import { useEffect, useState } from 'react'
import axios from 'axios'
import useMoneda from '../hooks/useMoneda'
import useCriptomoneda from '../hooks/useCriptomoneda'
import Error from './Error'
import styled from '@emotion/styled'

const Boton = styled.input`
  margin-top: 20px;
  font-weight: bold;
  font-size: 20px;
  padding: 10px;
  background-color: #66a2fe;
  border: none;
  width: 100%;
  border-radius: 10px;
  color: #FFF;
  transition: background-color .3s ease;
  

  &:hover {
    background-color: #326AC0;
    cursor: pointer;
  }
`

function Formulario () {
  const [listacripto, guardarCriptomonedas] = useState([])
  const MONEDAS = [
    { codigo: 'USD', nombre: 'Dolar de Estados unidos' },
    { codigo: 'MXN', nombre: 'Peso Mexicano' },
    { codigo: 'ARS', nombre: 'Peso Argentino' },
    { codigo: 'EUR', nombre: 'Euro' }
  ]
  const [moneda, SelectMonedas] = useMoneda('Elige tu moneda', '', MONEDAS)
  const [criptomoneda, SelectCripto] = useCriptomoneda('Elige tu Criptomoneda', '', listacripto)
  const [error, guardarError] = useState(false)
  useEffect(() => {
    const consultarApi = async () => {
      const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD'
      const resultado = await axios.get(url)
      guardarCriptomonedas(resultado.data.Data)
    }
    consultarApi()
  }, [useCriptomoneda, useMoneda])
  const cotizarMoneda = e => {
    e.preventDefault()
    if (moneda === '' || criptomoneda === '') {
      return guardarError(true)
    }
    guardarError(false)
  }
  return (
    <form
      onSubmit={cotizarMoneda}
    >
      {error ? <Error mensaje='Todos los campos son obligatorios' /> : null}
      <SelectMonedas />
      <SelectCripto />
      <Boton
        type='submit'
        value='Calcular'
      />
    </form>
  )
}

export default Formulario
