import React from 'react'
import './styles.css'

function InputDetails() {

  const InputComponent = ({
    label = '',
    unit = '',
    value = '',
  }) => {

    const [dataValue, setDataValue] = React.useState(value)

    return (
      <div className='col-md-2 input-container'>
        <label>{label}</label>
        <div className='input-wrap'><input type="text" value={dataValue} onChange={(e)=>{
          setDataValue(e.target.value)
        }}/><span>{unit}</span></div>
      </div>
    )
  }

  return (
    <div className='row'>
      <InputComponent label="Temp" unit='°C'/>
      <InputComponent label='Pulse' unit='/min'/>
      <InputComponent label='R.R' unit='/min'/>
      <InputComponent label='Systolic' unit='mmHg'/>
      <InputComponent label='Diastolic' unit='mmHg'/>
      <InputComponent label='O2SAT' unit='%'/>
      <InputComponent label='A.G' unit='cm'/>
      <InputComponent label='Height' unit='cm'/>
      <InputComponent label='Weight' unit='kg'/>
    </div>
  )
}

export default InputDetails