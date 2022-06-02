import { useState } from "react";
import Atribute from './Atribute';
import "./AtrTable.css";

function getDices(){
    let dices = [];
    let soma = 0;

    for (let i = 0; i < 6; i++) {
        for (let i = 0; i < 3; i++) {
            soma += Math.ceil(Math.random()*6);
        }

        dices.push(soma);
        soma = 0;
    }

    return dices;
}

function AtrTable(){
    var [dices,setDices] = useState(0);

    function roll(){
        setDices(dices = getDices());
        setTimeout(()=>{setDices(dices = [undefined, undefined, undefined, undefined, undefined, undefined]);}, 1);
    }

    
    return (
        <div className="AtrTable">
            <button onClick={roll}>Roll Atributes</button>
            <div id="str">
                <Atribute dice={dices[0]}>STR</Atribute>
            </div>
            <div id="int">
                <Atribute dice={dices[1]}>INT</Atribute>
            </div>
            <div id="wis">
                <Atribute dice={dices[2]}>WIS</Atribute>
            </div>
            <div id="dex">
                <Atribute dice={dices[3]}>DEX</Atribute>
            </div>
            <div id="con">
                <Atribute dice={dices[4]}>CON</Atribute>
            </div>
            <div id="cha">
                <Atribute dice={dices[5]}>CHA</Atribute>
            </div>
        </div>
    );
}

export default AtrTable;