import useMoneda from '../hooks/useMoneda'
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
  const MONEDAS = [
    { codigo: 'USD', nombre: 'Dolar de Estados unidos' },
    { codigo: 'MXN', nombre: 'Peso Mexicano' },
    { codigo: 'ARS', nombre: 'Peso Argentino' },
    { codigo: 'EUR', nombre: 'Euro' }
  ]
  const [moneda, SelectMonedas, actualizarState] = useMoneda('Elige tu moneda', '', MONEDAS)
  return (
    <form>
      <SelectMonedas />
      <Boton
        type='submit'
        value='Calcular'
      />
    </form>
  )
}

export default Formulario
