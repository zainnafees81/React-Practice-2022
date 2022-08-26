import React from 'react'
import { useState } from 'react';
import './Cal.css';


function Calculater() {
    const [result, setValue] = useState("")

    const Answer = (event) => {
        let newState = result
        newState += event.target.value
        setValue(newState);
    }

    const Clear = () => {
        setValue("")
    }
    const backSpace = () => {
        setValue(result.slice(0, result.length - 1))
    }
    const Result = () => {
        setValue(eval(result).toString())
    }


    return (
    
        <div>
        <div className='Cal'>
            <style>{"body {background-image: url( )}{backgroundRepeat: 'no-repeat}"}</style>
            <h4 className='heading'>Calculater</h4>
            <input type="text" value={result} id="answer" />
            <div>

                <input type="button" value="CE" className='btns' onClick={Clear} />
                <input type="button" value="C" className='btns' onClick={Clear} />
                <input type="button" value="&larr;" className='btns' onClick={backSpace} />
                <input type="button" value="/" className='btns' onClick={Answer} />
            </div>
            <div>
                {/* <button name='9' onClick={Answer} className="btns" >9</button> */}
                <input type="button" value="9" className='btns' onClick={Answer} />
                <input type="button" value="8" className='btns' onClick={Answer} />
                <input type="button" value="7" className='btns' onClick={Answer} />
                <button value="*" onClick={Answer} className="btns" >x</button>
                {/* <input type="button" value="*" className='btns' onClick={Answer} /> */}
            </div>
            <div>
                <input type="button" value="6" className='btns' onClick={Answer} />
                <input type="button" value="5" className='btns' onClick={Answer} />
                <input type="button" value="4" className='btns' onClick={Answer} />
                <input type="button" value="-" className='btns' onClick={Answer} />
            </div>
            <div>
                <input type="button" value="3" className='btns' onClick={Answer} />
                <input type="button" value="2" className='btns' onClick={Answer} />
                <input type="button" value="1" className='btns' onClick={Answer} />
                <input type="button" value="+" className='btns' onClick={Answer} />
            </div>
            <div>
                <input type="button" value="%" className='btns' onClick={Answer} />
                <input type="button" value="0" className='btns' onClick={Answer} />
                <input type="button" value="." className='btns' onClick={Answer} />
                <input type="button" value="=" className='btns' onClick={Result} />
            </div>

        </div>
        <h1 className='head'>Made By Zain Nafees</h1>
        </div>

    )
}

export default Calculater;