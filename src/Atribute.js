import './Atribute.css';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp } from '@fortawesome/free-solid-svg-icons';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { faDiceSix } from '@fortawesome/free-solid-svg-icons';


function Atribute(props) {
  var [atributeValue,setAtribute] = useState('0');
  var [modValue,setMod] = useState('+0');

  function setAtr(event = false, value = false){
    let atr = "0";
    if(event !== false){
      setAtribute(atributeValue = event.target.value);
      atr = event.target.value;
    }else if(event === false && value !== false){
      atr = value.toString;
    }else if(event === false && value === false){
      atr = props.dice.toString();
    }
    
    if(atr.length > 0){
      let num = parseInt(atr[0]+atr[1]);

      if(num > 99){
        num = 99;
      }

      if(num < 0){
        num = 0;
      }

      let mod = '';

      if(num <= 3){
          mod = '-2';
      }

      if(num >= 4 && num <= 7){
          mod = '-1';
      }

      if(num >= 8 && num <= 13){
          mod = '+0';
      }
        
      if(num >= 14 && num <= 17){
          mod = '+1';
      }
        
      if(num >= 18){
          mod = '+2';
      }

      setAtribute(atributeValue = num);
      setMod(modValue = mod);
    }else{
      setAtribute(atributeValue = '0');
    }
  }

  function atrPlus(){
    setAtr(false, atributeValue+1);
  }

  function atrMinus(){
    setAtr(false, atributeValue-1);
  }

  function atrRandom(){
    setAtr(false, Math.ceil(Math.random()*6));
  }
  
  useEffect(()=>{
    if(typeof props.dice !== 'undefined'){
      setAtr();
    }
  })

  return (
    <div className="Atribute">
      <div>{props.children}</div>
        <input className={"AtrName"+props.children} type="text" onChange={setAtr} value={atributeValue ?? ""}></input>
        <div className='controlers'>
          <button className='changeBtn BtnPlus' onClick={atrPlus}><FontAwesomeIcon icon={faAngleUp} /></button>
          <button className='changeBtn BtnRandom' onClick={atrRandom}><FontAwesomeIcon icon={faDiceSix} /></button>
          <button className='changeBtn BtnMinus' onClick={atrMinus}><FontAwesomeIcon icon={faAngleDown} /></button>
        </div>
      <div>{modValue}</div>
    </div>
  );
  
}

export default Atribute;
