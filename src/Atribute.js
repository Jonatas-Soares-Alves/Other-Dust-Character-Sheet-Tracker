import './Atribute.css'
import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleUp } from '@fortawesome/free-solid-svg-icons'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'
import { faDiceSix } from '@fortawesome/free-solid-svg-icons'


function Atribute(props) {
  var [atributeValue, setAtributeValue] = useState('0')
  var [modifierValue,setModifier] = useState('+0')

  function setAtributesModifiersDynamicaly(event = false, value = false){
    const inputAtribute = handleEventType()
    function handleEventType() {
      if (event !== false) return event.target.value
      if (value !== false) return value.toString
      if (value === false) return props.dice.toString()
      return "0"
    }
    
    const num = inRange(0, 18)
    function inRange(min, max) {
      const n = parseInt(inputAtribute[0]+inputAtribute[1])
      if (n > max) return max
      if (n < min) return min
      return n
    }

    const mod = setFinalModifier()
    function setFinalModifier(){
      if(num <= 3) return '-2'
      if(num <= 7) return '-1'
      if(num <= 13) return '+0'
      if(num <= 17) return '+1'
      if(num >= 18) return '+2'
      return ''
    }

    setAtributeValue(atributeValue = num)
    setModifier(modifierValue = mod)

  }

  function setAtributePlusOne(){
    setAtributesModifiersDynamicaly(false, atributeValue+1)
  }

  function setAtributeMinusOne(){
    setAtributesModifiersDynamicaly(false, atributeValue-1)
  }

  function setRandomValueForAtribute(){
    setAtributesModifiersDynamicaly(false, Math.ceil(Math.random()*6))
  }
  
  useEffect(()=>{
    if(typeof props.dice !== 'undefined'){
      setAtributesModifiersDynamicaly()
    }
  })

  return (
    <div className="Atribute">
      <div>{props.children}</div>
        <input className={"AtrName"+props.children} type="text" onChange={setAtributesModifiersDynamicaly} value={atributeValue ?? ""}></input>
        <div className='controlers'>
          <button className='changeBtn BtnPlus' onClick={setAtributePlusOne}><FontAwesomeIcon icon={faAngleUp} /></button>
          <button className='changeBtn BtnRandom' onClick={setRandomValueForAtribute}><FontAwesomeIcon icon={faDiceSix} /></button>
          <button className='changeBtn BtnMinus' onClick={setAtributeMinusOne}><FontAwesomeIcon icon={faAngleDown} /></button>
        </div>
      <div>{modifierValue}</div>
    </div>
  )
  
}

export default Atribute
